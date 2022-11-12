//parentElement
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundcolor='yellow'
console.log(itemlist.parentElement.parentElement.parentElement);

//firstchild
console.log(itemlist.firstchild);
//firstelementchild
console.log(itemlist.firstelementchild);
itemlist.firstelementchild.textcontent='hello 1';

//lastchild
console.log(itemlist.lastchild);
//lastelementchild
console.log(itemlist.lastelementchild);
itemlist.lastelementchild.textcontent='hello 2';

//nextsibling
console.log(itemlist.nextsibling);

//nextelementsibling
console.log(itemlist.nextelementsibling);

//previoussibling
console.log(itemlist.previoussibling);

//previouselementsibling
console.log(itemlist.previouselementsibling);
itemlist.previouselementsibling.style.color='green';

//createlement
var newdiv=document.createElement('div');
//add attr
newdiv.setAttribute('title','hello div');
//createtextnode
var newdivtext=document.createTextNode('hello world');






