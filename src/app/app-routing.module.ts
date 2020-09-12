import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';
import { BookissueComponent } from './bookissue/bookissue.component';
import { UserInsertComponent } from './user-insert/user-insert.component';
import { UserUpdateDeleteComponent } from './user-update-delete/user-update-delete.component';
import { IsueBookComponent } from './isue-book/isue-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { BookInsertComponent } from './book-insert/book-insert.component';
import { BookUpdateDeleteComponent } from './book-update-delete/book-update-delete.component';

const routes: Routes = [
  { path:'userinfo',component:UserComponent},
  { path:'bookinfo',component:BookComponent},
  { path:'issueinfo',component:BookissueComponent},
  { path:'InsertUser',component:UserInsertComponent},
  { path:'UpdateDeleteUser',component:UserUpdateDeleteComponent},
  { path:'IssueBook',component:IsueBookComponent},
  { path:'ReturnBook',component:ReturnBookComponent},
  { path:'InsertBook',component:BookInsertComponent},
  { path:'UpdateDelete',component:BookUpdateDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
