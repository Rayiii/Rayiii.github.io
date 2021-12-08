/* let myHeading = document.querySelector('h1');
myHeading.textContent = '胡桃是我老婆！'; */

document.querySelector('html').onclick = function() {
    alert('吃好喝好，一路走好！');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/胡桃.jpg') {
      myImage.setAttribute('src', 'images/物述有栖-圣诞.jpg');
    } else {
      myImage.setAttribute('src', 'images/胡桃.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = '你是胡桃的狗吗？' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '胡桃yyds' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }