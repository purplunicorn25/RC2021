"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let recit = [];

// When the document is loaded call setup
$(document).ready(setup);

// setup
//
// Load the data from the JSON
function setup() {
  // Get the data from the JSON file
  $.getJSON("data/text.json")
    .fail(dataError)
    .done(dataLoaded);
}

// dataError
//
// If the JSON file did not load correctly show an error
function dataError(request, textStatus, error) {
  // Display the error in the console
  console.error(error);
}

// dataLoaded
//
// Store the data in arrays, display the element that require the data,
// And start the game
function dataLoaded(data) {
  recit = data.recit;
  appendText();
}

// appendText
//
// Display text from JSON file
function appendText() {
  //
  let divsize = 600;
  //
  for (let i = 0; i < recit.length; i++) {
    $('#pool').append(`<div id=${recit[i].id} class="text">${recit[i].text}</div>`);
  }
  //
  for (let i = 0; i < recit.length; i++) {
    let posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    let posy = (Math.random() * ($(document).height() - divsize)).toFixed();
    console.log(posx)
    $(`#${recit[i].id}`).css({
      'width': divsize + 'px',
      'height': 'auto',
      'position': 'absolute',
      'left': posx + 'px',
      'top': posy + 'px'
    });
  }
}