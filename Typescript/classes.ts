// Interface can only describe the public-facing side of the class and may not include private members.
interface DiamondI {
  whatIsClassName: () => string;
}
class Diamond implements DiamondI {
  private _diamondId: number;
  constructor(diamondId: number) {
    this._diamondId = diamondId;
  }
  get diamondId(): number {
    return this._diamondId;
  }
  set diamondId(id: number) {
    if (id >= 0 && id < 5) {
      this._diamondId = id;
    } else {
      throw new Error("diamondId must be between 1 to 5");
    }
  }

  // We don't want to make it public but availabe in subclasses so making it protected
  protected getDiamond(): string {
    switch (this._diamondId) {
      case 1:
        return `14K`;
      case 2:
        return `16K`;
      case 3:
        return `18K`;
      case 4:
        return `20K`;
      case 4:
        return `22K`;
      case 6:
        return `24K`;
      default:
        return `No diamond`;
    }
  }

  whatIsClassName() {
    return `Diamond`;
  }
}
const diamond = new Diamond(3);
console.log("=========== DIAMOND =============");
console.log("Diamond class name ===>>", diamond.whatIsClassName());
console.log("=========== /DIAMOND =============");

class Ring extends Diamond {
  private _metal: string;
  static _numberOfDiamonds: number = 1;

  constructor(metal: string, diamondId = 1) {
    super(diamondId);
    this._metal = metal;
  }

  get metal(): string {
    return this._metal;
  }
  set metal(metal: string) {
    // Setters cannot return a value
    this._metal = metal;
  }

  whatIsClassName() {
    return `Ring`;
  }
  showMeRing() {
    return `Your ring has ${this._metal} as metal and has ${
      Ring._numberOfDiamonds
    } ${this.getDiamond()} diamonds`;
  }
  setNumberOfDiamonds(n: number) {
    Ring._numberOfDiamonds = n;
  }
}
const ring = new Ring("silver");
ring.metal = "Gold";
ring.setNumberOfDiamonds(3);

console.log("=========== RING =============");
console.log(ring.showMeRing());
console.log(Ring._numberOfDiamonds);
console.log(ring.whatIsClassName());
console.log("=========== /RING =============");

/**
 * Generic class using interface
 */
interface IdentityOfPerson<T, U> {
  name: T;
  age: U;
  info(): string;
}

class Person<A, B> implements IdentityOfPerson<A, B> {
  name: A;
  age: B;
  constructor(nme: A, age: B) {
    this.name = nme;
    this.age = age;
  }
  info() {
    return `${this.name} ${this.age}`;
  }
}

const developer = new Person(32, "kunal");
console.log(developer.info());

/**
 * Generic class without interface
 */
class Office<A, B> {
  private location: A;
  private totalEmployees: B;

  constructor(l: A, e: B) {
    this.location = l;
    this.totalEmployees = e;
  }

  info() {
    return `Office is located at ${this.location} and has ${this.totalEmployees} employees`;
  }
}
const cc = new Office("Geeta bhawan", 7);
console.log(cc.info());
