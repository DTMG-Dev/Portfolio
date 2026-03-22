import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input({ required: true }) items: NavItem[] = [];
  @Input({ required: true }) name = '';
  @Input({ required: true }) isDarkMode = false;

  @Output() sectionSelected = new EventEmitter<string>();
  @Output() themeToggle = new EventEmitter<void>();

  isMenuOpen = false;

  selectSection(id: string): void {
    this.sectionSelected.emit(id);
    this.isMenuOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme(): void {
    this.themeToggle.emit();
  }
}