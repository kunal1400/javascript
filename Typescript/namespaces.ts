/**
 * Namespaces or "internal modules"
 * Code inside a namespace is pulled from the global scope and into the scope of the namespace.
 */
namespace Greeting {
  function ReturnGreeting(value: string) {
    console.log("Hello from, ", value);
  }
  ReturnGreeting("Dhriti");
}

namespace GreetingWithLength {
  function ReturnGreeting(value: string) {
    let greetingLength = getLength(value);
    console.log(
      `The message from namespace GreetingsWithLength is ${value}. It is ${greetingLength} characters long.`
    );
  }

  function getLength(message: string): number {
    return message.length;
  }
  ReturnGreeting("Hanishka");
}

/**
 * For function or class available to code outside of the namespace, add the export keyword before its name.
 */
namespace AllGreetings {
  export namespace Greeting {
    export function ReturnGreeting(value: string) {
      console.log("Hello from, ", value);
    }
  }

  export namespace GreetingWithLength {
    export function ReturnGreeting(value: string) {
      let greetingLength = getLength(value);
      console.log(
        `The message from namespace GreetingsWithLength is ${value}. It is ${greetingLength} characters long.`
      );
    }

    export function getLength(message: string): number {
      return message.length;
    }
  }
}

AllGreetings.Greeting.ReturnGreeting("Dhriti");
AllGreetings.GreetingWithLength.ReturnGreeting("Dhriti");

// Aliasing
import greetingAlias = AllGreetings.Greeting;
greetingAlias.ReturnGreeting("Rakhi");
