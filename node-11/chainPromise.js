function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

luckyDraw("joe").then((result) => console.log(result));
luckyDraw("carmela").then((result) => console.log(result));
luckyDraw("paolo").then((result) => console.log(result));
