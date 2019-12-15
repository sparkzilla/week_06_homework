document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  //FORM
    const formElement = document.querySelector('#new-item-form');
    const handleFormSubmit = function(event){
      event.preventDefault();

      const newPlace = document.createElement('li');
      newPlace.textContent = `${event.target.sight.value} ${event.target.city.value} ${event.target.status.value}`;
      newPlace.classList.add('list');
      const list = document.querySelector('#places-list')
      list.appendChild(newPlace);

      document.getElementById('new-item-form').reset();
    }

    formElement.addEventListener('submit', handleFormSubmit);

    const buttonElement = document.querySelector('#delete-button');
    const handleButtonClick = function() {
    const list = document.querySelector('#places-list');
    list.innerHTML  = '';
    }

    buttonElement.addEventListener('click', handleButtonClick);

})
