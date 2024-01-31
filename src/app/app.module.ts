import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReversePipe } from './pipe/reverse.pipe'
import { HttpClientModule } from '@angular/common/http';

import { AuthorizationComponent } from './components/authorization/authorization.component';
import { InfoComponent } from './components/info/info.component';
import { UsersComponent } from './components/info/users/users.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { AddRadioComponent } from './components/add-radio/add-radio.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ToolBarComponent } from './components/toolbar/toolbar.component';
import { FilterComponent } from './components/info/filter/filter.component';
import { TestingComponent } from './components/testing/testing.component';
import {MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent} from '@angular/material/dialog'
  import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    InfoComponent,
    ToolBarComponent,
    FilterComponent,
    UsersComponent,
    ReversePipe,
    AddRadioComponent,
    LayoutComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
