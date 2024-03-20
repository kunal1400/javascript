namespace GreetingInterface {
  export interface Greeting {
    ReturnGreeting(value: string): void;
  }

  export interface GreetingWithLength {
    ReturnGreeting(value: string): void;
    getLength(message: string): number;
  }
}
