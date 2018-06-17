import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { HousesComponent } from './houses/houses.component';
import { CharactersComponent } from './characters/characters.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';

const routes: Routes = [
  {path: 'books', component: BooksComponent},
  {path: 'houses', component: HousesComponent},
  {path: 'characters', component: CharactersComponent}, 
  {path: 'bookDetail/:id', component: BookDetailComponent},
  {path: 'characterDetail/:id', component: CharacterDetailComponent},
  {path: 'houseDetail/:id', component: HouseDetailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
