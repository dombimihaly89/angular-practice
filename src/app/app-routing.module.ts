import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DogComponent } from './dog/dog.component';


const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
  },
  {
    path: 'pokemon',
    component: PokemonComponent,
  },
  {
    path: 'dog',
    component: DogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
