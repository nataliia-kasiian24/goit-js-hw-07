const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    console.log(`Category: ${categoryName}`);
    const itemsInCategory = category.querySelectorAll('li');
    console.log(`Elements: ${itemsInCategory.length}`);
});