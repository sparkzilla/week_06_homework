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

      return readingListItem;

    }


      //
      // const newCity = document.createElement('h3');
      // const city = document.querySelector('li')
      // newCity.textContent = `${event.target.city.value}`;
      // city.appendChild(newCity);
      //
      // const newStatus = document.createElement('p');
      // const status = document.querySelector('li')
      // newStatus.textContent = `${event.target.status.value}`;
      // status.appendChild(newStatus);


//      document.getElementById('new-item-form').reset();









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
