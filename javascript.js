// ============= (active for item in nav-bar) ==============
let my=document.querySelectorAll("ul li a")

my.forEach(function(ele) {
    ele.onclick=function(){
        my.forEach(function (ele){
            ele.classList.remove("active")
        });
        ele.classList.add("active")
    };
});


// ====================== ( action on button) =========================

let myBtn=document.querySelector("#bt")

myBtn.addEventListener("click" , ()=>{
    window.scrollTo({
        top:0 ,
        behavior:"smooth"
    })
})

// =================== ( javaScript Search) ================


// ================== (clone Node) =====================

let myFP=document.querySelector(".my-F-P").cloneNode(true)
let myFDiv=document.querySelector(".my-F-Div")

myFDiv.appendChild(myFP)

// ============= (Rest parameters) ========================

function arrOfString(...name) {
    for(let i=0 ;i<name.length ;i++)
        console.log(name[i]);
}
console.log(arrOfString("ali" , "adel" , "mage" ));

function arr(...num) {
    return num ;
}
console.log(arr(1,2,3,4,5 ,"..." ));

// ==================(json some data)=====================

let object='[{"name":"ali" , "age":20 , "salary":2000} ,{"name":"mega" , "age":22 , "salary":6000} ,{"name":"adel" , "age":25 , "salary":1000}]'

let nameJs=JSON.parse(object)

for(let i=0 ;i<nameJs.length ;i++){
console.log(nameJs[i].name);
}


// ===================================================================

async function fetchData(){
    try{
    fetch("https://fakestoreapi.com/products").then((result)=>{
        return result.json()
    }).then((data)=>{      
    for (let index = 0; index < 12; index++) {
    const mySet=`
    <div class="col">
    <div class="data p-3">
    <div class="text-center">
    <img src="${data[index].image} " class="" height="150px" width="150px">
    </div>
    <p class="mt-3"><b>id</b> :<span class="text-danger"> ${data[index].id}</span> </p>
    <p><b>title</b> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit, imilique 
    </p>
    <p><b>price</b> : <span class="text-danger"> ${data[index].price}</span> </p>
    <p><b>description </b>: 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio impedit, imilique 
    </p>
    <p><b>category </b> : ${data[index].category} </p>
    </div>
    <div>
    <br> 
    `
    document.querySelector(".fetch-data").insertAdjacentHTML("beforeend", mySet)
    }
})
    }catch (Error){
        console.log(Error);
    }
}
fetchData()
