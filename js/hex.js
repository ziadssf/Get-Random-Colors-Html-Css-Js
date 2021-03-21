const hex = [0,2,4,5,9,6,8,3,1,7,"B","D","F","A","E","C"]

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',()=>{
   let hexColor = "#";
   for(let i = 0; i < 6; i++){
      hexColor+= hex[rendomNambers()]
   }
   color.textContent=hexColor;
   document.body.style.backgroundColor=hexColor
})

function rendomNambers(){
   return Math.floor(Math.random()*hex.length)
}