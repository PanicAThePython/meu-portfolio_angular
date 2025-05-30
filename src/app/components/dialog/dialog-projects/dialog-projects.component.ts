import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProject } from '../../../interface/IProject.interface';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  imports: [MatDialogContent],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit{
  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProject
  ){}
  public getData = signal<IProject | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data)
  }

  public closeModal(){
    return this._dialogRef.close()
  }
}
