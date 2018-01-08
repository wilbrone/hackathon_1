import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book service/book.service';


@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit, OnDestroy {
    private routeSub:any;
    books: any;
    private req:any;
    description:string; 
  constructor(private route: ActivatedRoute, private _book:BookService) { }

  ngOnInit() {
  	this.routeSub = this.route.params.subscribe(params => {	
  		this.description = params['description']
      this.req = this._book.get(this.description).subscribe(data=>{
        this.books = data
      })
  	})
  }
  ngOnDestroy(){
  	this.routeSub.unsubscribe()
    this.req.unsubscribe()
  }

}
