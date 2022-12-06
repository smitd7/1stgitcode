// 1]const posts=[

//   { title: 'post one',body:'this is post one '},

//   { title: 'post two',body:'this is post two '},

//  ];



//  function getposts(){

//   setTimeout(()=>{

//     let output='';

//     posts.forEach((post,index)=>{

//       output+=`<li>${post.title}</li>`;

//     });

//     document.body.innerHTML=output;

//   },1000);

//  }  

// function createpost(post){

//   return new Promise((resolve,reject)=>{

//   setTimeout(()=> {

//    posts.push(post);

//    const error=false;

//    if(!error){

//     resolve();

//    }else {

//     reject('error:something went wrong')

//    }

//   },2000);

//  });

// }

// createpost({title:'post three',body:'this is post three'}).then(getposts);

//2,3]
// const posts=[
//     { title: 'post one',body:'this is post one '},
//     { title: 'post two',body:'this is post two '},
//   ];

//   function getposts(){
//     setTimeout(()=>{
//         let output='';
//         posts.forEach((post,index)=>{
//             output+=`<li>${post.title}</li>`;
//         });
//         document.body.innerHTML=output;
//     },1000);
//   }
//   function createpost(post){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       posts.push({...post,createdAt: new Date().getTime()});
//       const error=false;
//       if(!error){
//         resolve();
//       }else{
//         reject('error:something went wrong')
//       }
//     },2000);
//   });
// }
  
// function deletepost(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=> {
//         if(posts.length>0){
//             const lastelement=posts.pop()
//             resolve(lastelement);

//         }else{
//             reject('array is empty now')
//         }
//       },1000);
//   });
// }
// createpost({title:'post three',body:'this is post three'}).then(()=>{
//     getposts()
//     deletepost().then((deletedelement)=>{
//         console.log(deletedelement)
//         getposts();
//         deletepost().then(()=>{
//             getposts();
//             deletepost().then(()=>{
//                 getposts()
//                 deletepost().then(()=>{})
//                 .catch((err)=>{
//                     console.log('inside catch block',err)
//                 })

//             }).catch((err)=>{})
//         }).catch((err)=>{})

//     })
        
// })
// .catch(err=>console.log(err))


//promise.all answers
//1]

// const posts=[

//     { title: 'post one',body:'this is post one '},

//     { title: 'post two',body:'this is post two '},

//   ];



//   function getposts(){

//     setTimeout(()=>{

//         let output='';

//         posts.forEach((post,index)=>{

//             output+=`<li>${post.title}</li>`;

//         });

//         document.body.innerHTML=output;

//     },1000);

//   }     

// function createpost(post){

//     return new Promise((resolve,reject)=>{

//     setTimeout(()=> {

//       posts.push(post);

//       const error=false;

//       if(!error){

//         resolve();

//       }else {

//         reject('error:something went wrong')

//       }

//     },2000);

//   });

// }

//createpost({title:'post three',body:'this is post three'}).then(getposts);

//promise.all
// const promise1=Promise.resolve('hello world');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>
// setTimeout(resolve,2000,'good bye')
// );
// Promise.all([promise1,promise2,promise3]).then(values=> console.log(values));

//2,3]

const posts=[

  { title: 'post one',body:'this is post one '},

  { title: 'post two',body:'this is post two '},

];



function getposts(){

  setTimeout(()=>{

      let output='';

      posts.forEach((post,index)=>{

          output+=`<li>${post.title}</li>`;

      });

      document.body.innerHTML=output;

  },1000);

}     

function createpost(post){

  return new Promise((resolve,reject)=>{

  setTimeout(()=> {

    posts.push(post);

    const error=false;

    if(!error){

      resolve();

    }else {

      reject('error:something went wrong')

    }

  },1000);

});

}
const user={
  username:'sumit'
  updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        user.LastActivityTime=new Date().getTime();
        resolve(user.LastActivityTime)
      },1000)
    })
  }
}

createpost({title:'post three',body:'this is post three'}).then(getposts);

//promise.all
const promise1=Promise.resolve('hello world');
const promise2=10;
const promise3=new Promise((resolve,reject)=>
setTimeout(resolve,2000,'good bye')
);
Promise.all([promise1,promise2,promise3]).then(values=> console.log(values));

//4]
//promise.all why we need?
// if we have promise1,promise2,promise3 and we have to run all of them together the we can use promise.all to run it faster than before.


//fav interview qstn ans
//in callbacks aync operations are complex to hadndle and require more time to execute also in multiple callbacks it becomes hard to read the code effectively
//hence to avoid the callback hell situation and to run async operations fast and in readable manner promises are used and it provides better executin speed than callbacks

  
