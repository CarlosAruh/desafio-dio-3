class hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }
  attack() {
    let atk = '';

    switch (this.type) {
      case 'mago':
        atk = 'magia';
        break;
      case 'guerreiro':
        atk = 'espada';
        break;
      case 'monge':
        atk = 'artes marciais';
        break;
      case 'ninja':
        atk = 'shuriken';
        break;
      default:
        atk = 'usou um ataque desconhecido';
    }

    console.log(`O ${this.type} atacou usando ${atk}`);
  }
}

const mago = new hero('Merlin', 35, 'mago');
const guerreiro = new hero('Conan', 30, 'guerreiro');
const monge = new hero('Bruce Lee', 40, 'monge');
const ninja = new hero('Hanzo', 28, 'ninja');

mago.attack();
guerreiro.attack();
monge.attack();
ninja.attack();
