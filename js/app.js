/* eslint-env browser */

'use strict';

// Let's get a reference to all our DOM elements
// and store them in an object
// @hint: use document.querySelector()
//var total = 0;
document.querySelector('entries');

const $els = {
      total:      null,
      entries:    null,
      entryForm:  null,
      inputField: null,
    };


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
  var newCell = newRow.insertCell(0);
  // injects content into cell
  newCell.innerHTML = content;

  return newRow
};

/**
 * @func removeDecimal
 * @desc parses a string and converts it to a whole number (decimal removed)
 * @param {String} str
 * @returns {Number} the incoming number multiplied by 100
 */
const removeDecimal = function (str) {
  var float = parseFloat (str)
  return float * 100
};

/**
 * @func dollarFormat
 * @desc takes an integer and formats a string in dollar format
 * @param {numeric} num -
 * @returns {string} 0000 -> '$00.00'
 */
const dollarFormat = function (num) {
  var digits = num.toString();
  var output = '$'
  for (i =0; i < digits.length; i ++);
    if (i == digits.length - 2)
    {
      //using concat to join strings
      var newDigit = ".";
      newDigit.concat(digits[i]);
      output.concat(newDigit);
    }
    else
    {
      output.concat(digits[i]);
    }

  return output


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
  newValue = removeDecimal(els.input);

  // add a row with the data
  // our design dictates that this row should have two cells
  // let's insert the new empty cell BEFORE the existing one
  newCell = addRow("");
  newRow = addRow(dollarFormat(newValue));

  // update the total price
  // and
  // update the display total

  els.total = els.total + newValue;

  // reset the form to clear out anything previously typed
  els.inputField = ("How Much?");

};



// event handlers
/**
 * Listen for submit events from the form
 */

//$els.entryForm.addEventListener('input', handleFormSubmit);

