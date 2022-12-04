// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.



describe("codedMessage", () => {
    it ("takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

//   ReferenceError: codedMessage is not defined



// Create a function called 'codedMessage' that takes in one parameter: a string.
const codedMessage = (string) => {
    // Iterate through the string to find the vowels, a, e, i, o and replace them with the specified number.  
    for (let i=0; i<string.length; i++)
    // We want to make sure the letters are case insensitive, so we can yield all proper results, so we'll use the Regex method i when we replace ALL the vowels (not just the first vowel) with a number.
    return string.replaceAll(/['a']/gi, 4).replaceAll(/['e']/gi, 3).replaceAll(/['i']/gi, 1).replaceAll(/['o']/gi, 0)
}
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
 

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("particularLetter", () => {
    it ("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(particularLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(particularLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
       
    })
})

//ReferenceError: particularLetter is not defined

//Create a function called particularLetter, that takes in 2 parameters: array and letter 
const particularLetter = (array, letter) => {
     // Iterate through the array using the filter method 
    return array.filter((array) => {
        // Make the array in lowercase letters, so we don't miss any words with capitals letters of the original letter being passed to the function.
        // Then see if the array includes the letter letter passed as the argument in any of the words in the array.
            // we will have to return inside of a return because we want to return a specific value after we sort through the array. 
        return array.toLowerCase().includes(letter)}) 
    }
    
 // Test Suites: 1 passed, 1 total
 // Tests:       1 passed, 1 total



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("cardGame", () => {
    it ("that takes in an array of 5 numbers and determines whether or not the array is a 'full house'.A full house is exactly one pair and one three of a kind.", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
        expect(cardGame(hand1)).toEqual(true)
        expect(cardGame(hand2)).toEqual(false)
        expect(cardGame(hand3)).toEqual(false)
        expect(cardGame(hand4)).toEqual(true)
       
    })
})

// ReferenceError: cardGame is not defined


// create two objects to declare a pair and a three of a kind
    // iterate through the array by 

// Create a function called cardGame that takes in one parameter: an array
const cardGame = (array) => {
    // Define a new variable that is set at an empty object, so when we iterate through the array the new values will be added to the object  
        let newObj = {}
        // iterate through the array with a for..of loop so the array can be looked at by each individual value. If we have already encoutnered the value at i, it will already be inside the object created with newObj, but if it is a brand new number we will get a zero. Then incremement by one.
        for(let i of array){
          newObj[i] = (newObj[i] || 0) + 1;
        }
        // Next, define a new variable that returns the object created above with the new values of corresponding numbers.
        let newValue = Object.values(newObj);
        //If two values from the object match and three values from the object also match return true. Create an edge case to account for the numbers that may match twice, but need to be looked for the value after them. 
        if((newValue[0] === 2 && newValue[1] === 3) || (newValue[1] === 2 && newValue[0] === 3)){
          return true;
        }
        // If two values from the object do not match or three values from the object also do not match return false.
        else return false;
      }

    //   Test Suites: 1 passed, 1 total
    //   Tests:       3 passed, 3 total