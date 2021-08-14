'use strict' ;

let srcimg = [
  'Agatha Christie.jpg',
  'Alexander McCall Smith.jpg',
  'alice hoffman.jpg',
  'Margaret.jpg',
  'Stephen King.jpg'
] ;
let book = [
  'The Murder of roger ackroyd.Murder at the vicarage'
  , 'Morality For Beautiful Girl.The Miracle at Speedy Motors'
  , 'Practical Magic.The world That We Knew'
  , 'The Handmaids Tale.The Testaments'
  , 'IT.Misery'
] ;
let puplish = [
  '2006.2006'
  , '2002.2008'
  , '2003.2019'
  , '1985.2019'
  , '1987.1988'
] ;

const picOne = document.getElementById('picOne') ;
const picTwo = document.getElementById('picTwo') ;
const picThree = document.getElementById('picThree') ;
const picFour = document.getElementById('picFour') ;
const picFive = document.getElementById('picFive') ;

const pOne = document.getElementById('author1') ;
const pTwo = document.getElementById('author2') ;
const pThree = document.getElementById('author3') ;
const pFour = document.getElementById('author4') ;
const pFive = document.getElementById('author5') ;

let one = 0 ;
let two = 1 ;
let three = 2 ;
let four = 3 ;
let five = 4 ;

// Random Number For Choosing Random Image :
do
{
  one = randNum( 0 , srcimg.length -1 ) ;
  two = randNum( 0 , srcimg.length -1 ) ;
  three = randNum( 0 , srcimg.length -1 ) ;
  four = randNum( 0 , srcimg.length -1 ) ;
  five = randNum( 0 , srcimg.length -1 ) ;
} while (one === two || one === three || two === three ||
  one === four || one === five || four === five || five === three
|| two === four || three === four || two === five) ;

function author (name , picSrc , book , puplish )
{
  this.name = name ;
  this.pic = picSrc ;
  this.publish = puplish ;
  this.books = book ;
  author.arr.push(this) ;
}

author.arr = [] ;

for (let i = 0 ; i < srcimg.length ; i++ )
{
  new author (srcimg[i].split('.')[0] , srcimg[i] , book[i] , puplish[i] );
}

option() ;
print() ;

//////////////////
const butOne = document.getElementById('but1') ;
const butTwo = document.getElementById('but2') ;
const butThree = document.getElementById('but3') ;
const butFour = document.getElementById('but4') ;
const butFive = document.getElementById('but5') ;
const optionButton = document.getElementById('buttonOption') ;

butOne.addEventListener('click' , click) ;
butTwo.addEventListener('click' , click) ;
butThree.addEventListener('click' , click) ;
butFour.addEventListener('click' , click) ;
butFive.addEventListener('click' , click) ;
optionButton.addEventListener('click' , clickOption) ;

///////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Functions :

