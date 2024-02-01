import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { InfoComponent } from './components/info/info.component';
import { ToolBarComponent } from './components/toolbar/toolbar.component';
import { AddRadioComponent } from './components/info/add-radio/add-radio.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path: 'authorization', component: AuthorizationComponent },
  {
    path: '', 
    component: LayoutComponent,
    children: [
      { path: 'info', component: InfoComponent },
      { path: 'add-radio', component: AddRadioComponent }
    ]
  },
  { path: '', redirectTo: '/authorization', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
