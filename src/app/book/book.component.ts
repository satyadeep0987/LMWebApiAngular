import { Component, OnInit } from '@angular/core';
import { ServiceBookService } from '../service-book.service';
import { BookModel } from '../book-model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  srv:ServiceBookService;
  result:BookModel[];

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

  constructor(srv:ServiceBookService) {
      this.srv = srv;
   }

  ngOnInit(): void {
    this.ShowAllBooks();
  }

  ShowAllBooks():void{
    this.srv.GetBookModel().subscribe((data:BookModel[])=>{
      this.result = data;
    })
  }

}
