let myDate = new Date()
// console.log(myDate.toJSON()) // Tue Jan 01
// console.log(myDate.toLocaleDateString()) // Tue Jan 01
// console.log(myDate.toDateString()) // Tue Jan 01
// console.log(myDate.toISOString()) // Tue Jan 01
// console.log(myDate.toString()) // Tue Jan 01
// console.log(myDate.toTimeString()) // Tue Jan 01
let NewDate =Date.now()
console.log(Math.floor(Date.now()/1000))
console.log(NewDate.toLocaleString('default',{ Weekday : 	 'long',
    // hour: 'numeric',
    // minute:'numeric',
    // second:'numeric'
}))




