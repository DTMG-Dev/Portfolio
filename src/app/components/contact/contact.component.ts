import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonProfile } from '../../models/portfolio.model';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input({ required: true }) profile!: PersonProfile;
  @Input({ required: true }) contactPitch = '';

  submitMessage = '';

  private readonly formBuilder = inject(FormBuilder);

  readonly form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(12)]]
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.submitMessage = 'Please complete all required fields before sending.';
      return;
    }

    const value = this.form.getRawValue();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${value.name}`);
    const body = encodeURIComponent(`${value.message}\n\nFrom: ${value.name}\nEmail: ${value.email}`);

    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
    this.submitMessage = 'Opening your default email app with pre-filled details.';
    this.form.reset();
  }
}