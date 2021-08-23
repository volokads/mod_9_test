//All Imports

import photoArray from '../db/photo.js'
import createItemByString from './createItemByString.js'
//All acceses

const list = document.getElementById('photoList')
console.log(list);

// All listeners


//All functions


console.log(photoArray);
const result = photoArray.map((photoObject)=>{
    console.log(photoObject);
    //Деструктуризація об'єкта перед викликом функції для створення розмітки
    const { title, image, description, category, seria, author: { name, contry, city } } = photoObject
    
    // Виклик функції створення розмітки
    const item = createItemByString(title, image, description, category, seria, name, contry, city )
    console.log(item)
    return item
})

const addResult = result.join('')

list.insertAdjacentHTML('beforeend', addResult)
