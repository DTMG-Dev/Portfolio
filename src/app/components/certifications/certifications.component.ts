import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { CertificationItem } from '../../models/portfolio.model';
import { getSkillIconMeta } from '../../utils/skill-icons';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  @Input({ required: true }) certifications: CertificationItem[] = [];

  private readonly failedSkillIcons = new Set<string>();

  private skillKey(skillName: string): string {
    return skillName.trim().toLowerCase();
  }

  hasCredentialLink(url: string): boolean {
    return Boolean(url && url.trim() && url !== '#');
  }

  iconSvg(skillName: string): string | undefined {
    if (this.failedSkillIcons.has(this.skillKey(skillName))) {
      return undefined;
    }

    return getSkillIconMeta(skillName).svgUrl;
  }

  iconSymbol(skillName: string): string {
    return getSkillIconMeta(skillName, 'auto_awesome').symbol;
  }

  onSkillIconError(skillName: string): void {
    this.failedSkillIcons.add(this.skillKey(skillName));
  }
}