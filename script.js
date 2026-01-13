console.log(books);

function onClickLike(event) {
  let index = event.target.id.slice(10);
  console.log(books[index].liked);
  let liked = books[index].liked;
  if (liked) {
    liked = false;
  } else {
    liked = true;
  }
  books[index].liked = liked;
  console.log(liked);
}

// isLiked(books[0].liked);

function loadBooks() {
  let booksSection = document.getElementById("books_content");

  for (let i = 0; i < books.length; i++) {
    booksSection.innerHTML += getMainContentTemplate(i);
    renderBookContent(i);
  }
}

function renderBookContent(index) {
  document.getElementById("book_headline" + index).innerHTML =
    bookTitleTemplate(index);
  document.getElementById("price_likes" + index).innerHTML =
    getLikesAndPriceTemplate(index);
  document.getElementById("book_info" + index).innerHTML =
    getBookInfoTemplate(index);
  document.getElementById("comments" + index).innerHTML = getComments(
    books[index].comments
  );
  isLiked(books[index].liked, index);
}

function isLiked(liked, index) {
  let like = document.getElementById("like_heart" + index);

  if (liked) {
    like.classList.add("like");
    like.classList.remove("no_like");
  } else {
    like.classList.add("no_like");
    like.classList.remove("like");
  }
}

function getComments(array) {
  let comments = "";
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      comments += getBookCommentsTemplate(array[i]);
    }
  } else {
    comments = getNoCommentsTemplate();
  }
  return comments;
}
