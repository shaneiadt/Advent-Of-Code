import { readline } from "https://deno.land/x/readline@v1.1.0/mod.ts";

export async function getGames(file: string) {
  const allGames: Record<string, string[]> = {};
  const f = await Deno.open(file);

  for await (const line of readline(f)) {
    const text = new TextDecoder().decode(line);
    const name = text.match(/game \d+/i);

    if (!name) {
      continue;
    }

    const id = name[0];
    const games = text.slice(name[0].length + 2).split(";");

    allGames[id] = games;
  }
  f.close();

  return allGames;
}
