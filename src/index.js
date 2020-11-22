const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const number  = document.querySelector("span")

let counter = 0

number.innerText = counter;

const update = () =>{
  number.innerText = counter;
}

const handlePlus = ()=>{
  counter = counter + 1;
  update()
}

const handleMinus = ()=>{
  counter = counter - 1;
  update()
  
}



plus.addEventListener("click", handlePlus)
minus.addEventListener("click", handleMinus)
