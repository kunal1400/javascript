interface Pet {
  gender: "male" | "female";
  legs: number;
  species?: string;
}

/**
 * Partial changes all the properties in an object to be optional.
 */
const cat1: Partial<Pet> = {};
const cat2: Partial<Pet> = {
  gender: "male"
};

/**
 * Required changes all the properties in an object to be required.
 */
const cat3: Required<Pet> = {
  gender: "female",
  legs: 4,
  species: "string"
};

/**
 * Omit removes keys from an object type.
 */
const cat4: Omit<Pet, "species" | "legs"> = {
  gender: "female"
};

/**
 * Pick removes all but the specified keys from an object type.
 */
const cat5: Pick<Pet, "species"> = {
  species: "cat"
};

/**
 * Record is a shortcut to defining an object type with a specific key type and value type.
 */
const cat6: Record<string, boolean> = {
  gender: true,
  legs: false
};

/**
 * Exclude removes types from a union
 */
type species = "cat" | "dog" | "monkey" | "rabbit";
const cat: Exclude<species, "rabbit"> = "monkey";
