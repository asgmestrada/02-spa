import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {


    heroes: any[] = [];
    termino: string;
    constructor( private _heroesService: HeroesService,
                 private activateRoute: ActivatedRoute,
                 private router: Router
               ){
    console.log("constructor");
  }


    ngOnInit(): void
    {
      this.activateRoute.params.subscribe( params =>{
        console.log(params['termino']);
        this.heroes = this._heroesService.buscarHeroes(params['termino']);
        this.termino =   params['termino'];
        console.log(this.heroes);
    });
  }

  verHeroe(idx: number){
    this.router.navigate( ['/heroe', idx]);
    console.log(idx);
  }

  regresarHeroes(){
    this.router.navigate(['/heroes']);
  }



}
