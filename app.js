var elements = [];
var input = document.querySelector("input");

window.onload= function (){
    if(JSON.parse(localStorage.getItem("elements")) != null){
        elements=JSON.parse(localStorage.getItem("elements"));
        console.log(elements);
    
    display();
    
    } 
}
