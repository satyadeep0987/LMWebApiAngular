import { Component, OnInit, NgZone } from '@angular/core';
import { ServiceBookService } from '../service-book.service';
import { BookModel } from '../book-model';
import {FormsModule , NgForm, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-book-insert',
  templateUrl: './book-insert.component.html',
  styleUrls: ['./book-insert.component.css']
})
export class BookInsertComponent implements OnInit {

  srv:ServiceBookService;
  book = new BookModel();
  ngZone:NgZone;
  router:Router;
  str:string;

  navbarOpen = false;
	public clicked = false;
	_el: any;
	toggleNavbar() {
		this.navbarOpen = !this.navbarOpen;
	}

	ngAfterViewInit(): void {
		throw new Error("Method not implemented.");
	}

	onClick(event): void {
		event.preventDefault();
		event.stopPropagation();
		this.clicked = true;
	}

  constructor(srv : ServiceBookService,ngZone:NgZone,router:Router) { 
    this.srv = srv;
    this.ngZone = ngZone;
    this.router = router;
  }

 

  ngOnInit(): void {
  }

  InsertBook():void{
    this.srv.InsertBookModel(this.book).subscribe((data:string)=>{
      alert(data);
      this.ngZone.run(() => this.router.navigateByUrl('/bookinfo'));
    });
  }

}
