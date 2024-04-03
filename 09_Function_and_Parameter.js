    // function addtwoNumber(a, b) {
    //     console.log(a + b )
    //     }
    //     addtwoNumber(2,"78");
        

    // function addtwoNumber(a, b) {
    //     let result = a + b;
    //     return result;
    //     }
    //     const result = addtwoNumber(2,5)
    // console.log(result) 

    function isloggined(userName = "sameer"){
        if(userName === undefined){  
            console.log("pleaser enter User Name") 
        }else{  return`${userName} is this login`
    }}
      

    let result = isloggined()
    // console.log(result)

    function calculatCardObject(...Object){
        return  Object

    }
    // console.log(calculatCardObject(1,2,3,4,5,6,7,8))

    let userK = {
        name : "samerr",
        age : 23
    }

    function handlefunction(AnyObject){
    //    console.log( `${AnyObject.name} is my name and my age is ${AnyObject.age}`)
    }

 handlefunction(userK);



 let MyArray = [2,4,5,6]

  function  checkarrayElement(arr) {
    return arr[2];
  }

  console.log(checkarrayElement(MyArray));
