"use strict";

var table_data = [ { first_name : 'Rose',
                     last_name  : 'Tyler',
                     home       : 'Earth' },
                   { first_name : 'Zoe',
                     last_name  : 'Heriot',
                     home       : 'Space Station W3'},
                   { first_name : 'Jo',
                     last_name  : 'Grant',
                     home       : 'Earth'},
                   { first_name : 'Leela',
                     last_name  : null,
                     home       : 'Unspecified'},
                   { first_name : 'Romana',
                     last_name  : null,
                     home       : 'Gallifrey'},
                   { first_name : 'Clara',
                     last_name  : 'Oswald',
                     home       : 'Earth'},
                   { first_name : 'Adric',
                     last_name  : null,
                     home       : 'Alzarius'},
                   { first_name : 'Susan',
                     last_name  : 'Foreman',
                     home       : 'Gallifrey'} ];

function GenerateTable(){
    // gets the id from the html
    var table = document.getElementById('table');
    //loops over the table data for the length of the array
    for (var i=0; i < table_data.length; i++) {
      //creates a variable to create a new row
        var row = table.insertRow(-1);
        //sets the table data keys to variables for easier reading
        var firstName = table_data[i].first_name;
        var lastName = table_data[i].last_name;
        var home = table_data[i].home;
        //inserts the data into each row for each object
        row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${home}</td>
        `;
    };
};
//checks the status of the DOM and if it is all set, calls the GenerateTable function
if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
  GenerateTable();
} else {
  document.addEventListener('DOMContentLoaded', GenerateTable);
}
