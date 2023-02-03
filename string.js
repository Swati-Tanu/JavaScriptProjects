//In Js string is zero or more characters written inside quotes. Used to store or manipulate text. Can use single or double quotes. It can be created as primitives from string literals or as object or using String() constructor.

//String() constructor example:
let name = new String("Aman Kumar"); //Least recommended.
console.log(name); //[String: 'Aman']: displays in this format

//String.prototype.length: It also counts the space.
console.log(name.length); //10

//Escape character:
//The backslash (\) escape character turns special characters to string characters.
// Code: (\') -> Result (') -> Description(Single quote)
// Code: (\") -> Result (") -> Description(Double quote)
// Code: (\\) -> Result (\) -> Description(Backslash)

let sentance = "We are so-called \"Vikings\" from the north."
console.log(sentance); //If backslash not used the compiler will get confused and  it will throw an error. Or we can always use alternate quote.

//indexOf(), lastIndexOf(), search(), slice(start,end), substring(start,end), substr(start,end)

//Finding String in a String: String.prototype.search() : Similar to indexOf().
let sData = sentance.search('so');
console.log(sData);

//Extracting String : slice(start,end), substring(start,end), substr(start,end).
//1. slice() extracts a part of a string and returns the extracted part in a new string. in parameter it takes 2 parameter in terms of index. It doesnot include the value of end parameter. Original string is not mutated.

let fruit = "Apple, Kiwi, Banana, Orange";
let extract = fruit.slice(4,9); //e, Ki
console.log(extract);
let extract2 = fruit.slice(7,-2); //It will remove last two elements and return the whole.
console.log(extract2); //Kiwi, Banana, Oran
console.log(fruit);

//Twitter post word limit: Display only 280 characters of a string.
let myTweets = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum aliquid odio aspernatur rerum libero soluta. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum aliquid odio aspernatur rerum libero soluta.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum aliquid odio aspernatur rerum libero soluta."

myActualTweet = myTweets.slice(0,280); //280 characters
console.log(myActualTweet);
console.log(myActualTweet.length);
console.log(myTweets);
console.log(myTweets.length);

//substring(); Similar to slice() but it does not accept negative indices. 

let animals = "Dogs, Cats, Cows, Gorilla";
let res = animals.substring(3,13);
console.log(res); //s, Cats, C
let res2 = animals.substring(9,-2);
console.log(res2); //Dogs, Cat: Here it is little different than slice() as it doesnot take negative number so in this case it gives the value from 0th index to 9th index.

//substr(): Similar to slice() but the second parameter specifies the length of the extracted part. It also does not takes negative value. Actully the first parameter is the starting index and second is the length. It also counts spaces.
let res3 = animals.substr(6,7); //Cats, C
console.log(res3);
let res4 = animals.substr(-7); //Gorilla: Although it doesnot take negative parameter but if we give one negative value it gives output in reverse manner.
console.log(res4);

//replace(searchFor,replaceWith) methods(): It returns new string, it does not edit original string, if does not match the desired result it returns full string. Also it will replace the very first element it finds, it won't replace another element with same value, this can be achieved by replaceAll().
let replaceStr = animals.replace("Dogs","Bear");
console.log(replaceStr); //Bear, Cats, Cows, Gorilla
console.log(animals); //Dogs, Cats, Cows, Gorilla: Does not mutate original. 

//replaceAll(): It replaces all the elements.
let alpha = "a,b,c,a,d,e,f";
let replaceAlpha = alpha.replaceAll("a","z");
console.log(replaceAlpha); //z,b,c,z,d,e,f
console.log(alpha); //a,b,c,a,d,e,f

//Extracting String Characters: charAt(position), charCodeAt(position), Property access[].
let str = "HELLO WORLD";
console.log(str.charAt(1)); //E: returns the character at the specified index.
console.log(str.charCodeAt(2));//76: ASCII value of the letter L. In case of space it will return 32.

//Return the unicode of the last element of the string.\
console.log(str.charCodeAt(str.length-1));

//UTF-8 VS ASCII – What's the Difference?
/*UTF-8 extends the ASCII character set to use 8-bit code points, which allows for up to 256 different characters. This means that UTF-8 can represent all of the printable ASCII characters, as well as the non-printable characters. UTF-8 also includes a variety of additional international characters, such as Chinese characters and Arabic characters.*/

//Property Access allows array property access on strings.
console.log(str[0]); //H: This is actually array property but we can access it on string via property access.

//toUpperCase(), toLowerCase(), concat(): can be done using '+' as well, but concat() is new method introduced for cancatenation purposes.
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let fName = "Swati";
let lName = "Tanu";
console.log(fName+" "+lName); 
console.log(fName.concat(lName)); 
console.log(fName.concat(" ",lName)); 

//trim(): removes extra space at begining and end.
let string = "         Hello World     ";
console.log(string.trim());
console.log(string);

//Convert a String to an Array: split();
let text = "a,b,c,d,e,f"; //String
console.log(text.split(",")); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(text.split(" ")); //[ 'a,b,c,d,e,f' ]
console.log(text.split("|")); //[ 'a,b,c,d,e,f' ]

let text2 = "a,b,c|d,e,f"; 
console.log(text2.split("|")); //[ 'a,b,c', 'd,e,f' ]: In this case it split it into two elements.
let text3 = "a, b,c,d , e,f"; 
console.log(text3.split(" ")); //[ 'a,', 'b,c,d', ',', 'e,f' ]: Likewise here.


let milli = new Date('2023-02-03T16:46:03.301Z');
console.log(milli);



