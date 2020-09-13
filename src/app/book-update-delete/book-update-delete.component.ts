import { Component, OnInit, NgZone } from '@angular/core';
import { ServiceBookService } from '../service-book.service';
import { BookModel } from '../book-model';
import {FormsModule , NgForm, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceUserService } from '../service-user.service';

@Component({
  selector: 'app-book-update-delete',
  templateUrl: './book-update-delete.component.html',
  styleUrls: ['./book-update-delete.component.css']
})
export class BookUpdateDeleteComponent implements OnInit {

  srv:ServiceBookService;
  book:BookModel;
  result = new BookModel;
  ngZone:NgZone;
  router:Router;
  str:string;
  id:number;

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

  selectBookBYId(id:number):void{
    this.id=id;
    this.srv.GetBookModelById(this.id).subscribe((data:BookModel)=>{
      this.book = data;
    })
  }

  UpdateBook():void{
    this.result.bname= this.book.bname;
    this.result.bgener=this.book.bgener;
    this.result.bprice = this.book.bprice;
    this.srv.UpdateBookModel(this.id,this.result).subscribe((data:string)=>{
      alert(data);
      this.ngZone.run(() => this.router.navigateByUrl('/bookinfo'));
    })
  }

  DeleteBook():void{
    this.srv.DeleteBookModel(this.id).subscribe((data:any)=>{
      if(data==200)
      {
        alert("Book deleted");
        this.ngZone.run(() => this.router.navigateByUrl('/bookinfo'));
      }
      else if(data ==400)
      {
        alert("Book not Found");
      }
      else if(data == 401)
      {
        alert("Can't be deleted bok Is In Use");
      }
      
    })
  }

}
