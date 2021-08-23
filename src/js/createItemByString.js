export default function createItemByString(title, image, description, category, seria = '-', name, contry, city ){ 
        return `
        <li>
        <h3>${title}</h3>
        <img src="${image}" alt="${description}"/>
        <p>${description}</p>
        <p><span>${category}</span>: <span>${seria}</span></p>
        <div>
        <h4>Author:</h4>
        <p>${name}</p>
        <p><span>${contry}</span>  - <span>${city}</span> city</p>
        </div>
        </li>`
    }