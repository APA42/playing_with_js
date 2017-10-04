"use strict";

var playWithListBtn = document.getElementById("playing-with-list-btn");
var removeSomeElementsFromListBtn = document.getElementById("remove-some-elements-list-btn");
var myList = [];

var playWithDictBtn = document.getElementById("playing-with-dict-btn");

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

function playingWithDict() {
    const key_2 = 'key_2';

    var myDict = {};

    myDict['key_1'] = 'value_1';
    myDict.key_2 = 'value_2';
    myDict['key_3'] = 'value_3';
    myDict['key_4'] = 'value_4';
    myDict['key_5'] = 'value_5';

    console.log(myDict)

    // Tips from
    // https://stackoverflow.com/questions/351495/dynamically-creating-keys-in-javascript-associative-array
    for (var a_key in myDict) {
        if (myDict.hasOwnProperty(a_key)) {
            console.log("key = " + a_key + ", value = " + myDict[a_key]);
        }
    }

    displayContentDict(myDict);
}

playWithListBtn.addEventListener('click', playingWithList);
removeSomeElementsFromListBtn.addEventListener('click', removeSomeElementsFromList);
playWithDictBtn.addEventListener('click', playingWithDict);


function displayContentList(aList) {
    var listToDisplay = document.querySelector('.list-elements');
    var elements = "";
    for (var counter=0; counter < aList.length; counter++) {
        elements +="<li>" + aList[counter] + "</li>";
    }
    listToDisplay.innerHTML = elements;
}

function displayContentDict(aDict) {
    var listToDisplay = document.querySelector('.dict-elements');
    var elements = '';
    for (var a_key in aDict) {
        if (aDict.hasOwnProperty(a_key)) {
            elements += '<li>' + '<em>key=</em>' + a_key + '  ' +'<em>value=</em>' + aDict[a_key] + '</li>';
        }
    }
    listToDisplay.innerHTML = elements;
}