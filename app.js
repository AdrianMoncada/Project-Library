
var myLibrary = ["You Don't Know JS","Clean Code"];

function Book() {
  // the constructor...
}
            
function addBookToLibrary()
{
    // get value from the input text
    var inputText = document.getElementById('inputText').value;
    
    // append data to the array
    myLibrary.push(inputText);
    
    var showLibrary = "";
    
    for(i = 0; i < myLibrary.length; i++)
    {
      showLibrary += myLibrary[i] + "<br/>";
    }
    
    // display array data
    document.getElementById('pText').innerHTML = showLibrary;
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
} 

