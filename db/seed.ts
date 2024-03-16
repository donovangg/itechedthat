import { db, Resource } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Resource).values([
    {
      link: "https://glossary.infil.net/index.html",
      category: "Fundamentals",
      title: "The Fighting Game Glossary",
      id: 1,
    },
    {
      link: "https://replaytheater.app/?game=unib",
      category: "French Bread",
      title: "Replay Theater",
      id: 2,
    },
  ]);
}
