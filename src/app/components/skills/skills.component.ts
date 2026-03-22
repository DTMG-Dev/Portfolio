import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkillCategory } from '../../models/portfolio.model';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @Input({ required: true }) skills: SkillCategory[] = [];
}