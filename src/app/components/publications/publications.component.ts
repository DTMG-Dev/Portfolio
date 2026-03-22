import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PublicationItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss'
})
export class PublicationsComponent {
  @Input({ required: true }) publications: PublicationItem[] = [];

  hasPublicationLink(url: string | undefined): boolean {
    return Boolean(url && url.trim() && url !== '#');
  }
}