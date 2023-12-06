import { ValueOf } from "../../types.ts";

const CUBES = {
  red: "red",
  green: "green",
  blue: "blue",
} as const;

export function part1(games: Record<string, string[]>) {
  const MAX_CUBES: Record<ValueOf<typeof CUBES>, number> = {
    red: 12,
    green: 13,
    blue: 14,
  } as const;

  let sum_of_possible_game_ids = 0;

  mainLoop: for (const key of Object.keys(games)) {
    const id = key.match(/\d+/);

    if (!id) {
      continue;
    }

    for (const cubes of games[key]) {
      const showen_cubes = cubes.split(",");

      for (const cube of showen_cubes) {
        const number = cube.match(/\d+/);
        const color = cube.match(/(red|green|blue)/);

        if (!number || !color) {
          continue;
        }

        const cube_color = color[0] as ValueOf<typeof CUBES>;

        if (Number(number[0]) > MAX_CUBES[cube_color]) {
          continue mainLoop;
        }
      }
    }

    sum_of_possible_game_ids += Number(id[0]);
  }

  console.log({ sum_of_possible_game_ids });
}

export function part2(games: Record<string, string[]>) {
  let sum_of_powers = 0;

  for (const key of Object.keys(games)) {
    const id = key.match(/\d+/);
    const cube_count: Record<ValueOf<typeof CUBES>, number> = {
      red: 0,
      green: 0,
      blue: 0,
    };

    if (!id) {
      continue;
    }

    for (const cubes of games[key]) {
      const showen_cubes = cubes.split(",");

      for (const cube of showen_cubes) {
        const number = cube.match(/\d+/);
        const color = cube.match(/(red|green|blue)/);

        if (!number || !color) {
          continue;
        }

        const cube_color = color[0] as ValueOf<typeof CUBES>;
        const num = Number(number[0]);

        if (num > cube_count[cube_color]) {
          cube_count[cube_color] = num;
        }
      }
    }

    sum_of_powers += cube_count.red * cube_count.green * cube_count.blue;
  }

  console.log({ sum_of_powers });
}
