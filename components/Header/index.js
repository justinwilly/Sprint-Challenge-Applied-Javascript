// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //create nodes
    const header = document.createElement('div'),
          dateSpan = document.createElement('span'),
          h1 = document.createElement('h1'),
          tempSpan = document.createElement('span');

    //add css
    header.className = "header";
    dateSpan.className = "date";
    tempSpan.className = "temp";

    //add content
    h1.textContent = "Lambda Times";
    tempSpan.textContent = '98\u00B0';

    //date for date span
    const currentDate = new Date();
    let layout = currentDate.toString().split(' ').slice(1,4);
    dateSpan.textContent = `${layout[0]} ${layout[1]} ${layout[2]}`;

    //build component
    header.append( dateSpan, h1, tempSpan);

    return header;
}

window.addEventListener('load', e => {
    document.querySelector('div.header-container').append(Header());
})
