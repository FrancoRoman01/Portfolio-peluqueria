// local reviews data
const reviews = [
    {
      id: 1,
      name: "Cambio de Look",
      img:
        "./img/cambio-de-look.jpg",
      text:
        "Presiona aquí para ver este trabajo",
        link: "https://www.instagram.com/p/CaVMdNwpsku/",
    },
    {
      id: 2,
      name: "Color",
      img:
        "./img/color.jpg",
        text:
        "Presiona aquí para ver este trabajo",
        link: "https://www.instagram.com/p/CaVMdNwpsku/",
    },
    {
      id: 3,
      name: "Color y mechas",
      img:
        "./img/color-mechas.jpg",
        text:
        "Presiona aquí para ver este trabajo",
        link: "https://www.instagram.com/p/BtE5KYeFU9m/",
    },
    {
      id: 4,
      name: "Iluminación",
      img:
        "./img/iluminacion.jpg",
        text:
        "Presiona aquí para ver este trabajo",
        link: "https://www.instagram.com/p/CNFRKHvFsgR//",
      },
  ];

  // select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const links = document.getElementById("link");

const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const randomBtn = document.getElementById('random')

// set starting item
let currentItem = 0;

window.addEventListener('DOMContentLoaded',()=>{
    const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
    info.href = item.link
})

const cargarElementos = ()=>{
    const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
    info.href = item.link
}

// show next person

nextBtn.addEventListener('click',(e)=>{
e.preventDefault();
currentItem++
if(currentItem > reviews.length - 1){
    currentItem = 0
}
cargarElementos()
})

// show prev person

prevBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    currentItem--
    if(currentItem < 0){
        currentItem = 3
    }
    cargarElementos()
    })