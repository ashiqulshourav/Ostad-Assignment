// 1. Create a function that takes a date (YYYY-MM-DD) & return the day of the week

function getDay(date){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = weekday[new Date(date).getDay()];

    console.log("1.", day, "is the day of this date", date);
}

getDay("1997-10-23");



// 2. Create a function that takes an array of numbers & return square root of the sum of squares of all the numbers

function squareRoot(arr){
    const squareNumbers = [];

    arr.forEach((number)=>{
        squareNumbers.push(Math.pow(number, 2)); // square the numbers
    });

    let sum = 0;

    squareNumbers.map((number)=>{
        sum += number; // sum of all numbers
    });

    const squareRoot = Math.sqrt(sum); // squre root of the sum
    console.log("2.", squareRoot, "Square Root of this sum", sum, "& we get sum value from this array", arr)

}

squareRoot([2, 2]);


// 3. Create a function that takes a number & it should positive integer & return if prime that ture otherwise it false

function isPrimeNumber(number){
    if(number <= 1){ // check positive integer if not return false
        console.log("Please input a positive integer which is greater than 1");
        return false;
    }

    if(number % 2 === 0 && number > 2){ // check the number is even & greater than 2
        return false;
    }

    for(let i = 3; i <= Math.sqrt(number); i += 2){
        if(number % i === 0){ // Check if the number is divisible by any number other than 1 and itself
            return false;
        }
    }

    // If the number is not divisible by any number other than 1 and itself, it is prime
    return true;
}


const prime = isPrimeNumber(37);

console.log("3.", prime) // return true or false if prime or not


// 4. Create a function that open new window. Set width & height dimension 800x600

function newWindow (url){
    const windowFeature = "width=800,height=600"
    window.open(url, "", windowFeature);
}

console.log("4. window open will work when you click the link in html file");


// 5. Navigator object to get browser name & version

function getBrowserInfo(){
    var userAgent = navigator.userAgent;    
    var browserName = "Unknown";
    var browserVersion = "";

    if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
        browserName = "Chrome";
        browserVersion = userAgent.match(/Chrome\/(\S+)/)[1];
    } else if (userAgent.includes("Firefox")) {
        browserName = "Firefox";
        browserVersion = userAgent.match(/Firefox\/(\S+)/)[1];
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
        browserName = "Safari";
        browserVersion = userAgent.match(/Version\/(\S+)/)[1];
    } else if (userAgent.includes("Edge") || userAgent.includes("Edg")) {
        browserName = "Edge";
        browserVersion = userAgent.match(/(Edge|Edg)\/(\S+)/)[2];
    } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
        browserName = "Opera";
        browserVersion = userAgent.match(/(OPR|Opera)\/(\S+)/)[2];
    } else if (userAgent.includes("MSIE") || userAgent.includes("Trident/")) {
        browserName = "Internet Explorer";
        browserVersion = userAgent.match(/(MSIE|rv:)(\S+)/)[2];
    }

    console.log("5. Browser name & version is : " + browserName + " " + browserVersion);
}

getBrowserInfo();

