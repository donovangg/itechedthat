import { defineDb, defineTable, column } from "astro:db";

const Resource = defineTable({
  columns: {
    link: column.text(),
    category: column.text(),
    title: column.text(),
    imgSrc: column.text(),
    id: column.number(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Resource },
});
