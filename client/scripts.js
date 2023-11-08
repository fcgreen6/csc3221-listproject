const http = new coreHTTP;

// Block Variables
let theList = [];

// setup selectors
const result = document.querySelector(".result");
const input =  document.querySelector("#listitem");
const addButton =  document.querySelector(".add-btn");
const delButton =  document.querySelector(".del-btn");

// Listeners
addButton.addEventListener("click", httpPost);
delButton.addEventListener("click", httpDelete);

/* Helper Functions */
function ShowList() {
  let output = "<ul>";
  for (const itm of theList) {
    output += `<li>${itm}</li>`;
  }
  output += "</ul>";
  result.innerHTML = output;
}

/**
 * The GetList function is called when the application is first loaded. This function gets the data
 * stored within the file system from the server.
 */
async function GetList() {

  theList = await http.get("/api");
}

/**
 * The WriteList function sends an updated list to backend. The updated list is stored in the file system.
 */
async function WriteList() {

  await http.post("/api", theList);
}

/**
 * The post function adds the user specified element to the end of the list.
 * Then the frontend display and backend are updated.
 * @param e ignore.
 */
async function httpPost(e) {

  theList.push(input.value);

  // Update frontend.
  ShowList();

  // Update backend.
  WriteList();
}

/**
 * The delete function deletes the user specified element from the list.
 * Then the frontend display and backend are updated.
 * @param e ignore.
 */
function httpDelete(e) {

  theList = theList.filter((element) => {
    
    return element !== input.value;
  });

  // Update frontend.
  ShowList();

  // Update backend.
  WriteList();
}

// Loading functions
function showLoading() {
  result.innerHTML = "Loading...";
}

async function main() {
  addButton.disabled = true;
  delButton.disabled = true;
  showLoading();

  await GetList();
  ShowList();

  addButton.disabled = false;
  delButton.disabled = false;
}

main();