import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CancelYesDialogComponent } from './cancel-yes-dialog/cancel-yes-dialog.component';
import { DateComponent } from './date/date.component';
import { FooterComponent } from './footer/footer.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@NgModule({
  declarations: [ 
    CancelYesDialogComponent,
    DateComponent,
    FooterComponent,
    LoginDialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FlexModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    FlexModule,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
    DateComponent,
    LoginDialogComponent
  ],
  entryComponents: [
    CancelYesDialogComponent,
    DateComponent,
    LoginDialogComponent
  ]
})
export class SharedModule { }