const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
const sr = 1;
const sc = 1;
const color = 2;

//DFS approach
// var floodFill = function (image, sr, sc, color) {
//   const oldColor = image[sr][sc];
//   if (oldColor === color) return image;

//   const fill = (image, sr, sc) => {
//     if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) {
//       return image;
//     }

//     if (image[sr][sc] === oldColor) {
//       image[sr][sc] = color;
//       fill(image, sr - 1, sc); //top
//       fill(image, sr + 1, sc); //bottom
//       fill(image, sr, sc - 1); //left
//       fill(image, sr, sc + 1); //right
//     }
//   };

//   fill(image, sr, sc);
//   return image;
// };

// console.log(floodFill(image, sr, sc, color));

//BFS approach
var floodFill = function (image, sr, sc, color) {
  const oldColor = image[sr][sc];
  if (oldColor === color) return image;

  const queue = [[sr, sc]];
  while (queue.length) {
    let [r, c] = queue.shift();
    if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) {
      continue;
    }
    if (image[r][c] === oldColor) {
      image[r][c] = color;
      queue.push([r, c + 1]);
      queue.push([r, c - 1]);
      queue.push([r + 1, c]);
      queue.push([r - 1, c]);
    }
  }

  return image;
};
console.log(floodFill(image, sr, sc, color));
