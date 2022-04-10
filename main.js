console.log("IN HERE!");

// DATA
// CHALLENGE: MOVE TO SEPARATE FILE (EXPORT/IMPORT)
const libArray = [
  "plural-noun",
  "occupation",
  "animal-plural",
  "place",
  "verb",
  "noun"
];

// reuseable function to render HTML on the DOM
// CHALLENGE: MOVE TO SEPARATE FILE (EXPORT/IMPORT)
const renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
}

// HTML FORM COMPONENT
// CHALLENGE: MOVE TO SEPARATE FILE (EXPORT/IMPORT)
const formHtml = () => {
  let domString = `<form id="lib-form">`;
  
  // create an input for each item in the array ensuring unique IDs for each
  libArray.forEach((word, i) => {
    domString += `
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="${word}--${i}" placeholder="name@example.com">
      <label for="floatingInput">${word}</label>
    </div>`;
  })

  domString += `
  <button class="btn btn-success" type="submit">Get Lib</button> 
  </form>`;

  renderToDom("#form", domString);
}

// HTML RIDDLE COMPONENT
// CHALLENGE: MOVE TO SEPARATE FILE (EXPORT/IMPORT)
const riddle = (array) => {
  const domString = `In the book War of the 
  <b>${array[0]}</b>, the main character is an anonymous 
  <b>${array[1]}</b> who records the arrival of 
  <b>${array[2]}</b> in 
  <b>${array[3]}</b>. Needless to say, havoc reigns as the 
  <b>${array[4]}</b> continue to 
  <b>${array[2]}</b> everything in sight, until they are killed by the common 
  <b>${array[5]}</b>.<br />
  <button class="btn btn-info" id="restart">Try Again</button>`;

  renderToDom("#riddle", domString);
}

const getValue = (id) => {
  return document.querySelector(`#${id}`).value
}

const handleSubmit = (e) => {
  e.preventDefault();
  const form = document.querySelector("form");

  // object to 
  const userInputArray = []
  
  // Update the values in the object
  libArray.forEach((word, i) => {
    userInputArray.push(getValue(`${word}--${i}`) || "");
  });

  // Put riddle on the DOM
  riddle(userInputArray);

  // remove form from DOM
  form.innerHTML = "";
}

// CAPTURE EVENTS ON THE DOM
const events = () => {
  document.querySelector("#lib-form").addEventListener("submit", handleSubmit)
  document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.id === "restart") {
      init();
    }
  })
}

// INITIALIZE THE APP
const init = () => {
  formHtml();
  events();
  document.querySelector("#riddle").innerHTML = "";
}

init();
