

























///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

'use strict' ;

if (localStorage.getItem('book') === null)
{
  localStorage.setItem('book' , JSON.stringify([])) ;
}
let arr = JSON.parse(localStorage.getItem('book')) ;

function rand (min,max){
  min = Math.ceil(min) ;
  max = Math.floor(max) ;
  return Math.floor((Math.random() * (max - min + 1 ) + min) * 1) ;
}
let price = 0 ;

function Book(name , pages , category , price){
  this.name = name ;
  this.pages = pages ;
  this.category = category ;
  this.price = price ;
  arr.push(this) ;
}
////////////// Standar Table Header
let table = document.getElementById('table') ;
let tr = document.createElement('tr') ;
table.appendChild(tr) ;

let th = document.createElement('th') ;
th.textContent = 'Book Name' ;
tr.appendChild(th) ;

let th1 = document.createElement('th') ;
th1.textContent = 'Number Of Pages' ;
tr.appendChild(th1) ;

let th2 = document.createElement('th') ;
th2.textContent = 'Price' ;
tr.appendChild(th2) ;

let th3 = document.createElement('th') ;
th3.textContent = 'Category' ;
tr.appendChild(th3) ;
let th4 = document.createElement('th') ;
th4.textContent = 'Remove' ;
tr.appendChild(th4) ;
///////////////////////////////////////////////
/////////////////////////////// EVENT LISTENER
document.addEventListener('submit' , sub) ;
function sub(event){

  event.preventDefault();
  price = rand(3,8) ;

  new Book(event.target.name.value , event.target.page.value , event.target.category.value , price) ;
  localStorage.setItem('book',JSON.stringify(arr)) ;
  ////////////////////////////// Print Same Time
  let tr1 = document.createElement('tr') ;
  table.appendChild(tr1) ;
  let name = document.createElement('td') ;
  name.textContent = event.target.name.value ;
  tr1.appendChild(name) ;
  let page = document.createElement('td') ;
  page.textContent = event.target.page.value ;
  tr1.appendChild(page) ;
  let pric = document.createElement('td') ;
  pric.textContent = price ;
  tr1.appendChild(pric) ;
  let category  = document.createElement('td') ;
  category.textContent = event.target.category.value ;
  tr1.appendChild(category) ;
  /////////////////////////////////////////////////
}
///////////////////////////////////////////////////
////////////// print
show();
function show(){
  let ar = JSON.parse(localStorage.getItem('book')) ;
  for (let i = 0 ; i < ar.length ; i++)
  {
    let tr1 = document.createElement('tr') ;
    table.appendChild(tr1) ;
    let name = document.createElement('td') ;
    name.textContent = ar[i].name ;
    tr1.appendChild(name) ;
    let page = document.createElement('td') ;
    page.textContent = ar[i].pages ;
    tr1.appendChild(page) ;
    let pric = document.createElement('td') ;
    pric.textContent = ar[i].price ;
    tr1.appendChild(pric) ;
    let category  = document.createElement('td') ;
    category.textContent = ar[i].category ;
    tr1.appendChild(category) ;
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('reset',clear) ;
function clear(eve){

  localStorage.removeItem('book');
  location.reload() ;

}
