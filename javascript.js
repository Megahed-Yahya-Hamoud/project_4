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

//=========================== (fetch data) ======================

async function fetchData(){
    try{
        let myData=document.querySelector(".myDiv")

        fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
        return result.json()
    }).then((data)=>{
    for (let index = 0; index < data.length; index++) {
        myData.append(data[index].name+" | ");
    }
})
    }catch (Error){
        console.log(error);
    }
}
fetchData()

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