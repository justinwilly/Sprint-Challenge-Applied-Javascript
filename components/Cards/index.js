// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
function makeCard(data){
    
    //make nodes
    const Card = document.createElement('div'),
          Card_Header = document.createElement('div'),
          Card_Author = document.createElement('div'),
          Card_ImgCtnr = document.createElement('div'),
          Card_Img = document.createElement('img'),
          Card_Credit = document.createElement('span');

    
    //add classes
    Card.className = "card";
    Card_Header.className = "headline";
    Card_Author.className = "author";
    Card_ImgCtnr.className = "img-container";

    //add content
    Card_Header.textContent = data.headline;
    Card_Img.src = data.authorPhoto;
    Card_Credit.textContent = data.authorName;

    
    //build card
    Card_ImgCtnr.append(Card_Img);
    Card_Author.append(Card_ImgCtnr, Card_Credit);
    Card.append(Card_Header, Card_Author);
    
    return Card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(result => result.data.articles)
    .then(articles => {
        const cardsDiv = document.querySelector('div.cards-container');

        Object.values(articles).forEach(subject => {
            subject.forEach(articleData => {
                cardsDiv.append(makeCard(articleData))
            })
        })           
    })
    
    .catch(error => console.log(error));