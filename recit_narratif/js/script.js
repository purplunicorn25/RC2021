"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let recit = [];
//
let divsize = 600;

let screenWidth;
let screenHeight;

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
  screenWidth = $(document).width() * 0.7;
  screenHeight = $(document).height() * 0.7;
  recit = data.recit;
  appendPool();
}

//
//
//
function appendPool() {
  $('body').append(`<div id="pool"></div>`);
  $('#pool').css({
    "width": `${screenWidth}`,
    "height": `${screenHeight}`
  });
  appendText();
}

// appendText
//
// Display text from JSON file
function appendText() {
  //
  for (let i = 0; i < recit.length; i++) {
    $('#pool').append(`<div id=${recit[i].id} class="text">${recit[i].text}</div>`);
  }
  //
  for (let i = 0; i < recit.length; i++) {
    let posx = (Math.random() * (screenWidth)).toFixed();
    let posy = (Math.random() * (screenHeight)).toFixed();
    console.log(posx)
    $(`#${recit[i].id}`).css({
      'width': divsize + 'px',
      'height': 'auto',
      'position': 'absolute',
      'left': posx + 'px',
      'top': posy + 'px'
    });
  }
  click();
}

function click() {
  let active = -1;
  $('body').click(() => {
    //
    if (active == -1) {
      $(`#-1`).addClass("title");
    } else {
      $(`#-1`).removeClass("title")
    }
    for (let i = 0; i < recit.length; i++) {
      //
      $(`#${active-1}`).removeClass("active");
      $(`#${active}`).addClass("active");
    };
    //
    active++;
    //
    if (active == recit.length) {
      active = -1
    }
  })
}