import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _createdInstances = 0;
  private energy: EnergyType;

  constructor(name: string) {
    super(name);
    this.energy = 'stamina';
    Warrior._createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdInstances;
  }
}

export default Warrior;