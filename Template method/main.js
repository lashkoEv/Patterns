class Player {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  takeDamage(damage) {
    this.hp -= damage;

    console.log(
      `Player ${this.name} takes ${damage} damage! Current HP: ${this.hp}.`
    );

    if (this.hp <= 0) {
      console.log(`Player ${this.name} dies!`);
    }
  }
}

class Trap {
  constructor(damage) {
    this.damage = damage;
  }

  launch(player) {
    this.beforeHook(player);
    this.appear(player);
    this.causeDamage(player);
    this.collapse(player);
    this.afterHook(player);
  }

  beforeHook(player) {}

  afterHook(player) {}

  appear(player) {
    throw new Error('Not implemented!');
  }

  causeDamage(player) {
    throw new Error('Not implemented!');
  }

  collapse(player) {
    throw new Error('Not implemented!');
  }
}

class BasicTrap extends Trap {
  appear(player) {
    console.log(`A basic trap appears on the path of a player ${player.name}.`);
  }

  causeDamage(player) {
    player.takeDamage(this.damage);
  }

  collapse(player) {
    console.log(
      `A basic trap is destroyed in the path of a player ${player.name}.`
    );
  }
}

class SuperTrap extends Trap {
  constructor(basicDamage, extraDamage) {
    super(basicDamage);
    this.extraDamage = extraDamage;
  }

  appear(player) {
    console.log(`A super trap appears on the path of a player ${player.name}.`);
  }

  causeDamage(player) {
    player.takeDamage(this.damage);
  }

  collapse(player) {
    console.log(
      `A super trap is destroyed in the path of a player ${player.name}.`
    );
  }

  afterHook(player) {
    console.log(
      `A super trap places a curse on the player ${player.name} when destroyed.`
    );

    player.takeDamage(this.extraDamage);
  }
}

const player = new Player('John Doe', 50);

const firstBasicTrap = new BasicTrap(15);
const secondBasicTrap = new BasicTrap(15);
const superTrap = new SuperTrap(15, 5);

firstBasicTrap.launch(player);
secondBasicTrap.launch(player);
superTrap.launch(player);
