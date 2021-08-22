
'use strict' ;

function rand (min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((Math.random() * (max - min + 1) + min)*1) ;
}

if (localStorage.getItem('article') === null)
{
  localStorage.setItem('article',JSON.stringify([])) ;
}
const section = document.getElementById('print') ;

let arr = JSON.parse(localStorage.getItem('article')) ;

function Article(authors , title , content , subject , id , like , date)
{
  this.name = authors ;
  this.title = title ;
  this.content = content ;
  this.subject = subject ;
  this.id = id ;
  this.like = like ;
  this.date = date ;
  arr.push(this) ;
}
let date = new Date();

let id = arr.length ;

let like = 0 ;

let num = document.getElementById('num') ;
num.textContent = id ;

document.addEventListener('submit',sub) ;
document.addEventListener('reset',clear) ;

print();

/// SUBMIT
function sub(event) {
  event.preventDefault() ;

  let id = arr.length + 1 ;

  num.textContent = id ;
  like = rand(0,500) ;
  new Article(event.target.name.value , event.target.title.value , event.target.content.value , event.target.subject.value , id , like , date) ;

  localStorage.setItem('article' , JSON.stringify(arr)) ;

  let a = JSON.parse(localStorage.getItem('article')) ;
  console.log(a) ;

  let div = document.createElement('div') ;
  section.appendChild(div) ;

  let name = document.createElement('li') ;
  name.textContent = 'Author Name : ' + event.target.name.value ;

  let title = document.createElement('li') ;
  title.textContent = 'Title : ' + event.target.title.value ;

  let content = document.createElement('li') ;
  content.textContent = 'Content : ' + event.target.content.value ;

  let subject = document.createElement('li') ;
  subject.textContent = 'Subject : ' + event.target.subject.value ;

  let li = document.createElement('li') ;
  li.textContent = like + ' Likes' ;

  let li2 = document.createElement('li') ;
  li2.textContent = 'ID : ' + id ;

  let hr = document.createElement('hr') ;

  let pic = document.createElement('img') ;
  pic.src = './img/face.png' ;
  pic.width = '200' ;
  pic.height = '200' ;
  
  let dat = document.createElement('li') ;
  dat.textContent = 'Date : ' + date ;

  div.appendChild(name) ;
  div.appendChild(title) ;
  div.appendChild(content) ;
  div.appendChild(subject) ;
  div.appendChild(li) ;
  div.appendChild(li2) ;
  div.appendChild(pic) ;
  div.appendChild(dat) ;
  div.appendChild(hr) ;
}
function print()
{

  for (let i = 0 ; i < arr.length ; i++)
  {

    let div = document.createElement('div') ;
    section.appendChild(div) ;

    let name = document.createElement('li') ;
    name.textContent = 'Author Name : ' + arr[i].name ;

    let title = document.createElement('li') ;
    title.textContent = 'Title : ' + arr[i].title ;

    let content = document.createElement('li') ;
    content.textContent = 'Content : ' + arr[i].content ;

    let subject = document.createElement('li') ;
    subject.textContent = 'Subject : ' + arr[i].subject ;

    let li = document.createElement('li') ;
    li.textContent = arr[i].like + ' Likes' ;

    let li2 = document.createElement('li') ;
    li2.textContent = 'ID : ' + arr[i].id ;

    let dat = document.createElement('li') ;
    dat.textContent = 'Date : ' + arr[i].date ;

    let hr = document.createElement('hr') ;

    let pic = document.createElement('img') ;
    pic.src = './img/face.png' ;
    pic.width = '200' ;
    pic.height = '200' ;
    div.appendChild(name) ;
    div.appendChild(title) ;
    div.appendChild(content) ;
    div.appendChild(subject) ;
    div.appendChild(li) ;
    div.appendChild(li2) ;
    div.appendChild(pic) ;
    div.appendChild(dat) ;
    div.appendChild(hr) ;
  }
}
function clear(_event){

  localStorage.removeItem('article');
  section.removeChild(section.lastChild);
  arr.length-- ;
  num.textContent = arr.length ;
  location.reload() ;

}
