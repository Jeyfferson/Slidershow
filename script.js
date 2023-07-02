'use strict';

const images = [ //json
   { id: '1', 'url': './img/1.jpg'},
   { id: '2', 'url': './img/2.jpg'},
   { id: '3', 'url': './img/3.jpg'},
   { id: '4', 'url': './img/4.jpg'},
   { id: '5', 'url': './img/5.jpeg'},
   { id: '6', 'url': './img/6.jpg'},
   { id: '7', 'url': './img/7.jpg'},
   { id: '8', 'url': './img/8.jpg'}
]



const containerItems = document.querySelector('#container-items')


const loadImages = (images, container) => {

   images.forEach( image => {
      container.innerHTML += `
      <div class='item'>
         <img src='${image.url}'
      </div>
      `
   })
}

loadImages( images, containerItems )

let items = document.querySelectorAll('.item'); //Ela vai ser variavel, pegar todos os items --Lista--

const previous = () => {
   containerItems.appendChild(items[0])    //appendChild, sempre adiciona no final, ou seja pega o primeiro item e envia pro final
   items = document.querySelectorAll('.item'); //atualiza a lista novamente
}

const next = () => {
   const lastItem = items[items.length - 1];
   containerItems.insertBefore( lastItem, items[0])   //Insere antes
   items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)