// Function Search Button :
function clickOption(even)
{
  even.preventDefault() ;
  let name = document.getElementById('name') ;
  let picB = document.getElementById('picB') ;
  let info = document.getElementById('info') ;
  let sel = document.getElementById('soption').value ;
  name.textContent = sel ;
  picB.src = ('/imgAuthor/' + sel + '.jpg') ;
  picB.width = '700' ;
  picB.height = '600' ;

  let ol1 = document.createElement('h2') ;
  let li = document.createElement('h2') ;
  let ol2 = document.createElement('h2') ;
  let li2 = document.createElement('h2') ;

  for (let i = 0 ; i < srcimg.length ; i++ )
  {
    if (sel === srcimg[i].split('.')[0])
    {
      ol1.textContent = 'Book 1. ( ' + book[i].split('.')[0] + ' )' ;
      info.appendChild(ol1) ;
      li.textContent = 'Published in : ' + puplish[i].split('.')[0] ;
      info.appendChild(li) ;
      ol2.textContent = 'Book 2. ( ' + book[i].split('.')[1] + ' )';
      info.appendChild(ol2) ;
      li2.textContent = 'Published in : ' + puplish[i].split('.')[1] ;
      info.appendChild(li2) ;
    } }
}
// Function Random Number :
function randNum (min,max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((Math.random() * (max - min + 1) + min)*1) ;
}
// Function Print Image Randomly :
function print()
{
  picOne.src = ('/imgAuthor/' + author.arr[one].pic) ;
  pOne.textContent = author.arr[one].name ;

  picTwo.src = ('/imgAuthor/' + author.arr[two].pic) ;
  pTwo.textContent = author.arr[two].name ;

  picThree.src = ('/imgAuthor/' + author.arr[three].pic) ;
  pThree.textContent = author.arr[three].name ;

  picFour.src = ('/imgAuthor/' + author.arr[four].pic) ;
  pFour.textContent = author.arr[four].name ;

  picFive.src = ('/imgAuthor/' + author.arr[five].pic) ;
  pFive.textContent = author.arr[five].name ;
}
// Function options Fill The Author Name In option :
function option()
{
  let optio = document.getElementById('soption') ;
  for (let i = 0 ; i < srcimg.length ; i++)
  {
    let op = document.createElement('option') ;
    op.textContent = author.arr[i].name ;
    optio.appendChild(op) ;
  }
}
// Function Clicks On Button 'READ MORE...' :
function click(event)
{
  event.preventDefault() ;
  let butp1 = document.getElementById('butp1') ;
  let butp2 = document.getElementById('butp2') ;
  let butp3 = document.getElementById('butp3') ;
  let butp4 = document.getElementById('butp4') ;
  let butp5 = document.getElementById('butp5') ;

  if (event.target.id === 'but1')
  {
    let li = document.createElement('li') ;
    li.textContent = 'Book 1. ( ' + book[one].split('.')[0] + ' )';
    butp1.appendChild(li) ;
    let li2 = document.createElement('li') ;
    li2.textContent = 'Published in : ' + puplish[one].split('.')[0] ;
    butp1.appendChild(li2) ;
    let li3 = document.createElement('li') ;
    li3.textContent = 'Book 2. ( ' + book[one].split('.')[1] + ' )' ;
    butp1.appendChild(li3) ;
    let li4 = document.createElement('li') ;
    li4.textContent = 'Published in : ' + puplish[one].split('.')[1] ;
    butp1.appendChild(li4) ;
  } else if (event.target.id === 'but2')
  {
    let li = document.createElement('li') ;
    li.textContent = 'Book 1. ( ' + book[two].split('.')[0] + ' )' ;
    butp2.appendChild(li) ;
    let li2 = document.createElement('li') ;
    li2.textContent = 'Published in : ' + puplish[two].split('.')[0] ;
    butp2.appendChild(li2) ;
    let li3 = document.createElement('li') ;
    li3.textContent = 'Book 2. ( ' + book[two].split('.')[1] + ' )';
    butp2.appendChild(li3) ;
    let li4 = document.createElement('li') ;
    li4.textContent = 'Published in : ' + puplish[two].split('.')[1] ;
    butp2.appendChild(li4) ;
  } else if (event.target.id === 'but3')
  {
    let li = document.createElement('li') ;
    li.textContent = 'Book 1. ( ' + book[three].split('.')[0] + ' )' ;
    butp3.appendChild(li) ;
    let li2 = document.createElement('li') ;
    li2.textContent = 'Published in : ' + puplish[three].split('.')[0] ;
    butp3.appendChild(li2) ;
    let li3 = document.createElement('li') ;
    li3.textContent = 'Book 2. ( ' + book[three].split('.')[1] + ' )' ;
    butp3.appendChild(li3) ;
    let li4 = document.createElement('li') ;
    li4.textContent = 'Published in : ' + puplish[three].split('.')[1] ;
    butp3.appendChild(li4) ;
  } else if (event.target.id === 'but4')
  {
    let li = document.createElement('li') ;
    li.textContent = 'Book 1. ( ' + book[four].split('.')[0] + ' )' ;
    butp4.appendChild(li) ;
    let li2 = document.createElement('li') ;
    li2.textContent = 'Published in : ' + puplish[four].split('.')[0] ;
    butp4.appendChild(li2) ;
    let li3 = document.createElement('li') ;
    li3.textContent = 'Book 2. ( ' + book[four].split('.')[1] + ' )' ;
    butp4.appendChild(li3) ;
    let li4 = document.createElement('li') ;
    li4.textContent = 'Published in : ' + puplish[four].split('.')[1] ;
    butp4.appendChild(li4) ;
  } else if (event.target.id === 'but5')
  {
    let li = document.createElement('li') ;
    li.textContent = 'Book 1. ( ' + book[five].split('.')[0] + ' )' ;
    butp5.appendChild(li) ;
    let li2 = document.createElement('li') ;
    li2.textContent = 'Published in : ' + puplish[five].split('.')[0] ;
    butp5.appendChild(li2) ;
    let li3 = document.createElement('li') ;
    li3.textContent = 'Book 2. ( ' + book[five].split('.')[1] + ' )' ;
    butp5.appendChild(li3) ;
    let li4 = document.createElement('li') ;
    li4.textContent = 'Published in : ' + puplish[five].split('.')[1] ;
    butp5.appendChild(li4) ;
  }
}
