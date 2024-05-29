let form =document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    console.log(height);
    const weight = parseInt(document.querySelector('#weight').value)
    console.log(weight);

const result = document.querySelector('#results')
if(height === '' || isNaN(height)){
    result.innerHTML = `Please give a valid Height ${height}`
    console.log(result);
    if(height === '' || isNaN(height) || height <0)
    result.innerHTML = `Please give a valid Height ${height}`
    console.log(result);
} else if (weight === '' || isNaN(height) || height <0){
result.innerHTML = `Please give a valid weight ${weight}`
console.log(result);}
else {
   let BMI = (weight / ((height * height)/10000)).toFixed(2)
   result.innerHTML = `this is Your caluate BMI ${BMI}`
}








    
})
setInterval(function(){
    let date = new Date().toLocaleTimeString()
    console.log(date)
},1000);
