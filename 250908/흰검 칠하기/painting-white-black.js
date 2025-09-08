const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

// Please Write your code here.
function solution(N, commands) {
  const tiles = new Map();
  let currentPos = 0;

  for (let i = 0; i < N; i++) {
    const [xStr, direction] = commands[i];
    const x = parseInt(xStr, 10);

    const startPos = currentPos;
    let endPos;

    if (direction === "L") {
      endPos = currentPos - x + 1;
      for (let pos = startPos; pos >= endPos; pos--) {
        if (!tiles.has(pos)) {
          tiles.set(pos, [0, 0, 0]);
        }
        const tileData = tiles.get(pos);

        if (tileData[2] === 2) {
          continue;
        }

        tileData[0]++;
        tileData[2] = 0;

        if (tileData[0] >= 2 && tileData[1] >= 2) {
          tileData[2] = 2;
        }
      }
      currentPos = endPos;
    } else if (direction === "R") {
      endPos = currentPos + x - 1;
      for (let pos = startPos; pos <= endPos; pos++) {
        if (!tiles.has(pos)) {
          tiles.set(pos, [0, 0, 1]);
        }
        const tileData = tiles.get(pos);

        if (tileData[2] === 2) {
          continue;
        }

        tileData[1]++;
        tileData[2] = 1;

        if (tileData[0] >= 2 && tileData[1] >= 2) {
          tileData[2] = 2;
        }
      }
      currentPos = endPos;
    }
  }

  const counts = [0, 0, 0];
  for (const data of tiles.values()) {
    counts[data[2]]++;
  }

  console.log(`${counts[0]} ${counts[1]} ${counts[2]}`);
}

solution(n, commands);