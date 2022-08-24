
showmovie();
//*****************display form data in table******************/
function displayForm() {
    let obj = document.getElementById("formtab");
   obj.style.display == "none" ? obj.style.display = "block" : obj.style.display = "none";
   }
 
 //*******************increment the rating*********************/
 function increment(id) {
    let movie=localStorage.getItem("movie");
    movieObj= JSON.parse(movie);
    let rating=movieObj[id].rat;
    if(rating<5){
        let obj={
            Title:movieObj[id].Title,
            Img:movieObj[id].Img,
            rat:Number(rating)+1
        }
        movieObj.splice(id,1,obj)
        localStorage.setItem("movie",JSON.stringify(movieObj))
    
        showmovie();
    }
   
 }
 //*****************decrement the rating value*******************/
 function decrement(id) {
    let movie=localStorage.getItem("movie");
    movieObj= JSON.parse(movie);
    let rating=movieObj[id].rat;
    if(rating>0){
        let obj={
            Title:movieObj[id].Title,
            Img:movieObj[id].Img,
            rat:Number(rating)-1
        }
        movieObj.splice(id,1,obj)
        localStorage.setItem("movie",JSON.stringify(movieObj))
    
        showmovie();
    }
 }
 //*****************delete the item from the table***************/
 function deleteElement(id) {
    console.log(id);
    let movie=localStorage.getItem("movie");
    if(movie==null){
        movieObj=[];
    }
    else{
        movieObj= JSON.parse(movie);
    }
    movieObj.splice(id,1);
    localStorage.setItem("movie",JSON.stringify(movieObj)); 
    showmovie();
 }
 //**************add itmes into table*********************/
 function addItem() {
   let titledata = document.getElementById("title").value;
   let imagedata = document.getElementById("image").value;
   let ratingdata = document.getElementById("rating").value;
   let movie=localStorage.getItem("movie");
    if(movie==null){
        movieObj=[];
    }
    else{
        movieObj= JSON.parse(movie);
    }
    let obj={
        Title:titledata,
        Img:imagedata,
        rat:ratingdata
    }
    movieObj.push(obj);
    localStorage.setItem("movie",JSON.stringify(movieObj));
    showmovie();
    document.getElementById("title").value="";
    document.getElementById("image").value="";
    document.getElementById("rating").value="";
 }



 function showmovie(){
    let movie=localStorage.getItem("movie");
    if(movie==null){
        movieObj=[];
    }
    else{
        movieObj= JSON.parse(movie);
    }
    let html=` <tr>
    <th>Image</th>
    <th>Name</th>
    <th>Rating</th>
    <th>Update</th>
  </tr>`;
    movieObj.forEach(function(element,index){
        html +=`<tr id=${index}>
        <td>
          <img
            src='${element.Img}'  
          />
        </td>
        <td>${element.Title}</td>
        <td>
          <button onclick="increment(${index})" >
            👍
          </button>
          <span id="counter2">${element.rat}</span
          ><button onclick="decrement(${index})" >
            👎
          </button>
        </td>
        <td>
          <button  onclick="deleteElement(${index})" >
             <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>`
    });
    let mainobj = document.getElementById("tabledata");
    mainobj.innerHTML=html;
}
