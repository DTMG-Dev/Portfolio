import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProjectItem } from '../../models/portfolio.model';
import { RevealDirective } from '../../directives/reveal.directive';
import { getSkillIconMeta } from '../../utils/skill-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input({ required: true }) projects: ProjectItem[] = [];

  private readonly failedStackIcons = new Set<string>();

  private stackKey(tech: string): string {
    return tech.trim().toLowerCase();
  }

  stackIconSvg(tech: string): string | undefined {
    if (this.failedStackIcons.has(this.stackKey(tech))) {
      return undefined;
    }

    return getSkillIconMeta(tech).svgUrl;
  }

  stackIconSymbol(tech: string): string {
    return getSkillIconMeta(tech, 'code').symbol;
  }

  onStackIconError(tech: string): void {
    this.failedStackIcons.add(this.stackKey(tech));
  }
}

