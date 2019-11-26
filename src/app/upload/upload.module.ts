import {NgModule} from "@angular/core";
import {DialogComponent} from "./dialog/dialog.component";
import {CommonModule} from "@angular/common";
import {MatButtonModule, MatDialogModule, MatListModule, MatProgressBarModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UploadService} from "./upload.service";

@NgModule({
  //declarations: [UploadComponent, DialogComponent],
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [UploadService],
  //exports: [UploadComponent]
})
export class UploadModule { }
