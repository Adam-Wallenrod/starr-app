import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {UploadService} from "../upload.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @ViewChild('file') file
  public files: Set<File> = new Set();

  progress: number;
  caneBeClosed: boolean = true;
  primaryButtonText: string = 'Upload';
  showCancelButton: boolean = true;
  uploading: boolean = false;
  uploadSuccessful: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              public uploadService: UploadService) { }

  ngOnInit() {
  }


  addFiles () {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;

    for (let key in files) {
      if(!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
  }

}
