rightSideHalfTree(5);
console.log('');
fullChristmasTree(5);
console.log('');
fullChristmasTree(7);
console.log('');
fullChristmasTree(9);
console.log('');
fullChristmasTree(6);
console.log('');
fullChristmasTree(8);

function rightSideHalfTree(width) {
  for (let x = 1; x <= width; x++) {
    let line = '';

    for (let y = 1; y <= x; y++) {
      line += '*';
    }

    console.log(line);
  }
}

function fullChristmasTree(width) {
  if (width % 2 === 0) {
    width = width - 1;
  }

  const middle = Math.floor(width / 2);

  const rows = Math.ceil(width / 2);

  for (let i = 1; i <= rows; i++) {
    let line = '';

    for (let j = 0; j < width; j++) {
      if (j === middle || (j > middle - i && j < middle + i)) {
        line += '*';

        continue;
      }

      line += '-';
    }

    console.log(line);
  }
}