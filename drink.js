const numOfDays = Math.floor(Date.now() / (3600 * 24 * 1000))
isOdd = (number) => number % 2 !== 0
needDrink = (number) => isOdd(number) ? "Да" : "Нет"
console.log(needDrink(numOfDays))