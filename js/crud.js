
var bknm = document.getElementById('bookname');
var bkurl = document.getElementById('bookurl');
var tbody = document.getElementById('tbody');


// this if condition that give a way to the application to work
if(localStorage.getItem("cruddbsystem") == null){
alert("this is a book store welcome");
var books = [];
}else {
var books = JSON.parse(localStorage.getItem('cruddbsystem'));
display_reload();
console.log(books);
}
//   this function add books & it's url
function addbook(){
    var objectbook = 
        {
            nameofthebook : bknm.value,
            urlofthebook : bkurl.value
        };
        books.push(objectbook);
        localStorage.setItem("cruddbsystem", JSON.stringify(books));
        // console.log(books);
    displayitems();
    clr();
}
// this function that displays the inputs into the table
function displayitems(){
    for(var i = books.length-1 ; i < books.length ; i++){
     var str =  ` <tr>
                <th scope="row" class="fs-4">${i}</th>
                <td class="fs-4">${books[i].nameofthebook}</td>
                
                <td  class="fs-4 px-5"><button class="btn btn-outline-danger"><a id="visiting" onmouseleave="lft(${i})" onmouseover="vst(${i})" href="${books[i].urlofthebook}  ">Visit</a></button></td>
                <td  class="fs-4 px-5"><button class="btn btn-outline-danger" onclick="dlt(${i})">Delete</button></td>                
              </tr> `;
    }
    tbody.innerHTML += str ;
    // <td  class="fs-4"><a href="#">${books[i].urlofthebook}</a></td>
}

// this function that display the data in the table when reloading the page
function display_reload(){
// var books = JSON.parse(localStorage.getItem('cruddbsystem'));
  //console.log(JSON.parse(localStorage.getItem('item'))); 

     for(var i = 0 ; i < books.length ; i++){
        var str2 = `<tr>
        <th scope="row" class="fs-4">${i}</th>
        <td class="fs-4">${books[i].nameofthebook}</td>
        <td  class="fs-4 px-5"><button class="btn btn-outline-danger"><a id="visiting" onmouseleave="lft(${i})" onmouseover="vst(${i})" href="${books[i].urlofthebook}">Visit</a></button></td>
        <td  class="fs-4 px-5"><button class="btn btn-outline-danger" onclick="dlt(${i})">Delete</button></td>
        
      </tr>`;
      tbody.innerHTML += str2;
    //   <td  class="fs-4"><a href="#">${books[i].urlofthebook}</a><td>
     }

}
// the visiting website function
// var x = document.getElementById("visiting");
// x.addEventListener('mousemove', function(e){
//     x.setAttribute('href', JSON.parse(books[e].urlofthebook));
    
//     console.log(JSON.parse(books[e].urlofthebook));
// })

function vst(i){
    var x = document.getElementById('visiting');
    x.setAttribute('href', books[i].urlofthebook);
    console.log(x.getAttribute('href'));
    // console.log(JSON.parse(books[i].urlofthebook));

}
function lft(i){
    var x = document.getElementById('visiting');
    console.log(x.setAttribute('href', ""));
    // console.log(JSON.parse(books[i].urlofthebook));

}

// the delete function 
function dlt(i){
    books.splice(i, 1);
    localStorage.setItem("cruddbsystem", JSON.stringify(books));
    location.reload();
}

// this function clears the values in the input tags
function clr(){
    bknm.value = '';
    bkurl.value = '';
}