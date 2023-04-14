// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, and boolean. Choose your own topic.
*/

let pizza = "5 meat treat"
let quantity = 10
let isGood = true


// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguage' that include 4 coding language of your choice. 
*/

let codingLanguages = ['Python', 'JavaScript', 'HTML', 'C++']


/* 
    Access the 3rd element of the 'codingLanguage' array.
*/

console.log(codingLanguages[2])


/*
    Copy the array using one of the array methods, and call it 'codingLanguage2.'
*/

let codingLanguage2 = codingLanguages.slice(0)
console.log(codingLanguage2)


/* 
    Add another coding language to the codingLanguage2 array.
*/

codingLanguage2.push('Rust')
console.log(codingLanguage2)


// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

instruments.splice(4,1)
console.log(instruments)


/* 
    Use a built-in array function to remove 'piano' from the instruments array
*/

instruments.shift()
console.log(instruments)


/* 
    Use a built-in array function to add 'guitar' to the front of the instruments array
*/

instruments.unshift('guitar')
console.log(instruments)


/* 
    Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

instruments.splice(2,1,'glockenspiel')
console.log(instruments)


// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/

// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

if(num % 2 ===0) {
    console.log(num)
}else{
    console.log('num is not an even number')
}


// !!! Don't edit the code below !!! //
let score = 83;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41[39], print 'The grade is C.'
    If the the score is between 40 and 71[69], print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

if(score > 71){
    console.log('The grade is A.')
} else if (score <= 40){
    console.log('The grade is B.')
} else if (score <= 10){
    console.log('The grade is C.')
} else {
    console.log('Failed.')
}



// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

let totalPrice = 0
for (i = 0; i <= price.length; i++) {
    console.log([i]+totalPrice)
}




/* 
    Using the 'totalPrice,' find the average of 'price.'
*/

console.log(totalPrice / price.length)

// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

for(i = 0; i <= colors.length-1; i++){
    if (colors[i] = "red") {console.log("apple")
} else if (colors[i] = "melon") {console.log("green")
} else {console.log("yellow")
}
}



// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning
    -- Analysis of Requirements
    -- Design
    -- Implementation
    -- Testing & Integration
    -- Maintain
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git
        -- github
        -- git init
        -- git clone
        -- git status
        -- git add
        -- git commit
        -- git push
    - How to push git to github
*/

