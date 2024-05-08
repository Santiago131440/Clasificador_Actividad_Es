const categoryList = document.getElementById('category-list');
const addItemButton = document.getElementById('add-item');
const searchInput = document.getElementById('search-bar');
const topList = document.getElementById('top-list');

// Sample data
const categories = [];
const items = [];
const topItems = [];

// Function to add a category
function addCategory() {
  const categoryName = prompt('Ingrese el nombre de la categoría:');
  if (categoryName) {
    categories.push(categoryName);
    updateCategoryList();
  }
}

// Function to update the category list
function updateCategoryList() {
  categoryList.innerHTML = '';
  categories.forEach(category => {
    const li = document.createElement('li');
    li.textContent = category;
    categoryList.appendChild(li);
  });
}

// Function to add an item
function addItem() {
  const itemName = prompt('Ingrese el nombre del ítem:');
  if (itemName) {
    const category = prompt('Ingrese la categoría del ítem:');
    const code = prompt('Ingrese el código del ítem:');
    items.push({ name: itemName, category, code });
    updateItemList();
    addTopItem(itemName);
  }
}

// Function to update the item list
function updateItemList() {
  const itemList = document.getElementById('item-list');
  itemList.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.category} - ${item.code}`;
    itemList.appendChild(li);
  });
}

// Function to add an item to the top list
function addTopItem(itemName) {
  if (topItems.length >= 5) {
    topItems.shift();
  }
  topItems.push(itemName);
  updateTopList();
}

// Function to update the top list
function updateTopList() {
  topList.innerHTML = '';
  topItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    topList.appendChild(li);
  });
}

// Search items by code
function searchItems() {
  const query = searchInput.value;
  const filteredItems = items.filter(item => item.code === query);
  updateSearchResults(filteredItems);
}

// Function to update search results
function updateSearchResults(results) {
  const itemList = document.getElementById('item-list');
  itemList.innerHTML = '';
  results.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.category} - ${item.code}`;
    itemList.appendChild(li);
  });
}

document.getElementById('add-category').addEventListener('click', addCategory);
addItemButton.addEventListener('click', addItem);
searchInput.addEventListener('input', searchItems);

updateCategoryList();
updateItemList();
