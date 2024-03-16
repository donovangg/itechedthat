import { db, Resource } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Resource).values([
    {
      link: "https://glossary.infil.net/index.html",
      category: "Fundamentals",
      title: "The Fighting Game Glossary",
      imgSrc:
        "https://qczsiistziidnaavyrgw.supabase.co/storage/v1/object/sign/players/mago-san.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwbGF5ZXJzL21hZ28tc2FuLnBuZyIsImlhdCI6MTcxMDU3MTc0MCwiZXhwIjoxNzQyMTA3NzQwfQ.gJHiKEQq8Zi9lHzbPknqIkYgp_AJMkbsTAbwWdqEfWA&t=2024-03-16T06%3A49%3A00.087Z",
      id: 1,
    },
    {
      link: "https://replaytheater.app/?game=unib",
      category: "French Bread",
      title: "Replay Theater",
      imgSrc:
        "https://qczsiistziidnaavyrgw.supabase.co/storage/v1/object/sign/players/mago-san.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwbGF5ZXJzL21hZ28tc2FuLnBuZyIsImlhdCI6MTcxMDU3MTc0MCwiZXhwIjoxNzQyMTA3NzQwfQ.gJHiKEQq8Zi9lHzbPknqIkYgp_AJMkbsTAbwWdqEfWA&t=2024-03-16T06%3A49%3A00.087Z",
      id: 2,
    },
    {
      link: "https://replaytheater.app/?game=unib",
      category: "Fundamentals",
      title: "Mago's Gamer Theory",
      imgSrc:
        "https://qczsiistziidnaavyrgw.supabase.co/storage/v1/object/sign/players/mago-san.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwbGF5ZXJzL21hZ28tc2FuLnBuZyIsImlhdCI6MTcxMDU3MTc0MCwiZXhwIjoxNzQyMTA3NzQwfQ.gJHiKEQq8Zi9lHzbPknqIkYgp_AJMkbsTAbwWdqEfWA&t=2024-03-16T06%3A49%3A00.087Z",
      id: 3,
    },
    {
      link: "https://replaytheater.app/?game=unib",
      category: "Street Fighter",
      title: "Biscuits",
      imgSrc:
        "https://qczsiistziidnaavyrgw.supabase.co/storage/v1/object/sign/players/mago-san.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwbGF5ZXJzL21hZ28tc2FuLnBuZyIsImlhdCI6MTcxMDU3MTc0MCwiZXhwIjoxNzQyMTA3NzQwfQ.gJHiKEQq8Zi9lHzbPknqIkYgp_AJMkbsTAbwWdqEfWA&t=2024-03-16T06%3A49%3A00.087Z",
      id: 4,
    },
    {
      link: "https://replaytheater.app/?game=unib",
      category: "Hops on",
      title: "Replay Theater",
      imgSrc:
        "https://qczsiistziidnaavyrgw.supabase.co/storage/v1/object/sign/players/mago-san.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwbGF5ZXJzL21hZ28tc2FuLnBuZyIsImlhdCI6MTcxMDU3MTc0MCwiZXhwIjoxNzQyMTA3NzQwfQ.gJHiKEQq8Zi9lHzbPknqIkYgp_AJMkbsTAbwWdqEfWA&t=2024-03-16T06%3A49%3A00.087Z",
      id: 5,
    },
    {
      link: "https://replaytheater.app/?game=unib",
      category: "Tekken",
      title: "Tekken 15 moves",
      imgSrc:
        "https://qczsiistziidnaavyrgw.supabase.co/storage/v1/object/sign/players/mago-san.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwbGF5ZXJzL21hZ28tc2FuLnBuZyIsImlhdCI6MTcxMDU3MTc0MCwiZXhwIjoxNzQyMTA3NzQwfQ.gJHiKEQq8Zi9lHzbPknqIkYgp_AJMkbsTAbwWdqEfWA&t=2024-03-16T06%3A49%3A00.087Z",
      id: 6,
    },
  ]);
}
