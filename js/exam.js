
'use strict' ;

function rand (min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((Math.random() * (max - min + 1) + min)*1) ;
}

//    butOne.style.display = 'none' ;

if (localStorage.getItem('article') === null)
{
  localStorage.setItem('article',JSON.stringify([])) ;
}
//a.style.display = 'hidden' ;
let section = document.getElementById('print') ;

section.removeChild(section.childNodes[2]);


let arr = JSON.parse(localStorage.getItem('article')) ;

function Article(authors , title , content , subject , id , like)
{
  this.name = authors ;
  this.title = title ;
  this.content = content ;
  this.subject = subject ;
  this.id = id ;
  this.like = like ;
  arr.push(this) ;
}
let id = arr.length ;

let like = 0 ;
//Article.arr = [] ;
let num = document.getElementById('num') ;
num.textContent = id ;
/*for (let i = 0 ; i < authors.length ; i++)
{
  new Constr(authors[i] , title[i] , content[i] , subject[i] , id , like) ;
}*/
document.addEventListener('submit',sub) ;
print();
function sub(event) {
  event.preventDefault() ;
  /*  for (let i = 0 ; i < authors.length ; i++)
  {
    new Constr(event.target.name.value[i] , event.target.title.value[i] , event.target.content.value[i] , event.target.subject.value[i] , id[i] , like[i]) ;
  }*/

  //  console.log(Constr.arr[0]) ;
  let id = arr.length + 1 ;

  num.textContent = id ;
  like = rand(0,500) ;
  new Article(event.target.name.value , event.target.title.value , event.target.content.value , event.target.subject.value , id , like ) ;

  localStorage.setItem('article' , JSON.stringify(arr)) ;
  //  console.log(Article.arr) ;
  //print ();
  let a = JSON.parse(localStorage.getItem('article')) ;
  console.log(a) ;


  ///////////////////////////////////////

  let section = document.getElementById('print') ;
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
  div.appendChild(name) ;
  div.appendChild(title) ;
  div.appendChild(content) ;
  div.appendChild(subject) ;
  div.appendChild(li) ;
  div.appendChild(li2) ;
  div.appendChild(pic) ;
  div.appendChild(hr) ;


  ////////////////////////////////////////




  /*
  let num = document.getElementById('num') ;
  num.textContent = id ;

  let section = document.getElementById('print') ;
  let div = document.createElement('div') ;
  section.appendChild(div) ;

  let name = document.createElement('li') ;
  name.textContent = 'Author Name : ' + event.target.name.value ;

  let title = document.createElement('li') ;
  title.textContent = 'Title : ' + event.target.title.value ;

  let subject = document.createElement('li') ;
  subject.textContent = 'Subject : ' + event.target.subject.value ;

  let content = document.createElement('li') ;
  content.textContent = 'Content : ' + event.target.content.value ;

  let li = document.createElement('li') ;
  content.textContent = like ;

  let li2 = document.createElement('li') ;
  content.textContent = 'Article Number : ' + id ;

 // let pic = document.createElement('img') ;
 // pic.src = './img/face.png' ;
 // pic.width = '200' ;
  //pic.height = '200' ;
  div.appendChild(name) ;
  div.appendChild(title) ;
  div.appendChild(subject) ;
  div.appendChild(content) ;
 // div.appendChild(pic) ;
  div.appendChild(li) ;
  div.appendChild(li2) ;
*/

  /*console.log('arthor name : '+event.target.name.value
. . .``..
. +'TITLE :' + event.target.title.value + 'subject : ' + event.target.subject.value );
  console.log(event.target.content.value) ;
*/
}





/**/
function print()
{
  //for (let i = 0 ; i < Article.arr.length ; i++)
  //{
  for (let i = 0 ; i < arr.length ; i++)
  {
    
    let section = document.getElementById('print') ;
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
    div.appendChild(hr) ;
  }
}

/* for(let i = 0 ; i < authors.length ; i++)
  {
    let section = document.getElementById('print') ;
    let div = document.createElement('div') ;
    section.appendChild(div) ;

    let name = document.createElement('li') ;
    name.textContent = 'Author Name : ' + constr.arr[i].name ;

    let title = document.createElement('li') ;
    title.textContent = 'Title : ' + constr.arr[i].titles ;

    let content = document.createElement('li') ;
    content.textContent = 'Content : ' + constr.arr[i].contents ;

    let subject = document.createElement('li') ;
    subject.textContent = 'Subject : ' + constr.arr[i].subjects ;

    let pic = document.createElement('img') ;
    pic.src = './img/face.png' ;
    pic.width = '200' ;
    pic.height = '200' ;
    div.appendChild(name) ;
    div.appendChild(title) ;
    div.appendChild(content) ;
    div.appendChild(subject) ;
    div.appendChild(pic) ;
  }*/
//return neww ;
//}




/*
function randNum (min,max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((Math.random() * (max - min + 1) + min)*1) ;
}
*/









