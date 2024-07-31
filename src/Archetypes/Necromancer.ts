import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _createdInstances = 0;
  private energy: EnergyType;

  constructor(name: string) {
    super(name);
    this.energy = 'mana';
    Necromancer._createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdInstances;
  }
}

export default Necromancer;