/* eslint-env browser */

'use strict';

// Let's get a reference to all our DOM elements
// and store them in an object
// @hint: use document.querySelector()
//var total = 0;
const els = {
      total:      null,
      entries:    null,
      entryForm:  null,
      inputField: null,
    };

els.total = 0;
els.entryForm = document.querySelector('#entry');
els.inputField = els.entryForm.querySelector('input');
els.entries =[];


// helper functions

/**
 * @func addRow
 * @desc creates a table row and cell, and injects content into the cell
 * @param {String} content
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
 * @return {HTMLTableRowElement} a reference to the new row created
 */
const addRow = function (content) {
  // Get a reference to the table
  var tableRef = document.getElementById("entries");
  // Insert a row in the table at row index 0
  var newRow = tableRef.insertRow(0);
  // Insert a cell in the row at index 0
  newRow.insertCell(0);
  var newCell = newRow.insertCell(1);
  // injects content into cell
  newCell.innerHTML = content;

};

/**
 * @func removeDecimal
 * @desc parses a string and converts it to a whole number (decimal removed)
 * @param {String} str
 * @returns {Number} the incoming number multiplied by 100
 */
const removeDecimal = function (str) {
  var float = parseFloat(str);
  return (float * 100).toFixed();

};

/**
 * @func dollarFormat
 * @desc takes an integer and formats a string in dollar format
 * @param {numeric} num -
 * @returns {string} 0000 -> '$00.00'
 */
const dollarFormat = function (num) {
  var output = num / 100;
  return '$'.concat(output.toFixed(2));


};

/**
 * @func handleFormSubmit
 * @desc get the value of the entry field
 * @param {submit} event - the 'submit' event that was triggered when the form was submitted
 * @returns {undefined}
 */
const handleFormSubmit = function (event) {
  // stop the event from happening
  event.preventDefault();

  // note: remember that form fields ALWAYS contain text
  var strInput = els.inputField.value;
  var newValue = removeDecimal(strInput);
  //call value on input field to get string to caste to int

  // add a row with the data
  // our design dictates that this row should have two cells
  // let's insert the new empty cell BEFORE the existing one

  var newRow = addRow(dollarFormat(newValue));

  // update the total price
  // and
  // update the display total


  els.total = parseFloat(els.total) + parseFloat(newValue);
  document.querySelector("#total").innerHTML = dollarFormat(els.total);

  // reset the form to clear out anything previously typed

  els.inputField.value = "";
};

// event handlers
/**
 * Listen for submit events from the form
 */

els.entryForm.addEventListener('submit', function(event) {
  handleFormSubmit(event);
});



