let okList =document.querySelector(".okList");
let noList =document.querySelector(".noList");

let list =document.querySelector(".list");

let particles =document.querySelector("#particles-js");

let nav =document.querySelector("nav");

let liS=[...list.children] 

let icons=document.querySelector(".icons")

let icon=document.querySelector(".icon")

let icS=[...icon.children]




icS.forEach((ic,inx)=>{
    if(inx!=5){
        ic.addEventListener("click",()=>{
            icS.forEach((ic,inx)=>{
                if(inx!=5){
                    ic.children[0].classList.remove("blue")
                    ic.children[0].classList.remove("white")
                }
            })
            ic.children[0].classList.add("white")
        })
    }
})

okList.onclick=()=>{
    okList.style.opacity='0'
    setTimeout(()=>{
        nav.style.top="15px"
        list.style.display="block"
        okList.style.display='none'
        noList.style.display="flex"
        noList.style.opacity="1"
    },500)
}

noList.onclick=()=>{
    noList.style.opacity='0'
    setTimeout(()=>{
        nav.style.top="-350px"
        noList.style.display='none'
        okList.style.display="flex"
        okList.style.opacity="1"
        setTimeout(()=>{
            list.style.display="none"
        },500)
    },500)
}

window.onresize=()=>{
    if (particles.scrollWidth>800){
        nav.style.top="15px"
        list.style.display="flex"
        okList.style.display="none"
        okList.style.opacity="0"
        noList.style.display="none"
        noList.style.opacity="0"
        icons.style.display="none"
    }
    else{
        nav.style.top="-350px"
        list.style.display="none"
        okList.style.display="flex"
        okList.style.opacity="1"
        noList.style.display="none"
        noList.style.opacity="0"
        okList.style.top="350px"
        icons.style.display="flex"
    }
}
window.onload=()=>{
    if (particles.scrollWidth>800){
        nav.style.top="15px"
        list.style.display="flex"
        okList.style.display="none"
        okList.style.top="0px"
        okList.style.opacity="0"
        noList.style.display="none"
        noList.style.opacity="0"
        icons.style.display="none"
    }
    else{
        nav.style.top="-350px"
        list.style.display="none"
        okList.style.display="flex"
        okList.style.top="350px"
        okList.style.opacity="1"
        noList.style.display="none"
        noList.style.opacity="0"
        icons.style.display="flex"
    }
}

liS.forEach((li)=>{
    li.onclick=()=>{
        liS.forEach((li)=>{
            li.classList.remove("active")
        })
        if (particles.scrollWidth<800){
            nav.style.top="-350px"
            list.style.display="none"
            okList.style.display="flex"
            okList.style.opacity="1"
            noList.style.display="none"
            noList.style.opacity="0"
        }
        li.classList.add("active")
    }
})

window.onscroll=()=>{
    if (window.scrollY<740){
        list.style.background="rgba(153, 153, 153, 0.27)"
        if(!particles.scrollWidth>800){
            nav.style.display="block"
        }
    }
    else{
        list.style.background="rgba(153, 153, 153, 0.77)"
        if(!particles.scrollWidth>800){
            nav.style.display="none"
        }
    }
}

let shape = document.querySelector(".shape")

function moveShape(bares){
    shape.style.left=`${bares}px`
}





// auto typed
if(document.querySelector(".auto-type")){
    let typed=new Typed(".auto-type",{
        strings :["Im a SoftWare Engineer","Im a Front-end Programmer"],
        typeSpeed:150,
        backSpeed:150,
        loop:true,
    })
}




// forms 
let inputs=document.querySelectorAll(".input")


let submit=document.querySelector(".submit")


submit.onclick=()=>{
    inputs.forEach((input)=>{
        setTimeout(()=>{
            input.value=''
        },1000)
    })
}

//data

let data=document.querySelector(".data")

let dat=new Date()
data.innerHTML=dat.getFullYear()

