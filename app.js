'use strict'

let professionArray = ['Teacher', 'Boss', 'Astronaut', 'Engineer']

let ageArray = [22, 33, 44, 55, 66]

let locationArray = ['Hong Kong', 'Shenzhen', 'Beihai', 'Silicon Valley']

function generateRandom(length){
    return Math.floor(Math.random() * length)
}
function forcast(){

    let professionRandom = generateRandom (professionArray.length);
    let ageRandom = generateRandom(ageArray.length);
    let locationRandom = generateRandom(locationArray.length);
    console.log(locationRandom)

    let result = `You would be a ${professionArray.at(professionRandom)} when you are ${ageArray.at(ageRandom)} years old, and You would live in ${locationArray[locationRandom]}`
    return result
}

console.log(forcast())