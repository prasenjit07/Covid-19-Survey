import { InMemoryDbService } from 'angular-in-memory-web-api';


export class HomeData implements InMemoryDbService {

  createDb(): { homes: any} {
    const homes: any = [
      {
        id: 1,
        houseNumber: 3,
        houseAddress:'Jamshedpur',
        members:[
            {
                name:'Prasenjit',
                gender:'male',
                age: 22
            },
            {
                name:'Shubhajit',
                gender:'male',
                age: 15
            }
        ]
      },
      {
        id: 2,
        houseNumber: 5,
        houseAddress:'Lucknow',
        members:[
            {
                name:'Aayushi',
                gender:'female',
                age: 20
            },
            {
                name:'Aayush',
                gender:'male',
                age: 21
            }
        ]
      },
      {
        id: 3,
        houseNumber: 6,
        houseAddress:'Jaipur',
        members:[
            {
                name:'Nandini',
                gender:'female',
                age: 20
            },
            {
                name:'Naman',
                gender:'male',
                age: 21
            },
            {
                name:'Tanay',
                gender:'male',
                age: 21
            }
        ]
      },
    ];
    return { homes };
  }
}
