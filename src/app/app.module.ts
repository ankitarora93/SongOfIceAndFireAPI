import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { HousesComponent } from './houses/houses.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CharactersComponent,
    HousesComponent,
    BookDetailComponent,
    HouseDetailComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
