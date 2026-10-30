// 1. ASYNC FUNCTION
async function getRandomDog() {
    console.log("Fetching a random dog image...");
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    //console.log(response);
    const data = await response.json();
    // console.log(data);
    const imageUrl = data.message;
    console.log(imageUrl);
    //console.log(image);
    const dogSection = document.querySelector("#hund");
    dogSection.appendChild(imageUrl);
}
getRandomDog();

// 2. FETCH FUNCTION
function getRandomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('randomDog').src = data.message;
        });
}
function showDogImage(url) {
    //console.log("Showing dog image:", url);
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Random Dog";
    //console.log(img);
    const dogSection = document.querySelector("#hund");
    dogSection.appendChild(img);
}

getRandomDog();