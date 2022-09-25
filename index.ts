import { isBreakOrContinueStatement } from "typescript";

export const testFunction = () => {
    console.log("Hello to Typescript")
}

testFunction();	

// 1. City Directory
var myPlaces:string[] = [];
export const addPlaces = (...placesArray:string[]) => {
    placesArray.forEach((item) => {
        console.log(item)
    })
}

export const addPlace = (place:string) => {
    myPlaces.push(place);
    displayPlaces();
}

export const displayPlaces = () => {
    let list = document.getElementById('placeList');
    if(list) {
        while(list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)
        }
    }
    myPlaces.forEach((item) => {
        if(list) {
            let li = document.createElement("li");
            li.innerText = item
            list.appendChild(li)
        }
    })
}



// 2.	ISBN – 10 Validation

var isbnTest1 = "1112223339";
var isbnTest2 = "111222333";
var isbnTest3 = "1112223339X";
var isbnTest4 = "1234554321";
var isbnTest5 = "1234512345";
var isbnTest6 = "048665088X";
var isbnTest7 = "X123456788";


// 1112223339 -> true
// 111222333 -> false
// 1112223339X -> false
// 1234554321 -> true
// 1234512345 -> false
// 048665088X -> true
// X123456788 -> false

function testISBN(isbnTest: any) {
    var sum = 0;
    var weight = 10 ;
    var numX = /[0-9X]/gi;
    var num = /[0-9]/gi;
    var digit;
    var check;
    
    if (isbnTest.length === 10) 
{
    if(isbnTest.match(numX)) 
    {
        if(isbnTest.charAt(9) === "X") 
        {
            for(let i = 0; i < 9; i++) 
            {
              digit = parseInt(isbnTest[i]);
                sum += weight*digit;
                weight--;
            }
            check = (sum + 10) % 11;

            if (check === 0) 
            {
                console.log(isbnTest + "-> True"); 
            } else 
                {
                console.log(isbnTest + "-> False"); 
                }
        }
    }

    if(isbnTest.match(num) && isbnTest.charAt(9).toUpperCase() !== "X") 
    {
        for(let i = 0; i < 10; i++) 
            {
                digit = parseInt(isbnTest[i]);
                sum += weight*digit;
                weight--;
            }
            check = sum % 11;

        if (check === 0) {
            console.log(isbnTest + "-> True"); 
        }
        else {
            console.log(isbnTest + "-> False"); 
        }
    }
    
} else {
    console.log(isbnTest + "-> False"); 
}
}

testISBN(isbnTest1);
testISBN(isbnTest2);
testISBN(isbnTest3);
testISBN(isbnTest4);
testISBN(isbnTest5);
testISBN(isbnTest6);
testISBN(isbnTest7);


//3.) Change it up!
var str = "Cat30";
var re = /[a-z]/gi;
var checkList = "AabcdEefghIijklmnOopqrstUuvwxyz";
var newString = "";

for (let i=0; i<str.length; i++) {
    var c = str.charAt(i).toLowerCase();
    var replaceChar = c.replace(re, checkList[(checkList.indexOf(c)+1)%30]);
    newString += replaceChar;
}
console.log(newString)


//4. Moving zeroes to the end
var qArray = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
var newqArray = qArray.filter(c => c !== 0).concat(qArray.filter(k => k === 0));
console.log(newqArray);

