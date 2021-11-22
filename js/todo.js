'use strict' ;

if(localStorage.getItem('task') === null)
{
  localStorage.setItem('task' , JSON.stringify([])) ;
}
let arr = JSON.parse(localStorage.getItem('task')) ;




function ToDo(task , date , urgency)
{
  this.task = task ;
  this.date = date ;
  this.urgency = urgency ;

  arr.push(this) ;
}



//////////////////////////////////////
let table = document.getElementById('table') ;
let tr = document.createElement('tr') ;
table.appendChild(tr) ;
let th = document.createElement('th') ;
th.textContent = 'Task' ;
tr.appendChild(th) ;
let th1 = document.createElement('th') ;
th1.textContent = 'Date' ;
tr.appendChild(th1) ;
let th2 = document.createElement('th') ;
th2.textContent = 'Percentage' ;
tr.appendChild(th2) ;
////////////////////////////////////////// SUBMIT
document.addEventListener('submit' , submit) ;
function submit(happen)
{
  happen.preventDefault() ;
  new ToDo (happen.target.task.value , happen.target.date.value , happen.target.urgency.value) ;
  localStorage.setItem('task' , JSON.stringify(arr)) ;
  ////////////////////////
  let tr1 = document.createElement('tr') ;
  table.appendChild(tr1) ;

  let task = document.createElement('td') ;
  task.textContent = happen.target.task.value ;
  tr1.appendChild(task) ;
  let date = document.createElement('td') ;
  date.textContent = happen.target.date.value ;
  tr1.appendChild(date) ;
  let urgency = document.createElement('td') ;
  urgency.textContent = happen.target.urgency.value ;
  tr1.appendChild(urgency) ;
}
//////////////////////////////////////////////
show() ;
function show()
{
  let arr = JSON.parse(localStorage.getItem('task')) ;

  for(let i = 0 ; i < arr.length ; i++)
  {
    let tr1 = document.createElement('tr') ;
    table.appendChild(tr1) ;

    let task = document.createElement('td') ;
    task.textContent = arr[i].task ;
    tr1.appendChild(task) ;
    let date = document.createElement('td') ;
    date.textContent = arr[i].date ;
    tr1.appendChild(date) ;
    let urgency = document.createElement('td') ;
    urgency.textContent = arr[i].urgency ;
    tr1.appendChild(urgency) ;
  }
}
document.addEventListener('reset' , clear) ;
function clear(event){
//console.log('hi') ;
  localStorage.removeItem('task') ;
  location.reload() ;
}







































