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

      var arr = Array();
      for(let i = 0; i < data.length; i++)
      {
          
      arr.push(data[i][0]);
      // console.log(data[i]);
      }
      // Get the ID where you want to display the iFrames
  var links = document.getElementById('list');
  //Array of URL
  
  // This loop will help you to traverse through the URL so you
  // can add create and add individual URLS
  for(let i = 0; i<arr.length;i++){
    
    //Creating the element here
    const iframe = document.createElement('iframe');
    const button = document.createElement("button");
    iframe.setAttribute("id", i);
    button.setAttribute("onClick", "myFunction()");
    
    console.log(button);
    //Assigning the URL to the iframe
    iframe.src = arr[i];
    
    //Appending or adding the URL to the (i)th iframe 
    links.appendChild(iframe);
    links.appendChild(button);

    
  }




    });
    // Converting Object to String to display it on screen
    //JSONContentObject = JSON.stringify(JSONContentObject, 2, 2);
    //   Dislaying the data on to the screen
     // screen.textContent = JSONContentObject;
    };
    // Running fileReader in Binary String Reader Mode
    fileReader.readAsBinaryString(excelSheet);
}