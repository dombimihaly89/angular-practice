import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon-service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons: any;
  pokemonName: string;
  URL: string;

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(res => {
    this.pokemons = res;
    console.log(this.pokemons)
    })
  }

  navigateBack() {
    this.router.navigateByUrl('');
  }

  filterPokemons() {
    return this.pokemons.results.filter(x => this.pokemons.results.indexOf(x) >= this.pokemons.results.length - 10);
  }

  onSubmit() {
    this.pokemons.results.push(
      {name: this.pokemonName, url: this.URL}
    )
    console.log(this.pokemons);
  }

}
