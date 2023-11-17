const menu = document.querySelectorAll(".menu-item");
// MESSEAGES
const messageNoti = document.querySelector("#messages-notification")
const message = document.querySelector(".messages")
const messages = document.querySelectorAll(".message")
const messageSearch = document.querySelector("#message-search")
// theme custom
const theme = document.querySelector("#theme")
const themeModal = document.querySelector(".customize-theme")
// FONT SIZE
const fontSizes =document.querySelectorAll(".choose-size span")
const root = document.querySelector(':root');
// FOr background color
const colorPalette = document.querySelectorAll(".choose-color span")


// remove active class
const changeActive = ()=>{
    menu.forEach(item =>{
        item.classList.remove("active")
    })
}
menu.forEach(item =>{
    item.addEventListener("click" ,()=>{
        changeActive();
        item.classList.add("active")
        if(item.id!= "notification"){
            document.querySelector(".notification-pop").
            style.display = "none";
        }else{
            document.querySelector(".notification-pop").
            style.display = "block";
            document.querySelector("#notification .notification-count").style.display = "none";
        }
    })
})
const start=()=>{
    var data = messageSearch.value.toLowerCase();
    messages.forEach(user =>{
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(data) != -1){
            user.style.display = 'flex';
        }else{
            user.style.display = "none";
        }
    })
}

// Search
messageSearch.addEventListener("keyup", start)


// Messages 
messageNoti.addEventListener("click", ()=>{
    message.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNoti.querySelector(".notification-count").style.display = "none"
    setTimeout(() => {
        message.style.boxShadow = "none"
    }, 2000);
})



// Theme customization
const second=()=>{
        themeModal.style.display = "grid"
}

theme.addEventListener("click", second)

// CLLOSE THEME
const close=(e)=>{
    if(e.target.classList.contains("customize-theme")){
        themeModal.style.display = "none"
    }
}
themeModal.addEventListener("click", close)



// FONT SIZE
// active class from spans and fontsize for selectors
const removeSizeSelector=()=>{
    fontSizes.forEach(size=>{
        size.classList.remove("active")
    })
}
fontSizes.forEach(size=>{
    size.addEventListener("click", ()=>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle("active");
        if(size.classList.contains("font-size-1")){
            fontSize = '10px';
            root.style.setProperty("--sticky-top-left", '5.4rem');
            root.style.setProperty("--sticky-top-right", '5.4rem');
        }else if(size.classList.contains("font-size-2")){
            fontSize = "12px";
            root.style.setProperty("--sticky-top-left", '5.4rem');
            root.style.setProperty("--sticky-top-right", '-7rem');
        }else if(size.classList.contains("font-size-3")){
            fontSize = "14px"
            root.style.setProperty("--sticky-top-left", '-2rem');
            root.style.setProperty("--sticky-top-right", '-17rem');
        }else if(size.classList.contains("font-size-4")){
            fontSize = "16px"
            root.style.setProperty("--sticky-top-left", '-5rem');
            root.style.setProperty("--sticky-top-right", '-25rem');
        }else if(size.classList.contains("font-size-5")){
            fontSize = "18px"
            root.style.setProperty("--sticky-top-left", '-10rem');
            root.style.setProperty("--sticky-top-right", '-33rem');
        }
        document.querySelector("html").style.fontSize = fontSize;
    })
})

// remoce active class
const changeActivColor=()=>{
colorPalette.forEach(colorPicker=>{
    colorPicker.classList.remove("active")
})
}


// color change
colorPalette.forEach(color=>{
    color.addEventListener("click", ()=>{
        let primaryHue;
        // remove active class form color
        changeActivColor();
        if(color.classList.contains("color-1")){
            primaryHue = 252;
        }else if(color.classList.contains("color-2")){
            primaryHue = 52;
        }else if(color.classList.contains("color-3")){
            primaryHue = 352;
        }else if(color.classList.contains("color-4")){
            primaryHue = 152;
        }else if(color.classList.contains("color-5")){
            primaryHue = 202;
        }
        color.classList.add("active")
        root.style.setProperty(`--primary-color-hue`, primaryHue);
    })
})