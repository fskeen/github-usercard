/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/
const userData = axios.get(`https://api.github.com/users/fskeen`)
userData
  .then(a => {
    const dataDiv = createGithubCard(a)
    document.querySelector(".cards").appendChild(dataDiv)
  })
  .catch(error => {
    console.log(`Hmmm, not quite right. Check this out: ${error}`)
  })
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

let followersArray = [];
const followers = axios.get("https://api.github.com/users/fskeen/followers")
let followLogins = []

followers
  .then( a => {
    // console.log(obj.data)

    followersArray = a.data.map(arr => {
      // console.log("login", arr.login)
      return arr.login
    })

    followersArray.forEach(login => {
      axios.get(`https://api.github.com/users/${login}`)
        .then(follower => {
          console.log(follower)
          let followerDiv = createGithubCard(follower)
          document.querySelector(".cards").appendChild(followerDiv)
        })
        .catch(error => {
          console.log(`This ain't it, friend. Check out this error: ${error}`)
        })
    })

    console.log(followersArray);
    return followersArray;
})
  .catch(err => {
    return console.log(`Hmm, try again. Check out this error: ${err}.`)
})
// console.log(followers)

// followers
//   .then(a => {
//     // console.log("Initial return from API call: ", a);

//     // iterate through the array of followers listed in the data section of the JSON
//     a.data.map(follower => {
//       // console.log("follower data", follower)

//       // capture each individual follower data in an object so that it matches the format expected by the constructor function (object.data.name, etc.)
//       let followObj = {data: follower}
//       // console.log("followObj var in fx", followObj)

//       // push the object to the array
//       followersArray.push(followObj)
//       // console.log("objs pushed to array", followersArray)
//       return followersArray
//     });

//     // console.log("followersArray after fx", followersArray)

//     // run the constructor function for each object in the array & store value
//     followersArray.map(arr => {
//       document.querySelector(".cards").appendChild(createGithubCard(arr))
//     })

//     // console.log("followersData", followersData)
//     // append those values to the page
    

//   })
//   .catch(error => {
//     console.log(`Hmmm, wrong. Check this out: ${error}`)
//   })
//   console.log("followersArray variable: ", followersArray)




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

function createGithubCard (obj) {

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
  let cardImg = createElement("img", undefined, undefined, "src", obj.data.avatar_url);
  let cardInfo = createElement("div", "card-info", undefined);
  let cardName = createElement("h3", "name", obj.data.name);
  let cardUsername = createElement("h3", "username", obj.data.login);
  let cardLocation = createElement("p", undefined, obj.data.location)
  let cardProfile = createElement("p", undefined, `Profile: `)
  let cardProfileLink = createElement("a", undefined, obj.data.html_url, "src", "https://api.github.com/users/fskeen")
  let cardFollowers = createElement("p", undefined, `Followers: ${obj.data.followers}`)
  let cardFollowing = createElement("p", undefined, `Following: ${obj.data.following}`)
  let cardBio = createElement("p", undefined, obj.data.bio)

  // sewing them together into a layout

  HTMLElement.prototype.appendChildren = function () {
    for (let i = 0; i < arguments.length ; i++) {
      this.appendChild(arguments[i])
    }
  };

  cardContainer.appendChildren(cardImg, cardInfo);
  cardInfo.appendChildren(cardName, cardUsername, cardLocation, cardProfile, cardFollowers, cardFollowing, cardBio);
  cardProfile.appendChildren(cardProfileLink);

  return cardContainer
}


// console.log(userData)




/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
