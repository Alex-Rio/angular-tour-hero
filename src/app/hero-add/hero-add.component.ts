import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../Service/hero.service';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css']
})
export class HeroAddComponent implements OnInit {
  hero: Hero| undefined;
  heroes: Hero[] = [];
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,

  ){}
  getHeroes(): void{
    this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes);
  }
  addName(name: string , power: string): void {
    name = name.trim();
    power = power.trim();
    if (!name){return; }
    this.heroService.addHero({name} as Hero)
    .subscribe(hero => {this.heroes.push(hero);
   });
    if (!power){return; }
    this.heroService.addHero({power} as Hero)
    .subscribe(hero => {this.heroes.push(hero); });
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
