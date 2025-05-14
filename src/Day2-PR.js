let prompt=require("prompt-sync")();
//>>>>>  22. JavaScript Program for Valid Parenthesis String
// Input : s = "(*))"
// Output : true
 class ParenthesisValidator 
{
  constructor(s) 
  {
    this.s = s;
  }
  isValid() 
  {
    let leftStack = [];
    let starStack = [];
    for (let i = 0; i < this.s.length; i++) 
    {
      let char = this.s[i];
      if (char === '(') 
      {
        leftStack.push(i); // store index of '('
      } 
      else if (char === '*') 
      {
        starStack.push(i); // store index of '*'
      } 
      else if (char === ')') 
      {
        if (leftStack.length > 0) 
        {
          leftStack.pop(); // match with '('
        } 
        else if (starStack.length > 0) 
        {
          starStack.pop(); // match with '*'
        } 
        else 
        {
          return false; // no match
        }
      }
    }
    // Match remaining '(' with '*'
    while (leftStack.length > 0 && starStack.length > 0) 
    {
      if (leftStack.pop() > starStack.pop())
      {
        return false; // '*' must come after '('
      }
    }
    return leftStack.length === 0;
  }
}
const validator = new ParenthesisValidator("**");
console.log(validator.isValid()); 