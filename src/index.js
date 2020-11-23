import {createStore} from"redux"
//createStore은 나의 데이터를 넣는 곳 

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const number  = document.querySelector("span")

const PLUS = "plus"
const MINUS = "minus"

number.innerText = 0
const reducerModify = (count = 0, action ) =>{
  //actiond은 reducerModify와 소통하는 방식
  console.log(count, action)
  switch(action.type){
    case PLUS : return count + 1
    case MINUS : return count - 1
    default : return count
  }
  //무수한 if / else보다는 switch가 더 클린한 코드
/*   if(action.type === "plus"){
     return count + 1
  }else if(action.type === "minus"){
    return count - 1
  }
  return count */
}
//여기서 reducer을 data를 수정하는 기능을 한다
//이경우엔 increase 하거나 decrease를 하는것 


const counstStore =  createStore(reducerModify)
//counstStore.dispatch({type:"add"})
//reducerModify에 메세지를 보낼때, dispatch 사용
//dispatch()<action>은 object여야한다 
//action은 type을 가지고 있어야 한다


const onChange = () => {
  number.innerText = counstStore.getState()
}

counstStore.subscribe(onChange)
//subscribe는 counstStore 에 반응(변화가 있을때) 실행됨


plus.addEventListener("click", () => {counstStore.dispatch({type : PLUS })})
minus.addEventListener("click", () => {counstStore.dispatch({type:MINUS})})
