/*
Importing File:
CSV, Excelsheet
 */
let importedFile = document.getElementById("file-importer");
// Identifyinh the screen
let screen = document.getElementById("screen");
// Adding event listener
importedFile.addEventListener("change", importFile);

// Function that would start importing the file once the element is changed
function importFile(event) {
  // Excelsheet target point
  let excelSheet = event.target.files[0];

    // Reading the file using the default JS FileReader API
    let fileReader = new FileReader();
    // Loading the file on to the api to process
    fileReader.onload = e => {
    //   Reading API using Sheet.js in binary format
      let workbook = XLSX.read(e.target.result, {type: "binary"});
    //   JSON Object to store converted excelsheet
    let JSONContentObject = {};
    //   Looping through sheets for data
    workbook.SheetNames.forEach(function(sheetName) {
        // Calling Sheet.js function to convert it to JSON Object
      let data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
        header: 1
      });
    //   Checking if there is any data in the field
      if (data.length) JSONContentObject[sheetName] = data;
    });
    // Converting Object to String to display it on screen
    JSONContentObject = JSON.stringify(JSONContentObject, 2, 2);
    //   Dislaying the data on to the screen
      screen.textContent = JSONContentObject;
    };
    // Running fileReader in Binary String Reader Mode
    fileReader.readAsBinaryString(excelSheet);
}