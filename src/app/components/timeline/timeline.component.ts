import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TimelineEntry } from '../../models/portfolio.model';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input({ required: true }) timeline: TimelineEntry[] = [];

  iconFor(type: TimelineEntry['type']): string {
    if (type === 'experience') {
      return 'work_history';
    }

    if (type === 'education') {
      return 'school';
    }

    return 'workspace_premium';
  }
}