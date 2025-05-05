import { Component, inject, signal } from '@angular/core';
import { IProject } from '../../interface/IProject.interface';
import {MatDialog}  from "@angular/material/dialog"
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
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

  public openDialog(data: IProject){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
