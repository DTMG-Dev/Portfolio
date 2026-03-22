import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PersonProfile } from '../../models/portfolio.model';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input({ required: true }) profile!: PersonProfile;
}