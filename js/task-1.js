const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('.item');
console.log(categoryItems.length);

categoryItems.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    console.log(categoryName);
    const itemsInCategory = category.querySelectorAll('li');
    console.log(itemsInCategory.length);
});