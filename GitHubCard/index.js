import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get(`https://api.github.com/users/JaneMoody`);
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

let dataRev = document.querySelector(".cards");

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(person) {
  let card = document.createElement("div");
  let image = document.createElement("img");
  let cardInfo = document.createElement("div");
  let name = document.createElement("h3");
  let username = document.createElement("p");
  let location = document.createElement("p");
  let profile = document.createElement("p");
  let address = document.createElement("a");
  let followers = document.createElement("p");
  let following = document.createElement("p");
  let bio = document.createElement("p");

  card.classList.add("card");
  image.classList.add("img");
  cardInfo.classList.add("cardInfo");
  name.classList.add("name");
  username.classList.add("username");
  location.classList.add("location");
  profile.classList.add("profile");
  address.classList.add("address");
  address.classList.add("address");
  followers.classList.add("followers");
  following.classList.add("following");
  following.classList.add("following");
  bio.classList.add("bio");

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  dataRev.appendChild(card);

  image.src = `${person.image_url}`;
  name.textContent = `name: ${person.name}`;
  username.textContent = `username: ${person.login}`;
  location.textContent = `location: ${person.location}`;
  profile.textContent = `profile: ${person.url}`;
  followers.textContent = `followers: ${person.followers}`;
  following.textContent = `following: ${person.following}`;
  bio.textContent = `bio: ${person.bio}`;

  return card;
}

axios.get(`https://api.github.com/users/tetondan`)
.then((futureData) => {
  const person = futureData.data;
  cardMaker(person);
});
.catch((err) => {
  debugger;
});
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
