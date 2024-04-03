let array
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        // console.log(" 5 is greater number")
    }
    // console.log(element); 
    
}

for (let i = 2; i < 10; i++) {
    // console.log(`Table of ${i}`);
    for (let j = 1; j <10; j++) {
        // console.table(`${i} '*' ${j} '=' ${i * j}`);
        
    }
    
}

for (let i = 1; i < 30; i++) {
   
    if(i == 5){

        console.log(i + " is the middle element");
   continue

    }
    console.log(`Element at index ${i}`);
 
    
}