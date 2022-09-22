// export enum EnergyType { mana, stamina}

export type EnergyType = 'mana' | 'stamina';

export default interface Energy {
  type_: EnergyType;
  amount: number;
}

// const testEnergyType1: EnergyType = 'mana'; // OK
// const testEnergyType2: EnergyType = 'qualquer coisa'; // erro
