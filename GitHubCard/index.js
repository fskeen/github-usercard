/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/
const promise = axios.get(`https://api.github.com/users/fskeen`)
console.log(promise)
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

function createGithubCard (obj) {}

// creating the elements of the page
function createElement(name, className = null, content = '', setAttribute = null, attributeValue  = null) {
  if(!name) return;
  let element = document.createElement(name);
  if(className) element.classList.add(className);
  element.textContent = content;
  if(setAttribute) element.setAttribute(`${setAttribute}`, `${attributeValue}`);
  return element;
}

let cardContainer = createElement("div", "card", undefined);
let cardImg = createElement("img", undefined, undefined, "src", "https://avatars1.githubusercontent.com/u/50350459?v=4");
let cardInfo = createElement("div", "card-info", undefined);
let cardName = createElement("h3", "name", "Bob");
let cardUsername = createElement("h3", "username", "username here");
let cardLocation = createElement("p", undefined, "location here")
let cardProfile = createElement("p", undefined, "Profile: ")
let cardProfileLink = createElement("a", undefined, "Find this person on Github here.", "src", "https://api.github.com/users/fskeen")
let cardFollowers = createElement("p", undefined, "Who this person follows")
let cardFollowing = createElement("p", undefined, "Who follows this person")
let cardBio = createElement("p", undefined, "User Bio here")

// sewing them together into a layout

HTMLElement.prototype.appendChildren = function () {
  for (let i = 0; i < arguments.length ; i++) {
    this.appendChild(arguments[i])
  }
};

cardContainer.appendChildren(cardImg, cardInfo);
cardInfo.appendChildren(cardName, cardUsername, cardLocation, cardProfile, cardFollowers, cardFollowing, cardBio);
cardProfile.appendChildren(cardProfileLink);

console.log(cardContainer)




/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
