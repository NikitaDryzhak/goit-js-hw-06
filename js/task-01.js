
// 1.

document.querySelector('#categories');
const numberOfCategories = categories.children.length;
console.log('Number of categories:', numberOfCategories);


// 2.
const elementItem = document.querySelectorAll('.item');
elementItem.forEach(element => {
    const elementTitle = element.querySelector('h2');
    const elementLi = element.querySelectorAll('li');
    console.log(`Category: ${elementTitle.textContent }`)
    console.log(`Elements: ${elementLi.length}`)
    }

)


