// src/Archetypes/Mage.ts
import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private static instances = 0;
  private static readonly ENERGY: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.instances;
  }

  get energyType(): EnergyType {
    return (this.constructor as typeof Mage).ENERGY;
  }
}
