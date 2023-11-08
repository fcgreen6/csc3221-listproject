# csc3221-listproject
Updated Functions:

- GetList() [client/script.js]:
  - Sends a get request to the server and updates the application's display upon retreival of the list.

- WriteList() [client/script.js]:
  - Sends a post request to the server containing the updated list.

- httpPost() [client/script.js]:
  - This function is called whenever the user intends to add a new item to the list.
  - The function removes multiple occurances of that item.
  - Then the item is appended to the end of the list and the backend is updated with the new information.
 
- httpDelete() [client/script.js]:
  - This function is called whenever the user intends to delete an item from the list.
  - The function removes the item from the list and updates the backend with the simplified list.

- app.post() [app.js]:
  - Calls the file manager module to update the file system with the stringified array of values.

- app.get() [app.js]:
  - Sends the data obtained from the file manager module as a stringified JSON object upon request.
 
- ReadData() [filemgr.js]:
  - Returns the array fo values stored within the file system as a javascript object.

- WriteData() [filemgr.js]:
  - Writes information to the file listdata.json.
