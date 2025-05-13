// JavaScript Program to compare Versions
// Input: version1 = "1.2", version2 = "1.10.01"
// Output: -1
// Explanation : version1's second revision is "2" and version2's second revision is "10": 2 < 10.
//               so version1 < version2 and returns -1

class versioncomp
{
    constructor(version1,version2)
    {
        this.version1=version1;
        this.version2=version2;
    }
    comp()                               //method to compare the version1 and version2
    {
        let v1=this.version1.split(".");        // ex=1.2=>["1","2"]
        let v2=this.version2.split(".");       // ex=1.10.01=>["1","10",01]

        let maxlen=Math.max(v1.length,v2.length);           // Returns the longest length among the given parameters
        for(let i=0;i<maxlen;i++)                          // For given ex:- maxlen is 3
        {
            let num1=i<v1.length?parseInt(v1[i]):0;      // Used ternary operator here
            let num2=i<v2.length?parseInt(v2[i]):0;     // Used ternary operator here
                                                     
            if(num1<num2)       
                return -1;
            if(num1>num2)       
                return 1;
        }
        return 0;          //if both versions are same it returns 0 
    }   
}
let version1=prompt("enter first version=");
let version2=prompt("enter second version=");
let c=new versioncomp(version1,version2);           // Object Creation
let result=c.comp();                               // Calling method using object name
console.log("result=",result);  