import { type SchemaTypeDefinition } from "sanity";

// internal imports
import { Products } from "./product";
import { femaleProducts } from "./femaleProducts";
import { category } from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products, femaleProducts, category],
};
