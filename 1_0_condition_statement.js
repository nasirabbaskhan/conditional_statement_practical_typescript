"use strict";
let marks = 70;
marks >= 60 ? console.log("student is pass") : console.log("student is fail");
if (marks >= 60) {
    // console.log("student is pass always confsfsf");
}
else {
    console.log("stdent is fail");
}
let mark = 56;
if (mark >= 90) {
    console.log("A+");
}
else if (mark >= 80 && mark < 90) {
    console.log("A");
}
else if (mark >= 70 && mark < 80) {
    console.log("B");
}
else if (mark >= 60 && mark < 70) {
    console.log("C");
}
else {
    console.log("Student is fail");
}
let n = 7;
if (n % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
let m = "E";
if (m == "A") {
    console.log("alphbet is Oval");
}
else if (m == "E") {
    console.log("Oval");
}
else if (m == "E") {
    console.log("Oval");
}
else if (m == "I") {
    console.log("Oval");
}
else if (m == "O") {
    console.log("Oval");
}
else if (m == "U") {
    console.log("Oval");
}
else {
    console.log("Not Oval");
}
switch (m) {
    case "A":
        console.log("Ovel");
        break;
    case "E":
        console.log("Ovel");
        break;
    case "I":
        console.log("Ovel");
        break;
    case "O":
        console.log("Ovel");
        break;
    case "U":
        console.log("Ovel");
        break;
    default:
        console.log("Not Ovel");
        break;
}
// nesed if else
let age = 8;
let country = "Pakistan";
country = country.toLowerCase();
if (age <= 18) {
    if (country == "pakistan") {
        console.log(`hello your age is ${age} and you are pakistani`);
    }
    else {
        console.log(`Hello your age is ${age} and you are not pakistani`);
    }
}
else {
    console.log(`Hello your age is ${age} so you are older`);
}
