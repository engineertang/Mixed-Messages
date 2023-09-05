'use strict'

let professionArray = ['Teacher', 'Boss', 'Astronaut', 'Engineer']

let ageArray = [22, 33, 44, 55, 66]

function forcast(){

    let professionRandom = Math.floor(Math.random() * professionArray.length);
    let ageRandom = Math.floor(Math.random() * ageArray.length);

    let result = `You would be a ${professionArray.at(professionRandom)} when you are ${ageArray.at(ageRandom)} years old.`
    return result
}

console.log(forcast())