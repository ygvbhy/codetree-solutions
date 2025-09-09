const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const newRects = rects.map(line => {
    const [x1, y1, x2, y2] = line
    return {x1, y1, x2, y2}
})

const xs = Array.from(new Set(newRects.flatMap(r => [r.x1, r.x2]))).sort((a, b) => a - b)
const ys = Array.from(new Set(newRects.flatMap(r => [r.y1, r.y2]))).sort((a, b) => a - b)

let area = 0;

for (let i = 0; i < xs.length - 1; i++) {
    const xL = xs[i], xR = xs[i + 1];
    const dx = xR - xL;
    if (dx === 0) continue;

    for (let j = 0; j < ys.length - 1; j++) {
        const yB = ys[j], yT = ys[j + 1];
        const dy = yT - yB;
        if (dy === 0) continue;

        let covered = false;
        for (const { x1, y1, x2, y2} of newRects) {
            const overlapW = Math.min(xR, x2) - Math.max(xL, x1);
            const overlapH = Math.min(yT, y2) - Math.max(yB, y1)
            if (overlapW > 0 && overlapH > 0) {
                covered = true;
                break;
            }
        }

        if (covered) {
            area += dx * dy
        }
    }
}

console.log(area)