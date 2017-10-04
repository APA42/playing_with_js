"use strict";

var playWithListBtn = document.getElementById("playing-with-list-btn");
var removeSomeElementsFromListBtn = document.getElementById("remove-some-elements-list-btn");
var myList = [];

function playingWithList() {

    myList.push('first_element');
    myList.push('second_element');
    myList.push('third_element', 'fourth_element');

    // loop
    for (var counter=0; counter < myList.length; counter++) {
        console.log(myList[counter]);
    }

    displayContentList(myList);
}

function removeSomeElementsFromList() {
    // remove second_element
    myList.splice(1,1);

    displayContentList(myList);
}


playWithListBtn.addEventListener('click', playingWithList);
removeSomeElementsFromListBtn.addEventListener('click', removeSomeElementsFromList);

function displayContentList(aList) {
    var listToDisplay = document.querySelector('.list-elements');
    var elements = "";
    for (var counter=0; counter < aList.length; counter++) {
        elements +="<li>" + aList[counter] + "</li>";
    }
    listToDisplay.innerHTML = elements;
}