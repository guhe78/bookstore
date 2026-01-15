function bookTitleTemplate(index) {
  return `
          <h2>${books[index].name}</h2>
    `;
}

function getLikesAndPriceTemplate(index) {
  return `
    <p class="book_price red" id="book_price">${books[index].price.toFixed(
      2
    )} €</p>
    <div class="likes_container">
      <p class="likes" id="likes${index}">${books[index].likes}</p>
      <span id="like_heart${index}" onclick="onClickLike(event)" class="heart"></span>
    </div>
  `;
}

function getBookInfoTemplate(index) {
  return `
    <tr>
      <th>Author</th>
      <td>${books[index].author}</td>
    </tr>
    <tr>
      <th>Erscheinungsjahr</th>
      <td>${books[index].publishedYear}</td>
    </tr>
    <tr>
      <th>Genre</th>
      <td>${books[index].genre}</td>
    </tr>
  `;
}

function getBookCommentsTemplate(comment) {
  return `
    <h4>[${comment.name}]</h4>
    <p>${comment.comment}</p>        
  `;
}

function getNoCommentsTemplate() {
  return `
    <h4>Noch keine Kommentare vorhanden</h4>
  `;
}

function getMainContentTemplate(index) {
  return `
    <article class="main_section">
      <header class="book_section_header" id="book_headline${index}"></header>
        <section class="book_section_article">
          <hr class="separator" />
          <p class="book_icon">📖️</p>
          <hr class="separator" />
          <section class="price_likes_container" id="price_likes${index}"></section>
          <table class="book_info" id="book_info${index}"></table>
          <hr class="separator" />
          <section class="comments_section">
            <h3>Kommentare:</h3>
            <div class="comments_container" id="comments${index}"></div>
            <section class="comments_formular">
              <input id="comment_input${index}" class="comment_input" type="text"
                placeholder="Schreibe ein Kommentar" onkeyup="enterKeyEvent(event)" />
              <button class="send_button" id="send_new_comment_button${index}" 
                onclick="onClickAddComment(event)">
              </button>
            </section>
          </section>
        </section>
    </article>
  `;
}
