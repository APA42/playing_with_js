"use strict";


var playWithListBtn = document.getElementById("playing-with-list-btn");

function playingWithList() {

    //Make a list
    var myList = [];
    myList.push('first_element');
    myList.push('second_element');
    myList.push('third_element', 'fourth_element');

    // loop
    for (var counter=0; counter < myList.length; counter++) {
        console.log(myList[counter]);
    }

    // Display
    displayContentList(myList);
}


playWithListBtn.addEventListener('click', playingWithList);


function displayContentList(aList) {
    var listToDisplay = document.querySelector('.list-elements');
    var elements = "";
    for (var counter=0; counter < aList.length; counter++) {
        elements +="<li>" + aList[counter] + "</li>";
    }
    listToDisplay.innerHTML = elements;
}