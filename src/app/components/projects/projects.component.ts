import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProjectItem } from '../../models/portfolio.model';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input({ required: true }) projects: ProjectItem[] = [];
}