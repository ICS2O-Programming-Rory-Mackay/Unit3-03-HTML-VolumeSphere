// Copyright Rory Mackay 2022
// Created by: Rory Mackay
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the volume of a sphere
 */
function calculateVolume () {
  // get user input
  let radius = parseFloat(document.getElementById('sphere-radius').value)

  // calculate the volume
  let volume = (4/3) * Math.PI * radius **3 

  // display the results
  document.getElementById('volume').innerHTML = "The volume is " + volume.toFixed(2) + "cm<sup>3</sup>"
}