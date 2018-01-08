import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from '../book service/book.service';

@Component({
  selector: 'search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers: [BookService]
})
export class SearchDetailComponent implements OnInit, OnDestroy {
	private routeSub: any;
	private req: any; 
	query: string;
	BookList: [any];

  constructor(private route: ActivatedRoute, private _book:BookService) { }

  ngOnInit() {
		  	this.routeSub = this.route.params.subscribe(params=>{
		  		console.log(params)
		  		this.req = this._book.search(this.query).subscribe(data=>{
		  		this.BookList = data as [any];
		  	})	
  	})
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe()
  	this.routeSub.unsubscribe()
  }

}
