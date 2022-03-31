import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
   // tslint:disable-next-line:typedef
   createDb(){
     const heroes =  [
      {
        id : 11,
        name : 'Dr Nice',
        date : new Date('1990-12-31'),
        power : 'strong ',
        information : 'Died'
      },
      { id : 12,
      name : 'Narco',
      date : new Date('1990-12-31'),
      power : 'strong ',
      information : 'Died'
      },
      { id : 13,
        name : 'Bombarto',
        date : new Date('1990-12-31'),
        power : 'strong ',
        information : 'Died'
      },
      { id : 14,
        name : 'Celeristas',
        date : new Date('1990-12-31'),
        power : 'strong ',
        information : 'Died'
      },
      { id : 15,
        name : 'Mangenta',
        date : new Date('1990-12-31'),
        power : 'strong ',
        information : 'Died'
      },
      { id : 16,
        name : 'RunbberMan',
        date : new Date('1990-12-31'),
        power : 'strong ',
        information : 'Died'
      },
      { id : 17,
        name : 'Dynama',
        date : new Date('1990-12-31'),
        power : 'strong ',
        information : 'Died'
      },
      { id : 18,
        name : 'Dr IQ',
        date : new Date('1990-12-31'),
        power : 'strong ',
        information : 'Died'
      },
      { id : 19,
        name : 'Magma',
        date : new Date('1990-12-31'),
        power : 'strong ',
        information : 'Died'
      },
      { id : 20,
        name : 'Tornado',
        date : new Date('1990-12-31'),
        power : 'strong ',
        information : 'Died'
      },
    ];
     return {heroes };
  }
    genId(heroes: Hero[]): number {
      return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11 ;
    }
  constructor() { }
}
