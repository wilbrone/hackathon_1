import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//third party systems
 import { CarouselModule } from 'ngx-bootstrap/carousel';
 import { ButtonsModule } from 'ngx-bootstrap/buttons';
 import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    BookListComponent,
    SearchComponent,
    SearchDetailComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),

    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
