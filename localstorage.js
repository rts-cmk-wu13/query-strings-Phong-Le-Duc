let favorites = readFromLocalStorage("favorites") || []
/**
 *
 * @typedef {string | number | boolean | object | any[]} localstorageData to be saved in localstorage
 */

/**
 * save an item to localstorage
 * @param {string} key key to be used in localstorage
 * @param {string | number | boolean | object | any[]} value  - value to be saved
 * @returns {string}
 */
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
    return "Data was saved with the key " + key
}


/**
 * 
 * @param {string} key key to be readfrom localstorage
 * @returns {string | number | boolean | object | any[]}
 */
function readFromLocalStorage(key) {
return JSON.parse(localStorage.getItem(key))

}


/**
 * 
 * @param {string} key 
 * @returns {string | number | boolean | object | any[]}
 */
function deleteFromLocalStorage(key) {
localStorage.removeItem(key)
return "the element with key " + key + " was deleted."

}





