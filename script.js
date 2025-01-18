





function primeOrNot(n){
    if(n==1){
        return false
    }
    if(n==2){
        return true
    }
    if(n==3){
        return true
    }
    for(let i=2;i<n-1;i++){
        if(n%i==0){
            return false
        }
    }
    return true
}




// const inputNum=document.querySelector('.inputNum')
// const btn=document.querySelector('.btn')
// const result=document.getElementById('result')



// inputNum.addEventListener('input',(e)=>{
//   const value=e.target.value
//   const num=parseInt(value)

//   if(isNaN(num)){
//     result.innerText="please enter a valid number"
//     return
//   }


//   if (primeOrNot(num)){
//     result.innerHTML=`${num} is prime`
//   }else{
//     result.innerHTML=`${num}is not a prime`
//   }
// })





const inputNum = document.querySelector('.inputNum');
const btn = document.querySelector('.btn');
const result = document.getElementById('result');
const main=document.querySelector('.containerMain')


btn.addEventListener('click', () => {
    const value = inputNum.value; 
    const num = parseInt(value); 

   
    if (isNaN(num)) {
        result.textContent = "Please enter a valid number."; 
        btn.classList.add('nothing')
        result.style.visibility='visible'
        result.classList.remove('blink')
        result.classList.remove('red')
        return;
    }

   
    if (primeOrNot(num)) {
        result.textContent = `${num} is a prime number.`;
        result.classList.add('blink')
        result.classList.remove('red')
        result.style.visibility='visible'
       
      
    } else {
        result.textContent = `${num} is not a prime number.`; 
        result.classList.add('red')
        result.classList.remove('blink')
        result.style.visibility='visible'
    }

    
});







