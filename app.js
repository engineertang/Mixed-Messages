'use strict'

let array = {
    professionArray: ['Teacher', 'Boss', 'Astronaut', 'Engineer'],
    ageArray: [22, 33, 44, 55, 66],
    locationArray: ['Hong Kong', 'Shenzhen', 'Beihai', 'Silicon Valley']
}


function generateRandom(length){
    return Math.floor(Math.random() * length)
}
function forcast(){

    let professionRandom = generateRandom (array.professionArray.length);
    let ageRandom = generateRandom(array.ageArray.length);
    let locationRandom = generateRandom(array.locationArray.length);

    let result = `You would be a ${array.professionArray.at(professionRandom)} when you are ${array.ageArray.at(ageRandom)} years old, and You would live in ${array.locationArray[locationRandom]}.`
    return result
}

console.log(forcast())