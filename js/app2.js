document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleFormSubmit);

  })

  //FORM

  const handleFormSubmit = function (event) {
    event.preventDefault();

    const readingListItem = createReadingListItem(event.target);
    const readingList = document.querySelector('#places-list');
    readingList.appendChild(readingListItem);

  }

    const createReadingListItem = function (form) {
      const readingListItem = document.createElement('li');

      const sight = document.createElement('h2');
      sight.textContent = form.sight.value;
      readingListItem.appendChild(sight);

      const city = document.createElement('h3');
      city.textContent = form.city.value;
      readingListItem.appendChild(city);

      const status = document.createElement('p');
      status.textContent = form.status.value;
      readingListItem.appendChild(status);

      return readingListItem;

    }









// //BUTTON
//     const buttonElement = document.querySelector('#delete-all');
//     const handleButtonClick = function() {
//     const list = document.querySelector('#places-list');
//     list.innerHTML  = '';
//     }
//
//     buttonElement.addEventListener('click', handleButtonClick);



//${event.target.city.value} ${event.target.status.value}`;
//newPlace.classList.add('list');
