var NeilLikes = 9;
var NicholeLikes = 12;
var JimLikes = 9;

function Neil() {
    NeilLikes++;

    var currentLikes = document.querySelector(".counter");
    currentLikes.innerHTML = NeilLikes + " like(s)"
}

function Nichole() {
    NicholeLikes++;

    var currentLikes2 = document.querySelector(".counter2");
    currentLikes2.innerHTML = NicholeLikes + " like(s)"
}

function Jim() {
    JimLikes++;

    var currentLikes3 = document.querySelector(".counter3");
    currentLikes3.innerHTML = JimLikes + " like(s)"
}
