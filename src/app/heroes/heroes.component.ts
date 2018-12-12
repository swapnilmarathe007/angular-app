import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  allowNewServer = false
  serverCreationStatus = 'No server was created'
  serverName = "Tested Server";

  constructor(private heroService: HeroService) {
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  onCreateServer(){
    this.serverCreationStatus = 'Server was created' + this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    
  }
}