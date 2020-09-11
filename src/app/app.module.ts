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

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BookComponent,
    BookissueComponent,
    UserInsertComponent,
    UserUpdateDeleteComponent,
    IsueBookComponent
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
