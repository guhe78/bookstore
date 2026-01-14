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
  renderLikes(index);
  document.getElementById("book_info" + index).innerHTML =
    getBookInfoTemplate(index);
  renderComments(index);
}

function renderLikes(index) {
  document.getElementById("price_likes" + index).innerHTML =
    getLikesAndPriceTemplate(index);
  isLiked(books[index].liked, index);
}

function renderComments(index) {
  document.getElementById("comments" + index).innerHTML = getComments(
    books[index].comments
  );
}

function onClickLike(event) {
  let index = getIndexNumber(event.target.id);

  let liked = books[index].liked;
  let likes = books[index].likes;

  if (liked) {
    liked = false;
    likes = likes - 1;
  } else {
    liked = true;
    likes = likes + 1;
  }

  books[index].liked = liked;
  books[index].likes = likes;

  renderLikes(index);
}

function onClickAddComment(event) {
  event.preventDefault();

  let index = getIndexNumber(event.target.id);
  let comment = document.getElementById("comment_input" + index).value;

  setNewComment(index, comment);
  renderComments(index);

  document.getElementById("comment_input" + index).value = "";
  event.target.blur();
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

function getIndexNumber(idString) {
  return idString.replace(/\D/g, "");
}

function setNewComment(index, comment) {
  let newComment = {
    name: "Günni",
    comment: comment,
  };

  books[index].comments.unshift(newComment);
}

function enterKeyEvent(event) {
  if (event.key == "Enter") {
    onClickAddComment(event);
  }
}
