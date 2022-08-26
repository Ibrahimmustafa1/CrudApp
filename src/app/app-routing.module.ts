import { CreateUserComponent } from './create-user/create-user.component';
import { EdituserComponent } from './edituser/edituser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CreateUserComponent },
  { path: 'edituser/:email', component: EdituserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
