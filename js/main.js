/*global console*/
/*
Task 1
1. Access HTML element with id tag-line.
2. Access all headings that belong to div with the class name bg-main-content.
3. Create the variable collect and assign it with content of tag-line.
4. Loop through the array of headings and append the content of each heading to variable collect
5. After the loop, use alert to print collect
*/


//Accessing id tag-line from html file
var miniTag = document.getElementById("tag-line");
console.log("tagLine-id: ", miniTag);

//Accessing headings in class bg-main-content
var miniHead = document.querySelectorAll(".bg-main-content h2");
console.log("headings: ", miniHead);

//Assigning content of tag-line to variable Collect
var collect = miniTag.innerHTML + "\n---------------------------------------\n\n";
console.log("collect: ", collect);

//Appending the content of each heading to variable Collect
var i;

for (i = 0; i < miniHead.length; i += 1) {
    collect += miniHead[i] .innerHTML + "\n";
}

//Printing variable Collect
alert(collect);


/*
Task 2
1. Access 13th div with class name box that belongs to div with the class name bg-main-content.
You can name the variable when_to_launch.
2. Use property children to "scoop" in array all HTML elements that belong to that div.
3. Create the variable collect and assign it with content of heading that belongs to gotten array.
4. Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
5. After the loop, use alert to print collect
*/


//Accessing 13th div(class=box) that belongs to div with a class bg-main-content
//Scooping out all html elements of 13th div(class=box)
var div = document.querySelectorAll(".bg-main-content .box")[12].children;

//Assigning variable Collect with the heading content of array
var collect = div[0].innerHTML + "\n--------------------------------\n\n";
console.log("collect: ", collect);

//Appending the content of array elements to variable Collect
for (i = 1; i < div.length; i += 1) {
    collect += div[i] .innerHTML + "\n\n";
}

//Printing variable Collect
alert(collect);

