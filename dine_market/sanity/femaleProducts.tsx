export const femaleProducts = {
  name: "fProducts",
  type: "document",
  title: "Female Products",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Product Image",
      options: { hotspot: true },
    },
    { name: "title", type: "string", title: "Product Title" },
    { name: "pType", type: "string", title: "Product Type" },
    { name: "price", type: "number", title: "Price" },
  ],
};
