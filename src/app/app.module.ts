import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';
import { BookissueComponent } from './bookissue/bookissue.component';
import { UserInsertComponent } from './user-insert/user-insert.component';
import { UserUpdateDeleteComponent } from './user-update-delete/user-update-delete.component';
import { IsueBookComponent } from './isue-book/isue-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { BookInsertComponent } from './book-insert/book-insert.component';
import { BookUpdateDeleteComponent } from './book-update-delete/book-update-delete.component';
import { AuthLibraryComponent } from './auth-library/auth-library.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BookComponent,
    BookissueComponent,
    UserInsertComponent,
    UserUpdateDeleteComponent,
    IsueBookComponent,
    ReturnBookComponent,
    BookInsertComponent,
    BookUpdateDeleteComponent,
    AuthLibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
