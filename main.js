"use strict";

let wrapper = document.getElementById("wrapper");
let lines = wrapper.children;


//To make sure you dont have to create and fill all the spans manually:
for(let line of lines)
{
    refactor(line);
    addListener(line);
}

//divide the text-elements into their particular characters, create span-Elements with
//those chars and reapply those spans into the text-elements:
function refactor(el) {
    let string = el.innerText;
    let array = [];

    for(let i = 0 ; i < string.length ; i++)
    {
        let span = document.createElement("span");
        span.innerText = string[i];
        array.push(span);
    }

    el.innerText = "";
    array.forEach(span => {
        el.append(span);
    })
}
//adds the hover and mouseleave Listener to every single character:
function addListener(el) {
    let chars = el.querySelectorAll("*");
    chars.forEach(char => {
        char.addEventListener("mouseenter", hovermagic);
        char.addEventListener("mouseleave", removemagic);})
}

//manages the scaling of the sibling-characters based on if there are actually any:
//if they are null, nothing happens
function hovermagic(e) {
    let pre1, pre2, pre3, ne1, ne2, ne3;
    e.target.classList.add("main");
    pre1 = e.target.previousElementSibling;

    pre1 === null ?
    pre2 = null :
    pre2 = pre1.previousElementSibling;

    pre2 === null ?
    pre3 = null :
    pre3 = pre2.previousElementSibling;


    ne1 = e.target.nextElementSibling;

    ne1 === null ?
    ne2 = null :
    ne2 = ne1.nextElementSibling;

    ne2 === null ?
    ne3 = null :
    ne3 = ne2.nextElementSibling;

    if(pre1 !== null) pre1.classList.add("first");
    if(pre2 !== null) pre2.classList.add("second");
    if(pre3 !== null) pre3.classList.add("third");
    
    if(ne1 !== null) ne1.classList.add("first");
    if(ne2 !== null) ne2.classList.add("second");
    if(ne3 !== null) ne3.classList.add("third");
}

function removemagic(e) {
    e.target.classList = "";
    let pre1, pre2, pre3, ne1, ne2, ne3;
    pre1 = e.target.previousElementSibling;

    pre1 === null ?
    pre2 = null :
    pre2 = pre1.previousElementSibling;

    pre2 === null ?
    pre3 = null :
    pre3 = pre2.previousElementSibling;


    ne1 = e.target.nextElementSibling;

    ne1 === null ?
    ne2 = null :
    ne2 = ne1.nextElementSibling;

    ne2 === null ?
    ne3 = null :
    ne3 = ne2.nextElementSibling;
    if(pre1 !== null) pre1.classList.remove("first");
    if(pre2 !== null) pre2.classList.remove("second");
    if(pre3 !== null) pre3.classList.remove("third");
    
    if(ne1 !== null) ne1.classList.remove("first");
    if(ne2 !== null) ne2.classList.remove("second");
    if(ne3 !== null) ne3.classList.remove("third");
}