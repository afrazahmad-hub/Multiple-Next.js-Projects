import { defineType, defineField } from "sanity";

export const Products = defineType({
  name: "products",
  type: "document",
  title: "Products",
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Product Image",
      options: { hotspot: true },
    }),
    defineField({ name: "title", type: "string", title: "Product Title" }),
    defineField({
      name: "description",
      type: "string",
      title: "Product Desc.",
    }),
    defineField({ name: "pType", type: "string", title: "Product Type" }),
    defineField({ name: "price", type: "number", title: "Price" }),
    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
  ],
});
