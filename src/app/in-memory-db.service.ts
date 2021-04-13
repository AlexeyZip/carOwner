import { InMemoryDbService } from 'angular-in-memory-web-api';

export class inMemoryDb implements InMemoryDbService {
  createDb() {
    const owners = [
    {   
        id: 0,
        firstName: 'Roman',
        lastName: 'Romanov',
        middleName: 'Romanovich',
        cars: [
            {
                number: 'AX3434AX',
                name: 'Toyota',
                model: 'Venza',
                year: 2019  
            } ,
            {
                number: 'AX3344AX',
                name: 'Tesla',
                model: 'Model S',
                year: 2019  
            } 
        ] 
    },
    {   
        id: 1,
        firstName: 'Oleg',
        lastName: 'Olegov',
        middleName: 'Olegovich',
        cars: [
            {
                number: 'AX3234AX',
                name: 'Daewoo',
                model: 'Lanos',
                year: 2007  
            }
        ]  
    },
    {   
        id: 2,
        firstName: 'Alex',
        lastName: 'Alexov',
        middleName: 'Alexeev',
        cars: [
            {
                number: 'AX4444AX',
                name: 'Tesla',
                model: 'Model X',
                year: 2020  
            }  
        ] 
    },
    {   
        id: 3,
        firstName: 'Nastya',
        lastName: 'Nastyanova',
        middleName: 'Olegovna',
        cars: [
            {
                number: 'AX3333AX',
                name: 'Lexus',
                model: 'RX',
                year: 2014 
            } 
        ] 
    },
    {   
        id: 4,
        firstName: 'Bogdan',
        lastName: 'Bogdanov',
        middleName: 'Bogdanovich',
        cars: [
            {
                number: 'AX2222AX',
                name: 'Audi',
                model: 'A8',
                year: 2007  
            } 
        ] 
    },
    {   
        id: 5,
        firstName: 'Sasha',
        lastName: 'Sasha',
        middleName: 'Sasha',
        cars: [
            {
                number: 'AX3494AX',
                name: 'ZAZ',
                model: 'Vida',
                year: 2014  
            } 
        ] 
    },
      
    ];
    return { owners };
  }
}
