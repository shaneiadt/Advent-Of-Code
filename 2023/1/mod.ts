import { isDigit } from "../../utils.ts";
import input from "./input.ts";

const getFinalNumber = <T>(digits: T[]) =>
  Number(`${digits[0]}${digits[digits.length - 1]}`);

function part1() {
  const pattern = /\d/g;
  let sum = 0;

  for (const line of input) {
    const result = line.match(pattern);

    if (result?.length == 1) {
      result.push(result[0]);
    }

    if (!result) {
      break;
    }

    sum += getFinalNumber(result);
  }

  console.log("Part 1 Solution: ", sum);
}

function part2() {
  const textDigits = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let sum = 0;

  for (const line of input) {
    const digits = [];

    for (let i = 0; i < line.length; i++) {
      const c = line[i];

      if (isDigit(c)) {
        digits.push(c);
      }

      const lineSubstring = line.substring(i);

      for (let d = 0; d < textDigits.length; d++) {
        const textDigit = textDigits[d];
        if (lineSubstring.startsWith(textDigit)) {
          digits.push(d + 1);
        }
      }
    }

    sum += getFinalNumber(digits);
  }

  console.log("Part 2 Solution: ", sum);
}

part1();
part2();
