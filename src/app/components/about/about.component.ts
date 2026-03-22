import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PersonProfile } from '../../models/portfolio.model';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @Input({ required: true }) profile!: PersonProfile;
  @Input({ required: true }) aboutBlurb = '';
}