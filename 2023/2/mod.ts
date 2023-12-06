import { part1, part2 } from "./parts.ts";
import { getGames } from "./utils.ts";

const games = await getGames("./input.txt");

part1(games);
part2(games);
