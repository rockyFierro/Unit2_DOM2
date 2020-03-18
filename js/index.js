// Your code goes here

//alias'
const sel = arg => document.querySelector(arg);
const selAll = arg => document.querySelectorAll(arg);

//cached elements
const bod = sel("body");
const logo = sel("h1");
const navLinks = selAll(".nav-link");
const bannerImg = sel(".intro img");
const buttons = selAll(".btn");
const footer = sel("footer");
const underHat = sel("header");


const inputElement = document.createElement("input"); //input element, text
inputElement.setAttribute('type',"text");
inputElement.setAttribute('name',"email");
inputElement.setAttribute('value',"default");
inputElement.style.textAlign = "center";
inputElement.style.margin = "0 45%";
//test cache

// logo.style.color = "blue";
// navLinks.forEach(link => link.style.color = "blue");
// bannerImg.style.border = "solid 2px blue";
// headlines.forEach( link => link.style.color = "blue");
// articles.forEach( paragraph => paragraph.style.color = "blue");
// smallHeadlines.forEach( el => el.style.color = "blue");
// buttons.forEach( el => el.style.color = "blue" );
// footer.style.backgroundColor = "blue";
// allTheThings.style.background = "blue";
// underHat.style.background = "dodgerblue";

//unique event listeners

//mouseover#1
//TODO: stop alert from being activated more than once
logo.addEventListener("click", function() {
    alert("You have discovered the logo on the page, ask a dev for more info!");

});
inputElement.addEventListener("click", function (e){
    e.stopPropagation();
})

//orientation#2
//TODO: adjust rotation to account for fake gravity and hang at natural state.
//TODO: create a 'natural' fade-out and reset after the animation is over
window.addEventListener("orientationchange", function() {
    TweenLite.to(underHat, 2, {
        rotation: 360,
        scale: 1,
        transformOrigin: "50px 20px"
    });
});

window.addEventListener("load", function() {
    console.log("DOM loaded... Loading scripts...")
});

bod.addEventListener("keydown", function(e){
    console.log(e.key);
});

navLinks.forEach(link => link.addEventListener("click", function(e){
    alert("It's dangerous to go alone, take this pop-up with you.");
    e.preventDefault();
}));

window.addEventListener("scroll", function () {
    logo.textContent = window.pageYOffset});


logo.appendChild(inputElement);

inputElement.addEventListener("focus", (e) => {
    e.target.style.background = "pink";
}, false);


inputElement.addEventListener("blur", (e) => {
    e.target.style.background = "blue";
}, false);

buttons.forEach(button => button.addEventListener("click", function(){
    button.textContent = "OUCH, please do not do that.";
},false));

buttons.forEach(button => button.addEventListener("dblclick", function(){
    button.textContent = "I said PLEASE!.";
}, false));

bannerImg.addEventListener("mouseenter", () => {
    // good practice to pair transform + transition
    bannerImg.style.transform = "scale(1.2)";
    bannerImg.style.transition = "all 0.3s";
}, false);

bannerImg.addEventListener("mouseleave", () => {
    bannerImg.style.transform = "scale(1)";
    bannerImg.style.transition = "all 0.3s";
});

//mouseover ♥
//keydown ♥
//orientation ♥
//click ♥
//load ♥
//focus ♥
//resize
//scroll ♥
//blur ♥
//dblclick ♥

//Nest two similar events somewhere in the site and prevent the event propagation properly
//Stop the navigation items from refreshing the page by using `preventDefault()`♥
