// 1. Create a function that takes a date (YYYY-MM-DD) & return the day of the week

function getDay(date) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = weekday[new Date(date).getDay()];

    console.log("1.", day, "is the day of this date", date);
}

getDay("1997-10-23");



// 2. Create a function that takes an array of numbers & return square root of the sum of squares of all the numbers

function squareRoot(arr) {
    const squareNumbers = [];

    arr.forEach((number) => {
        squareNumbers.push(Math.pow(number, 2)); // square the numbers
    });

    let sum = 0;

    squareNumbers.map((number) => {
        sum += number; // sum of all numbers
    });

    const squareRoot = Math.sqrt(sum); // squre root of the sum
    console.log("2.", squareRoot, "Square Root of this sum", sum, "& we get sum value from this array", arr)

}

squareRoot([2, 2]);


// 3. Create a function that takes a number & it should positive integer & return if prime that ture otherwise it false

function isPrimeNumber(number) {
    if (number <= 1) { // check positive integer if not return false
        console.log("Please input a positive integer which is greater than 1");
        return false;
    }

    if (number % 2 === 0 && number > 2) { // check the number is even & greater than 2
        return false;
    }

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) { // Check if the number is divisible by any number other than 1 and itself
            return false;
        }
    }

    // If the number is not divisible by any number other than 1 and itself, it is prime
    return true;
}


const prime = isPrimeNumber(37);

console.log("3.", prime) // return true or false if prime or not


// 4. Create a function that open new window. Set width & height dimension 800x600

function newWindow(url) {
    const windowFeature = "width=800,height=600"
    window.open(url, "", windowFeature);
}

console.log("4. window open will work when you click the link in html file");


// 5. Navigator object to get browser name & version

function getBrowserInfo() {
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


// 6. get user current location (latitude and longitude) using geolocation API.

function getLocation() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log(`6. Your location latitute value is ${latitude} & longitude value is ${longitude}`);
        // note: I didn't handle the error.
    });
}

getLocation();


// 7. JS Common Events:
console.log("7. Do a action from browser run by index.html file")
    // a. get the codinates by onclick anywhere on the body

function getCoordinates() {
    document.addEventListener('click', function(e) {
        const x = e.clientX; // getting x value
        const y = e.clientY; // getting y value

        alert(`7a. Your clicked Coordinates (x = ${x}, y = ${y})`);
        console.log(`7a. Your clicked Coordinates (x = ${x}, y = ${y})`);
    });
}

getCoordinates();

// b. user pressed key
function userPressedKey() {
    document.addEventListener('keypress', (e) => {
        const pressedKey = e.key;
        const pressedkeyCode = e.keyCode;

        alert(`7b. You pressed "${pressedKey}" which key code is "${pressedkeyCode}"`)
        console.log(`7b. You pressed "${pressedKey}" which key code is "${pressedkeyCode}"`)
    });
}

userPressedKey();

// c. image change by hover
const hoverImg = document.querySelector('.hover-to-change');
hoverImg.addEventListener('mouseover', function(e) {
    const src = `https://source.unsplash.com/featured/300x45${Math.floor(Math.random() * 9)}`;
    e.target.removeAttribute('src');
    e.target.setAttribute('src', src);

    console.log(`7c. Changed image src is ${src}`)
})



// 8. HTML DOM
console.log("8. Please click the 'Click Me!' buttor for changed the text")
const textChangeButton = document.querySelector('.textChangeButton');
const changedText = document.querySelector('.changedText');


function textChangeByButton() {
    changedText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, delectus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi molestiae quas incidunt ipsum ipsam? Quidem?";

    console.log(`8. Button clicked & changed text is ${changedText.innerText}`)
}

textChangeButton.addEventListener('click', textChangeByButton);


// 9. Form validation
console.log("9. Form is in sign-up html file & validation is in validation.js file");


// 10. DOM Manipulate CSS Class
console.log("10. Please click the To Highlight button get highlight content")
const toHighlightText = document.querySelector('.highlighted-text');
const highlightButton = document.querySelector('.to-highlight');

highlightButton.addEventListener('click', function() {
    toHighlightText.classList.add('highlight');
    console.log("10. added a class to highlight to the text");
});


// 11. Create Element & Append Element
function appendItems() {
    const lists = document.querySelector('.addList');

    for (let i = 1; i <= 5; i++) {
        lists.innerHTML += `<li>Item ${i}</li>`;
    }

    console.log("11. 1  to 5 items append successfully!");
}

appendItems();


// 12.DOM Change Attribute Value
console.log("12. Please click change the image button to change the image")
const changeImageButton = document.querySelector('.change-image-button');
const imageChange = document.querySelector('.image-change');
changeImageButton.addEventListener('click', function() {
    const src = `https://source.unsplash.com/featured/300x45${Math.floor(Math.random() * 9)}`;
    imageChange.removeAttribute('src');
    imageChange.setAttribute('src', src);

    console.log(`12. Changed image src is ${src}`)
})


//13. DOM Query Selector

console.log("13. Please click change class & color button to change all paragraph & color")

function changeClassAndColor() {
    const button = document.querySelector('.change-class-color');
    button.addEventListener('click', function() {
        const paragraphs = document.querySelectorAll('.color-red');

        paragraphs.forEach((item) => {
            item.style.color = "red";
        });

        console.log("13. Color successfully changed to specific classes")
    })
}

changeClassAndColor();


// 14. AJAX Get Request

async function sendGetRequest() {
    const url = "https://crud.teamrabbil.com/api/v1/ReadProduct";

    const response = await axios.get(url);

    if (response.status === 200) {
        const data = response.data['data'];
        console.log(data)
        console.log("14. data successfully loaded!")
    } else {
        console.log("can't get request")
    }
}

sendGetRequest();


// 15. AJAX Post Request
const payLoad = { "name": "John Doe", "email": "johndoe@example.com" };

async function sendPostRequest(data) {
    const url = "https://crud.teamrabbil.com/api/v1/CreateProduct/";

    const response = await axios.post(url, data);

    if (response.status === 200) {
        console.log("15.", response.data['data'], "Data Successfully upload");
    } else {
        console.log("Data can't upload")
    }

}

sendPostRequest(payLoad)