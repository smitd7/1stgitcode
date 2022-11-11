var header=document.querySelector('#main-header');
header.getElementsByClassName.borderBottom='solid 4px #ccc'

var input=document.querySelector('input');
input.value='hello world'

var submit=document.querySelector('input[type="submit"]');
submit.value="SEND"

var item=document.querySelector('.list-group-item');
item.style.color='red';

var lastitem=document.querySelector
('.list-group-item:last-child');
lastitem.style.color='blue';

var secondItem=document.querySelector
('.list-group-item:nth-chils(2)');
secondItem.style.color='green';

//querySelectorall

var odd=document.querySelectorAll('li:nth-child(odd)');
for (var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}