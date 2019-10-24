// setTimeout(()=>{
//     console.log('Hello world')
// },2000)

// const geocode = (address,callback)=>{
//     setTimeout(() => {
//         const data = {
//             latitue: 0,
//             longtitue: 0
//         }

//         callback(data)
//     }, 2000);
// }

// geocode('VietNam',(data)=>{
//     console.log(data)
// })

const add = (number1,number2,callback)=>{
    setTimeout(() => {
       callback(number1 + number2)
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})