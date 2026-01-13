console.log(books);

function onClickLike() {
  like.classList.toggle("red_heart");
}

document.getElementById("book_headline").innerHTML = bookTitleTemplate(0);
document.getElementById("price_likes").innerHTML = getLikesAndPrice(0);
document.getElementById("book_info").innerHTML = getBookInfoTemplate(0);
document.getElementById("comments").innerHTML = getBookCommentsTemplate(0);
isLiked(books[0].liked);

function isLiked(liked) {
  let like = document.getElementById("like_heart");

  if (liked) {
    like.classList.add("red_heart");
  } else {
    like.classList.add("heart");
  }
}

function getComments(index) {}
