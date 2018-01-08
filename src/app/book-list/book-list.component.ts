import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

import { BookService } from '../book service/book.service';


@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {
	private req: any;
	title = "Welcome to my Library" 
	head = "Book Titles"
	BookList: [any];
	

	bookImageList = [
     {image: "/assets/images/nature/10.jpg", title: "Into the Water", link:'/books/by%20Paul%20Hawkins'},
     {image: "/assets/images/nature/3.jpg", title: "Little Fires Everywhere", link:'/books/by%20Celeste%20Ng'},
     {image: "/assets/images/nature/9.jpg", title: "The Hate U Give", link:'/books/by%20Angie%20Thomas'}
	]
  
  constructor(private http:Http, private _book:BookService) { }

  ngOnInit() {
  	this.req = this._book.list().subscribe(data=>{
  		this.BookList = data as [any];
  	})
  }

  ngOnDestroy(){
  	this.req.unsubscribe()

  }

  preventNormal(event:MouseEvent, image:any){
  	if (!image.prevented){
  		event.preventDefault()
  		image.prevented = true;
  	}
  }
  

}
