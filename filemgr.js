const fs = require("fs/promises")

/**
 * The ReadData function reads the data stored within the listdata file within the file system.
 * @returns The data stored within the file system as a javascript object.
 */
async function ReadData() {
  
  try {

    listData = await fs.readFile("listdata.json", {
      encoding: "utf8",
    });

    return JSON.parse(listData);
  } 
  catch (error) {

    console.log(error);
  }
}

/**
 * The WriteData function stores the array of values within the dataOut parameter within the file listdata.json.
 * @param dataOut The array of values that will be stored within the file system.
 */
async function WriteData(dataOut) {
  try {
    
    listData = await fs.writeFile("listdata.json", dataOut, {
      encoding: "utf8",
    });
  } 
  catch (error) {

    console.log(error);
  }
}

exports.ReadData = ReadData;
exports.WriteData = WriteData;