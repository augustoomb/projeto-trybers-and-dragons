import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints:number): number {
    const damageResult = this._lifePoints - attackPoints;

    if (damageResult > 0) {
      this._lifePoints -= attackPoints;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter) {
    enemy.receiveDamage(this._strength);
  }
}