document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

  })

  //FORM

  const handleFormSubmit = function (event) {
    event.preventDefault();

    const readingListItem = createReadingListItem(event.target);
    const readingList = document.querySelector('#places-list');
    readingList.appendChild(readingListItem);

    event.target.reset();

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

    const handleDeleteAllClick = function (event) {
      const readingList = document.querySelector('#places-list');
      readingList.innerHTML = '';
    }
