const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextBox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');

let numberBoton = 1;

const addEntryToDom = (event) => {
  event.preventDefault();

  let entryDiv = document.createElement('div');
  let displayEntryButton = document.createElement('button');

  entryDiv.className = 'single-entry';
  entryDiv.innerText = entryTextBox.value;
  entryDiv.style.display = 'none';

  displayEntryButton.className = 'display-entry-button';
  displayEntryButton.innerText = numberBoton;
  entriesNav.appendChild(displayEntryButton);

  displayEntryButton.addEventListener('click', function () {
    const allEntries = document.querySelectorAll('.single-entry');

    for (let i = 0; i < allEntries.length; i++) {
      allEntries[i].style.display = 'none';
    }
    entryDiv.style.display = 'block';
  });

  numberBoton++;
  entryTextBox.value = '';
  entriesSection.appendChild(entryDiv);
};

entryForm.addEventListener('submit', addEntryToDom);
