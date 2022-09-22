import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.addArchetypeInstances();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static addArchetypeInstances(): void {
    this._archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._archetypeInstances;
  }
}