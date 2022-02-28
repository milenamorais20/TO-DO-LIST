let task =  document.getElementById('task');
let enter = document.getElementById('enter');
let myList = document.getElementById('myList');

 let addTask = function(){
     if (task.value !=""){

         let id = idGenerator()
         myList.innerHTML += `
         <li id="${id}">${task.value}
         <button onClick="done('${id}')">ok</button>
         <button onClick="del('${id}')">del</button>
         </li>`
        task.value = '';
        localStorage.setItem('saveList', myList.innerHTML);
    }
 }

 let done = function(id){
    document.getElementById(id).classList.toggle('done');
    localStorage.setItem('saveList', myList.innerHTML);
 }
 let del = function(id){
    document.getElementById(id).remove();
    localStorage.setItem('saveList', myList.innerHTML);
 }
 let delAll = function(){
    localStorage.clear();
    myList.innerHTML = "";
 }
onload = function (){
    myList.innerHTML = localStorage.getItem('saveList');
 }
 let idGenerator = function(){
    return Date.now().toString(16)+Math.random().toString(16).substring(2);
 }
