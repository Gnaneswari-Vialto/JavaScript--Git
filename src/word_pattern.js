//JavaScript Program to match the words according to the given pattern
// Input characters: abba
// Input words : dog cat cat dog 
// Output : True
// Explanation : a is assigned with dog and b is assigned with cat after the interation of a and b.

 let prompt = require('prompt-sync')();

class PatternMatch 
{
    wordPattern(pattern, str) 
    {
        let chars = pattern.split('');                      //split the input char's into individual charachters [ a, b, b, a]
        let words = str.split(' ');                         //split the input words into words based on spaces [dog, cat, cat, dog]

        if (chars.length !== words.length)                  //if  char's and words does not match [length wise], return false 
            return false;
         
        //creating an empty array to map => pattern to words and words to pattern
        let patternMap = [];                                // character-to-word mapping
        let wordMap = [];                                   // word-to-character mapping
        let keys = [];                                      // stores pattern order wise accordingly

        for (let i = 0; i < chars.length; i++) 
          {
            let ch = chars[i];                               //current pattern char [a]
            let word = words[i];                             //corresponding word [dog]

            if ((patternMap[ch] && patternMap[ch] !== word) || (wordMap[word] && wordMap[word] !== ch)) // if(a != dog or dog != a) returns false
            {
            
                return false;
            }
         
            //if this char has not been mapped yet,map it to the current word
            if (!patternMap[ch]) 
              {
                patternMap[ch] = word;                         // assigns char to word [a=dog]
                keys.push(ch);                                 // Store the char word patterns in keys
            }

            wordMap[word] = ch;                                //re-assigns again word to char in reverse order[dog=a]
        }

        console.log("Pattern to word mapping:");
        for (let i = 0; i < keys.length; i++) 
        {
            let ch = keys[i];                                  //This just iterates through the keys and gives the matching patterns[a = dog]
        }

        return true; 
    }
}

let pattern = prompt("ENTER PATTERN : ");
let str = prompt("ENTER STRING : ");

let matcher = new PatternMatch();
let result = matcher.wordPattern(pattern, str);
console.log("Result:", result);