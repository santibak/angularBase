import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 10000
    }
  ];

   addCharacter(character: Character): void {

    const newCharacter: Character = {
      id: uuid(), ...character
    }
    this.characters.push(newCharacter);
    console.log(this.characters);
  }

  //  deleteCharacter(index: number){
  //    this.characters.splice(index, 1);
  //  }

  deleteCharacterById(id: string){

    this.characters = this.characters.filter( character =>
      character.id !== id
        )
        console.log(this.characters);
      }

}
