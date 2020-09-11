import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';
import { BookissueComponent } from './bookissue/bookissue.component';
import { UserInsertComponent } from './user-insert/user-insert.component';
import { UserUpdateDeleteComponent } from './user-update-delete/user-update-delete.component';

const routes: Routes = [
  { path:'userinfo',component:UserComponent},
  { path:'bookinfo',component:BookComponent},
  { path:'issueinfo',component:BookissueComponent},
  { path:'InsertUser',component:UserInsertComponent},
  { path:'UpdateDeleteUser',component:UserUpdateDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
