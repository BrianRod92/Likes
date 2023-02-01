
var likesCounter = 3;

function countLike() {
    likesCounter++;
    var currentLikes = document.querySelector(".counter");
    currentLikes.innerHTML = likesCounter + " like(s)"

}


