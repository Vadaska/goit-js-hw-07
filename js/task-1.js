const categoriesNumbers = document.querySelectorAll('#categories li.item');
console.log('Number of categories:', categoriesNumbers.length);
categoriesNumbers.forEach(item => {
  const titleElement = item.querySelector('h2');
  const titleText = titleElement.textContent;

  const categoryElements = item.querySelectorAll('li');
  const elementsCount = categoryElements.length;
  console.log('Category:', titleText);
  console.log('Elements:', elementsCount);
});
