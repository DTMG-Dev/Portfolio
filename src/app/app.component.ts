import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AboutComponent } from './components/about/about.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoadingSkeletonComponent } from './components/loading-skeleton/loading-skeleton.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { portfolioData } from './data/portfolio.data';
import { NavItem } from './models/portfolio.model';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    TimelineComponent,
    CertificationsComponent,
    PublicationsComponent,
    ContactComponent,
    LoadingSkeletonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  readonly data = portfolioData;
  readonly isLoaded = signal(false);
  readonly isDarkMode = computed(() => this.themeService.isDarkMode);

  readonly navItems: NavItem[] = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' }
  ];

  private loaderTimer?: ReturnType<typeof setTimeout>;

  constructor(
    private readonly themeService: ThemeService,
    private readonly titleService: Title,
    private readonly metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Trinadh Gangadhar | Software Engineer Portfolio');

    this.metaService.updateTag({
      name: 'description',
      content:
        'Portfolio of Dangeti Trinadh Manikanta Gangadhar, Software Engineer II specializing in Angular, .NET, Web APIs, SQL, and MongoDB.'
    });
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'Angular Developer, .NET Developer, Software Engineer Portfolio, ASP.NET Web API, MongoDB, SQL, Frontend Engineer'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'Trinadh Gangadhar | Software Engineer Portfolio' });
    this.metaService.updateTag({
      property: 'og:description',
      content:
        'Explore projects, experience, certifications, publications, and technical strengths of a full-stack engineer focused on scalable Angular and .NET solutions.'
    });

    this.loaderTimer = setTimeout(() => this.isLoaded.set(true), 1000);
  }

  ngOnDestroy(): void {
    if (this.loaderTimer) {
      clearTimeout(this.loaderTimer);
    }
  }

  onSelectSection(sectionId: string): void {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) {
      return;
    }

    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onToggleTheme(): void {
    this.themeService.toggleTheme();
  }
}