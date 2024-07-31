import Race from './Race';

class Elf extends Race {
  private static _instanceCount = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instanceCount += 1;
  }

  static createdRacesInstances(): number {
    return Elf._instanceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
export default Elf;