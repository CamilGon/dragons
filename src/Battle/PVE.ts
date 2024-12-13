// src/Battle/PVE.ts

import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  private _player: Fighter;
  private _monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  private areAllMonstersDefeated(): boolean {
    return this._monsters.every((monster) => monster.lifePoints <= 0);
  }

  private isPlayerDefeated(): boolean {
    return this._player.lifePoints <= 0;
  }

  private monsterAttack(): void {
    this._monsters.forEach((monster) => {
      if (!this.isPlayerDefeated()) {
        monster.attack(this._player);
      }
    });
  }

  fight(): number {
    while (!this.areAllMonstersDefeated() && !this.isPlayerDefeated()) {
      this._player.attack(
        this._monsters[0],
      ); // Attacks the first monster in the array
      if (!this.areAllMonstersDefeated()) {
        this.monsterAttack();
      }
    }

    if (this.isPlayerDefeated()) {
      return -1;
    }

    return 1;
  }
}

export default PVE;
