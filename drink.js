const time_zone_offset_in_hours = new Date().getTimezoneOffset() / 60
const current_hour = new Date().getHours()
const local_datetime_in_milliseconds = new Date().setHours(current_hour - time_zone_offset_in_hours);
const number_of_days = Math.floor(local_datetime_in_milliseconds / (3600 * 24 * 1000))

isOdd = (number) => number % 2 !== 0
needDrink = (number) => isOdd(number) ? "Да" : "Нет"

console.log(number_of_days)
console.log(local_datetime_in_milliseconds / (3600 * 24 * 1000))
console.log(needDrink(number_of_days))

document.getElementsByTagName('h1')[0].innerText = needDrink(number_of_days)