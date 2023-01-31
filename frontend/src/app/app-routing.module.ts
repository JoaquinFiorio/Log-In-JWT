import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskComponent } from "./component/task/task.component";
import { PrivateTaskComponent } from "./component/private-task/private-task.component";
import { SigninComponent } from "./component/signin/signin.component";
import { SignupComponent } from "./component/signup/signup.component";
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: "", redirectTo: "/task", pathMatch: 'full'
  },
  {
    path: "task", component: TaskComponent
  },
  {
    path: "private", component: PrivateTaskComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "signin", component: SigninComponent
  },
  {
    path: "signup", component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
