import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _chara1: Fighter = new Character('charac1'),
    private _chara2: Fighter = new Character('charac2'),    
  ) { 
    super(_chara1);
  }

  fight(): number {
    while (this._chara1.lifePoints !== -1 && this._chara2.lifePoints !== -1) {
      this._chara1.attack(this._chara2);
      this._chara2.attack(this._chara1);
    }
    
    // return this._chara1.lifePoints === -1 ? -1 : 1;
    const result = super.fight(); // SE 1: charac1 GANHOU; SE -1, charac2 GANHOU
    return result;
  }
}
