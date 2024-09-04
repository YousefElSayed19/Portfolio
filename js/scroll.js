
let about =document.querySelector(".About")

let tutorials =document.querySelector(".Tutorials")

let home =document.querySelector(".Home")

let projects =document.querySelector(".Projects")

let contact =document.querySelector(".Contact")

let AboutIc =document.querySelector(".AboutIc")

let TutorialsIc =document.querySelector(".TutorialsIc")

let HomeIc =document.querySelector(".HomeIc")

let ProjectsIc =document.querySelector(".ProjectsIc")

let ContactIc =document.querySelector(".ContactIc")

function removeColor(){
    icS.forEach((ic,inx)=>{
        if(inx!=5){
            ic.children[0].classList.remove("blue")
            ic.children[0].classList.remove("white")
        }
    })
}

window.addEventListener("scroll",()=>{

    if (window.scrollY<720){
        liS.forEach((li)=>{
            li.classList.remove("active")
        })
        home.classList.add("active")
        moveShape(120)
        removeColor()
        HomeIc.classList.add("white")
    }
    else if  (window.scrollY>720 && window.scrollY<2245) {
        liS.forEach((li)=>{
            li.classList.remove("active")
        })
        about.classList.add("active")
        moveShape(-27)
        removeColor()
        AboutIc.classList.add("white")
    }
    else if  (window.scrollY>2245 && window.scrollY<3500){
        liS.forEach((li)=>{
            li.classList.remove("active")
        })
        tutorials.classList.add("active")
        moveShape(195)
        removeColor()
        TutorialsIc.classList.add("white")
    }
    else if  (window.scrollY>3500 && window.scrollY<4300){
        liS.forEach((li)=>{
            li.classList.remove("active")
        })
        projects.classList.add("active")
        moveShape(50)
        removeColor()
        ProjectsIc.classList.add("white")
    }
    else if  (window.scrollY>3500){
        liS.forEach((li)=>{
            li.classList.remove("active")
        })
        contact.classList.add("active")
        moveShape(275)
        removeColor()
        ContactIc.classList.add("white")
    }
})
