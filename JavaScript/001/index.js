// listener
document.getElementById("myForm").addEventListener('submit',saveBookmarkApp);
function saveBookmarkApp(e){
// get values
    let site = document.getElementById('siteName').value;
    let link = document.getElementById('link').value;
    // array of objects
    let bookmark = {
        name : site,
        url : link,
    }
    // save in the local strorage
    // localStorage.setItem('test','hello')
    // console.log(localStorage.getItem('test'))
    // localStorage.removeItem('test','hello')
    // console.log(localStorage.getItem('test'))
    // console.log(bookmark);
    e.preventDefault();
console.log("its working");

    if(localStorage.getItem('bookmark')==null)
    {
        var bookmarks = [];
        bookmarks.push(bookmark)
        // set to localstorage
        // localStorage.setItem('bookmarks',bookmarks) // it is a json array we need to save in a string //o/p [object object]
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks)) // we need to save in a string
        
    }
    else{
        // get bookmark from local storage
        // json.parse return string into json
        let book = JSON.parse(localStorage.getItem('bookmarks'))
    }

}