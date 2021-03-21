const colors  = ['#00c4ff','#7fffd4','#dc143c','#8a2be2','#ff8c00'];

let btn = document.getElementById('btn');
let color = document.querySelector('.color');

btn.addEventListener('click',()=>{
   let randomly = randomNumbers ();
   document.body.style.backgroundColor = colors[randomly];
   color.textContent=colors[randomly]
})

function randomNumbers (){
   return Math.floor(Math.random()*colors.length)
}