//1- Add two integers
 add=(x,y)=>{
    return x+y
}
let x=1,y=1
console.log(add(x,y))


//2- Concatinate 2 arrays and sort the array
function concatArray(array1, array2){
    let result=array1.concat(array2)
    return result.sort()
}
let array1=[1,2,4]
let array2=[3,5]
console.log(concatArray(array1, array2))


//3- Sort the array and return the min and second max value
function newArray(array){
    let sortedArray=array.sort()
    let newArray=[sortedArray[0],sortedArray[array.length-2]]
    return newArray
}

let array=[2,4,6,1,5]
console.log(newArray(array))


//4- Replace every uppercase letters in a string into lowercase
replaceToLC=(string)=>{
    return string.toLowerCase()
}
let string="ApPle"
console.log(replaceToLC(string))


//5- Remove duplicated from a sorted array
function removeDuplicate(array){
   let result=[...new Set(array)]
   return result
}
let arr=[1,2,3,3,3,4,5,5]
console.log(removeDuplicate(arr))




//part Two

const toDoItems=document.getElementsByClassName("to-do-items")[0]
const input=document.getElementById("input")
const trashIcon=document.getElementById("trash")

input.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        addItem()
    }    
})
function addItem(){
    
    let divParent=document.createElement("div")//div for the input item
    let divChild=document.createElement("div")//div for the trash icon
    let trashIcon=document.createElement("i")
    
    divParent.className="item"
    divParent.innerHTML="<div>"+input.value+"</div>"

    trashIcon.className="fa-solid fa-trash"
    trashIcon.addEventListener("click",function(){
        divParent.remove()
    })
    divChild.appendChild(trashIcon)
    divParent.appendChild(divChild)


    toDoItems.appendChild(divParent);
    input.value=""

}








// let input=document.querySelector("#input")
// input.addEventListener("click",newElement())



// let noDolist=document.querySelectorAll("li")
// let i
// for( i of noDolist){
//     let span=document.createElement("SPAN")
//     let txt = document.createTextNode("\u00D7")
//     span.className = "close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }
// let close=document.getElementsByClassName("close")

// for( i of close){
//     close[i].onclick=function(){
//         let div=this.parentElement;
//         div.style.display="none"
//     }
// }

// function newElement(){
//     let li=document.createElement("li")
//     let inputValue=document.getElementById("input").value
//     let t=document.createTextNode(inputValue)
//     li.appendChild(t)
//     if(inputValue===""){
//         alert("please write something.")
//     }
//     else{
//         document.getElementsByClassName("tasks").appendChild(li)
//     }
//     document.getElementById("input").value=""
//     let span = document.createElement("SPAN")
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
//     for(i of close){
//         close[i].onclick=function(){
//             let div=this.parentElement;
//             div.style.display="none"
//         }
//     }

// }



// // const input=document.querySelector("input")
// // input.addEventListener("click",newElement())

