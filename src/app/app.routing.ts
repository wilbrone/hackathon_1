import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';


const appRoutes: Routes = [
    {
    	path:"",
      component: HomeComponent,
    },
    {
      path:"search",
      component: SearchDetailComponent,
    },
    {
    	path:"books",
      component: BookListComponent,
    },
    {
    	path:"books/:description",
      component: BookComponent,
    }

]

@NgModule({
	imports: [
    RouterModule.forRoot(
       appRoutes
    	)
	],
	exports: [
    RouterModule
	]
})
export class AppRoutingModule{}