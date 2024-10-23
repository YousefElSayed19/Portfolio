let datasOfCards=[
    {
        imgSrc:"../img/wepsite/project-1.png",
        title:"Cala Ecommerce",
        text:"Online store to buy clothes easily",
        url:"https://yousefelsayed19.github.io/Ecommerce-1/",
        },
    {
        imgSrc:"../img/wepsite/project-2.png",
        title:"Desserts",
        text:"Online store to buy sweets smoothly",
        url:"https://yousefelsayed19.github.io/Desserts/",
        },
    {
        imgSrc:"../img/wepsite/project-3.png",
        title:"Prayer-Times",
        text:"To know prayer times in all places",
        url:"https://yousefelsayed19.github.io/Prayer-Times/",
        },
    {
        imgSrc:"../img/wepsite/project-24.png",
        title:"Foddera",
        text:"Good food",
        url:"https://yousefelsayed19.github.io/foodra/",
        },
    {
        imgSrc:"../img/wepsite/project-4.png",
        title:"Cala Ecommerce",
        text:"To order food easily and quickly",
        url:"https://yousefelsayed19.github.io/Food-2/",
        },
    {
        imgSrc:"../img/wepsite/project-5.png",
        title:"Card Game",
        text:"Matching cards game",
        url:"https://yousefelsayed19.github.io/Game/",
        },
    {
        imgSrc:"../img/wepsite/project-6.png",
        title:"MarketWave",
        text:"Website for e-marketing",
        url:"https://yousefelsayed19.github.io/MarketWave/",
        },
    {
        imgSrc:"../img/wepsite/project-7.png",
        title:"Book Store",
        text:"Online bookstore website",
        url:"https://yousefelsayed19.github.io/Book-Store/",
        },
    {
        imgSrc:"../img/wepsite/project-8.png",
        title:"Easy Bank",
        text:"To facilitate banking transactions",
        url:"https://yousefelsayed19.github.io/EazyBank/",
        },
    {
        imgSrc:"../img/wepsite/project-9.png",
        title:"To DO List",
        text:"To record daily tasks",
        url:"https://yousefelsayed19.github.io/To-Do-List/",
        },
    {
        imgSrc:"../img/wepsite/project-10.png",
        title:"Cruds",
        text:"To manage warehouses and products",
        url:"https://yousefelsayed19.github.io/CRUDS/",
        },
    {
        imgSrc:"../img/wepsite/project-11.png",
        title:"Bakery",
        text:"For sale bread and baked goods",
        url:"https://yousefelsayed19.github.io/Bakery/",
        },
    {
        imgSrc:"../img/wepsite/project-12.png",
        title:"X-O Game",
        text:"Paper beats stone and stone beats scissors!",
        url:"https://yousefelsayed19.github.io/X-O-Game/",
        },
    {
        imgSrc:"../img/wepsite/project-13.png",
        title:"Application",
        text:"To facilitate banking transactions",
        url:"https://yousefelsayed19.github.io/Application/",
        },
    {
        imgSrc:"../img/wepsite/project-14.png",
        title:"Weather App",
        text:"To know the weather conditions",
        url:"https://yousefelsayed19.github.io/Weather/",
        },
    {
        imgSrc:"../img/wepsite/project-15.png",
        title:"Calculator",
        text:"To do some math",
        url:"https://yousefelsayed19.github.io/Calculator/",
        },
    {
        imgSrc:"../img/wepsite/project-16.png",
        title:"Store Electronic Game",
        text:"Electronic products store",
        url:"https://yousefelsayed19.github.io/Story-1/",
        },
    {
        imgSrc:"../img/wepsite/project-17.png",
        title:"Food",
        text:"Food store",
        url:"https://yousefelsayed19.github.io/Food-1/",
        },
    {
        imgSrc:"../img/wepsite/project-18.png",
        title:"Three Page",
        text:"Awesome Three Page",
        url:"https://yousefelsayed19.github.io/three-page/",
        },
    {
        imgSrc:"../img/wepsite/project-19.png",
        title:"Bondi",
        text:"Taste the Creativity",
        url:"https://yousefelsayed19.github.io/Bondi/",
        },
    {
        imgSrc:"../img/wepsite/project-20.png",
        title:"DashBoard",
        text:"Simple DashBoard",
        url:"https://yousefelsayed19.github.io/DashBoard/",
        },
    {
        imgSrc:"../img/wepsite/project-21.png",
        title:"Cookies",
        text:"Simple Short Description",
        url:"https://yousefelsayed19.github.io/Cookies/",
        },
    {
        imgSrc:"../img/wepsite/project-22.png",
        title:"Kasper",
        text:"We Are Kasper We Make Art.",
        url:"https://yousefelsayed19.github.io/Kasper/",
        },
    {
        imgSrc:"../img/wepsite/project-23.png",
        title:"loan",
        text:"We are Leon - Super Creative",
        url:"https://yousefelsayed19.github.io/Leon/",
        },
    ]

if (document.querySelector(".cardsInProjects")){
    let cardsInProjects=document.querySelector(".cardsInProjects")
    datasOfCards.forEach((dataOfCards)=>{
        cardsInProjects.innerHTML +=
        `
            <div class="cord">
                <div class="img">
                    <img src=${dataOfCards.imgSrc} class="card-img-top" alt="..." width="100%">
                </div>
                <div class="card-body p-3">
                    <h5 class="card-title mb-2">${dataOfCards.title}</h5>
                    <p class="card-text">${dataOfCards.text}</p>
                    <a  href=${dataOfCards.url} class="btn mainBg" target="_blank">Dimo</a>
                </div>
            </div> 
        `
    })
}
