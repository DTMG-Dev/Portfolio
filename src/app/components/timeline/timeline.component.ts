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

  private readonly monthMap: Record<string, number> = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12
  };

  get sortedTimeline(): TimelineEntry[] {
    return [...this.timeline].sort((a, b) => {
      const aEnd = this.periodEndScore(a.period);
      const bEnd = this.periodEndScore(b.period);

      if (aEnd !== bEnd) {
        return bEnd - aEnd;
      }

      return this.periodStartScore(b.period) - this.periodStartScore(a.period);
    });
  }

  iconFor(type: TimelineEntry['type']): string {
    return type === 'experience' ? 'work_history' : 'school';
  }

  private periodEndScore(period: string): number {
    const parts = period.split('-').map((part) => part.trim());
    const endPart = parts[parts.length - 1] ?? '';
    return this.parseDatePart(endPart, true);
  }

  private periodStartScore(period: string): number {
    const parts = period.split('-').map((part) => part.trim());
    const startPart = parts[0] ?? '';
    return this.parseDatePart(startPart, false);
  }

  private parseDatePart(input: string, isEnd: boolean): number {
    const normalized = input.toLowerCase();
    if (normalized.includes('present')) {
      return 999912;
    }

    const monthYearMatch = normalized.match(
      /^(january|february|march|april|may|june|july|august|september|october|november|december)\s+(\d{4})$/
    );

    if (monthYearMatch) {
      const month = this.monthMap[monthYearMatch[1]] ?? 1;
      const year = Number(monthYearMatch[2]);
      return year * 100 + month;
    }

    const yearMatch = normalized.match(/\b(\d{4})\b/);
    if (yearMatch) {
      const year = Number(yearMatch[1]);
      return year * 100 + (isEnd ? 12 : 1);
    }

    return 0;
  }
}