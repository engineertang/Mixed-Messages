'use strict'

let array = {
    professionArray: ['Teacher', 'Boss', 'Astronaut', 'Engineer'],
    ageArray: [22, 33, 44, 55, 66],
    locationArray: ['Hong Kong', 'Shenzhen', 'Beihai', 'Silicon Valley'],
    asciiArray: [ 
'H   H EEEEE L     L      OOO       W   W  OOO  RRRR  L     DDDD  !! \n\
H   H E     L     L     O   O      W W W O   O R   R L     D   D !! \n\
HHHHH EEEEE L     L     O   O      W W W O   O RRRR  L     D   D !! \n\
H   H E     L     L     O   O  ,,   W W  O   O R   R L     D   D !! \n\
H   H EEEEE LLLLL LLLLL  OOO   ,,   W W   OOO  R   R LLLLL DDDD  !!',
'            ____ \n\
(^._.^)~ <(o.o )>',
' \/\\ \n\
\/__\\'
]
}  

function generateRandom(length){
    return Math.floor(Math.random() * length)
}

function forcast(){
    let professionRandom = generateRandom (array.professionArray.length);
    let ageRandom = generateRandom(array.ageArray.length);
    let locationRandom = generateRandom(array.locationArray.length);
    let asciiRandom = generateRandom(array.asciiArray.length);


    let result = `You would be a ${array.professionArray.at(professionRandom)} when you are ${array.ageArray.at(ageRandom)} years old, and You would live in ${array.locationArray[locationRandom]}.\n${array.asciiArray.at(asciiRandom)}`
    return result
}

console.log(forcast())