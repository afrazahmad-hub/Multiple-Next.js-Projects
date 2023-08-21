import { type SchemaTypeDefinition } from "sanity";

// internal imports
import { Products } from "./product";
import { category } from "./category";
// import { femaleProducts } from "./femaleProducts";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products, category],
};
