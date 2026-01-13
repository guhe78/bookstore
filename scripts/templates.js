function bookTitleTemplate(index) {
  return `
          <h2>${books[index].name}</h2>
    `;
}

function getLikesAndPrice(index) {
  return `
  <p class="book_price red" id="book_price">${books[index].price}</p>
            <div class="likes_container">
              <p class="likes" id="likes">${books[index].likes}</p>
              <span
                id="like_heart"
                onclick="onClickLike()"
                class="heart"
              ></span>
            </div>
  `;
}

function getBookInfoTemplate(index) {
  return `
    <tr>
      <th>Author</th>
      <td>:</td>
      <td>${books[index].author}</td>
    </tr>
    <tr>
      <th>Erscheinungsjahr</th>
      <td>:</td>
      <td>${books[index].author}</td>
    </tr>
    <tr>
      <th>Genre</th>
      <td>:</td>
      <td>${books[index].genre}</td>
    </tr>
  `;
}

function getBookCommentsTemplate(index) {
  return `
    <tr>
      <th>Name</th>
        <td>:</td>
        <td>${books[index].comments[0].name}</td>
        <td>${books[index].comments[0].comment}</td>
    </tr>          
  `;
}
