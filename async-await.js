//basic code below
// console.log('person 1:shows tikt');
// console.log('person 2:shows tikt');

// const promisewifebringstkt=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('tkt')
//     },3000)
// })
// const getpopcorn=promisewifebringstkt.then((t)=>{
//     console.log('husband:we should go in')
//     console.log('wifr:im hungry')
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
// })
// const getbutter=getpopcorn.then((t)=>{
//     console.log('husband:i got some popcorn')
//     console.log('husband:we should go in')
//     console.log('wifr:i need butter')
//     return new Promise((resolve,reject)=>resolve(`${t} butter`))
// })
// getbutter.then((t)=>console.log(t))
// console.log('person 4:shows tikt');
// console.log('person 5:shows tikt');

//1]
// console.log('person 1:shows tikt');
// console.log('person 2:shows tikt');
// const premovie=async()=>{
//     const wifrbringstkt=new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('tkt'),3000)
//     })
//     const getpopcorn=new Promise ((resolve,reject)=>resolve(`popcorn`))
//     const addbutter=new Promise ((resolve,reject)=>resolve(`butter`))
//     let tkt=await wifrbringstkt

//     console.log('wife:i have tkts')
//     console.log('husband:we should go in')
//     console.log('wifr:im hungry')

//     let popcorn=await getpopcorn

//     console.log('husband:i got some popcorn')
//     console.log('husband:we should go in')
//     console.log('wifr:i need butter')

//     let butter=await addbutter

//     console.log('husband:i got some butter')
//     console.log('husband:anything else')
//     console.log('wife:lets go')
    
//     return tkt
// }
// premovie().then(()=>console.log(`person 3: shows tkt`))
// console.log('person 4:shows tikt');
// console.log('person 5:shows tikt');


//2]
// console.log('person 1:shows tikt');
// console.log('person 2:shows tikt');
// const premovie=async()=>{
//     const wifrbringstkt=new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('tkt'),3000)
//     })
//     const getpopcorn=new Promise ((resolve,reject)=>resolve(`popcorn`))
//     const addbutter=new Promise ((resolve,reject)=>resolve(`butter`))
//     const addcoldrink=new Promise ((resolve,reject)=>resolve(`coke`))

//     let tkt=await wifrbringstkt

//     console.log('wife:i have tkts')
//     console.log('husband:we should go in')
//     console.log('wifr:im hungry')

//     let popcorn=await getpopcorn

//     console.log('husband:i got some popcorn')
//     console.log('husband:we should go in')
//     console.log('wifr:i need butter')

//     let butter=await addbutter

//     console.log('husband:i got some butter')
//     console.log('husband:anything else')
//     console.log('wife:need coke')

//     let getcoldrink=await addcoldrink
//     console.log('husband:i got some coke')
//     console.log('husband:anything else')
//     console.log('wife:no, lets go ')
    
//     return tkt
// }
// premovie().then(()=>console.log(`person 3: shows tkt`))
// console.log('person 4:shows tikt');
// console.log('person 5:shows tikt');


//3]using promise.all

// console.log('person 1:shows tikt');
// console.log('person 2:shows tikt');
// const premovie=async()=>{
//     const wifebringstkt=new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('tkt'),3000)
//     })
//     const getpopcorn=new Promise ((resolve,reject)=>resolve(`popcorn`))
//     const addbutter=new Promise ((resolve,reject)=>resolve(`butter`))
//     const addcoldrink=new Promise ((resolve,reject)=>resolve(`coke`))
    
//     let tkt=await wifebringstkt
//     let[popcorn,butter,coke]=await Promise.all([getpopcorn,addbutter,addcoldrink])

//     console.log(`popcorn,butter,coke`)
    
//     return tkt
// }
// premovie().then(()=>console.log(`person 3: shows tkt`))
// console.log('person 4:shows tikt');
// console.log('person 5:shows tikt');


//interviw qstn ans

//in callbacks aync operations are complex to hadndle and require more time to execute also in multiple callbacks it becomes hard to read the code effectively
//hence to avoid the callback hell situation and to run async operations fast and in readable manner promises are used and it provides better executin speed than callbacks
//async await executes the promises made after certain amount of time and it awaits the promiseses to be fulfilled before execution
//using async and await results in more concise and easier to reason about code. Async and await allows you to wrap your code using a try and catch to handle errors. This can make it easier to manage errors compared to promise  