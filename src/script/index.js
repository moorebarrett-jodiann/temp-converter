'use strict';

/**
 * JavaScript Basics
 * Jodi-Ann Barrett
 * 
 * Assignment 5
 * 
 * */


// Utility Functions 
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

// Select HTML element by class, id and html element
function select(selector, parent = document) {
    return parent.querySelector(selector);
}

// Select All HTML elements by class, id and html element
function selectAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
}

/**
 * Changing App Theme
 */
const theme = select('.theme');
const h2 = select('h2');
const p = select('p');
const label = selectAll('label');
const input = select('.input');
const bg = document.body;
const output = select('.output');
const body = document.body;

onEvent('click', theme, function() {
    
    this.classList.toggle('dark');
    
    if(this.classList.contains('dark')) {
        body.classList.add('dark');
        this.innerText = 'Light Mode';
    } else {
        body.classList.remove('dark');
        this.innerText = 'Dark Mode';
    }
});

/**
 * Temperature Converter
 */

const form = select('form');
const btn = select('.get-result');
const toFahrenheit = select('.to-fahrenheit');

// Validate whether input is a number
function isNumber(str) {
    let val = str.trim();

    if (val.length > 0 && !isNaN(val))
        return true
    
    return false;
}

// Function to convert Celcius to Fahrenheit
function convertToFahrenheit(value) {
    let result = (value * (9 / 5)) + 32;
    result = result.toFixed(1); 
    return result;
}

// Function to convert Fahrenheit to Celcius
function convertToCelcius(value) {
    let result = (value - 32) * (5 / 9);
    result = result.toFixed(1); 
    return result;
}

// When convert button is clicked trigger calculation based on radio selection
onEvent('click', btn, function() {
    let a = input.value.trim();

    if(isNumber(a)){
        if(toFahrenheit.checked) {
            console.log(a)
            output.value = convertToFahrenheit(a);            
        }
        else {
            console.log(a)
            output.value = convertToCelcius(a);            
        }
    } else {
        input.value = '';
        output.value = 'Enter a valid number.';
    }
});

// Reset form on window load
onEvent('load', window, () => {
    input.value = '';
    output.value = '';
    toFahrenheit.checked = true;
});
