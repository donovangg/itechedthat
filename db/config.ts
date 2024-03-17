import { defineDb, defineTable, column } from "astro:db";

const Resource = defineTable({
  columns: {
    id: column.number({
      primaryKey: true,
    }),
    link: column.text(),
    category: column.text(),
    title: column.text(),
    imgSrc: column.text(),
    description: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Resource },
});
