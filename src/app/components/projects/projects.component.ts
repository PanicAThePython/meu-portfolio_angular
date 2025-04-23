import { Component, signal } from '@angular/core';
import { IProject } from '../../interface/IProject.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProject[]>([
    {
      src: "assets/img/projects/vfull.png",
      alt: "vida fullstack icon",
      title: "Vida fullstack",
      width: "100px",
      height: "51px",
      description: "...",
      links: [{
        name: "Conheça o blog",
        href: "https://vidafullstack.com.br"
      }]
    }
  ])
}
