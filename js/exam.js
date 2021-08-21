
'use strict' ;

function rand (min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((Math.random() * (max - min + 1) + min)*1) ;
}
let authors = [] ;
let title = [] ;
let content = [] ;
let subject = [] ;
let id = 0 ;
let like = 0 ; rand(0,500) ;

function Constr(authors , title , content , subject , id , like)
{
  this.name = authors ;
  this.title = title ;
  this.content = content ;
  this.subject = subject ;
  this.id = id ;
  this.like = like ;
  Constr.arr.push(this) ;
}
Constr.arr = [] ;

/*for (let i = 0 ; i < authors.length ; i++)
{
  new Constr(authors[i] , title[i] , content[i] , subject[i] , id , like) ;
}*/
document.addEventListener('submit',sub) ;
function sub(event) {
  event.preventDefault() ;
  /*  for (let i = 0 ; i < authors.length ; i++)
  {
    new Constr(event.target.name.value[i] , event.target.title.value[i] , event.target.content.value[i] , event.target.subject.value[i] , id[i] , like[i]) ;
  }*/
  //  console.log(Constr.arr[0]) ;
  id++ ;
  like = rand(0,500) ;
  let neww = new Constr(event.target.name.value , event.target.title.value , event.target.content.value , event.target.subject.value , id , like ) ;

  console.log(neww) ;
  /*console.log('arthor name : '+event.target.name.value
. . .``..
. +'TITLE :' + event.target.title.value + 'subject : ' + event.target.subject.value );
  console.log(event.target.content.value) ;
*/
}

function print ()
{
  /*
let authors = ['a1','a2','a3'] ;
let title = ['t1','t2','t3'] ;
let content = ['c1','c2','c3'] ;
let subject = ['s1','s2','s3'] ;
let id = rand(0 , authors.length -1 ) ;
let like = rand(0,500) ;
    */
/*  for(let i = 0 ; i < authors.length ; i++)
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
}

print ();












/*
function randNum (min,max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((Math.random() * (max - min + 1) + min)*1) ;
}
*/

