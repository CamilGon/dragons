import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _createdInstances = 0;
  private energy: EnergyType;

  constructor(name: string) {
    super(name);
    this.energy = 'stamina';
    Ranger._createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdInstances;
  }
}

export default Ranger;