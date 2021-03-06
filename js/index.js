const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logosdsd
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



const aElements = document.querySelectorAll('nav a')

aElements.forEach((elem, i) => {
    let value = Object.values(siteContent.nav)[i]
    aElements[i].textContent = value
})



const h1_tag = document.querySelector('.cta-text h1')
h1_tag.textContent = siteContent.cta.h1

const button_element = document.querySelector('.cta-text button')
button_element.textContent = siteContent.cta.button

button_element.addEventListener('click', function() {
    button_element.style.color = 'pink'
})

const top_img = document.getElementById('cta-img')
top_img.src = siteContent.cta["img-src"]

const text_section = document.querySelectorAll('.text-content h4')
text_section[0].textContent = siteContent["main-content"]["features-h4"]
text_section[1].textContent = siteContent["main-content"]["about-h4"]
text_section[2].textContent = siteContent["main-content"]["services-h4"]
text_section[3].textContent = siteContent["main-content"]["product-h4"]
text_section[4].textContent = siteContent["main-content"]["vision-h4"]

const para_section = document.querySelectorAll('.text-content p')
para_section[0].textContent = siteContent["main-content"]["features-content"]
para_section[1].textContent = siteContent["main-content"]["about-content"]
para_section[2].textContent = siteContent["main-content"]["services-content"]
para_section[3].textContent = siteContent["main-content"]["product-content"]
para_section[4].textContent = siteContent["main-content"]["vision-content"]

const middle_img = document.getElementById('middle-img')
middle_img.src = siteContent["main-content"]["middle-img-src"]

const contactH4 = document.querySelector('.contact h4');
contactH4.innerText = siteContent["contact"]["contact-h4"];

const contact = document.querySelectorAll('.contact p');
const arr = Object.values(siteContent["contact"]);
arr.splice(0, 1)

for (let i = 0; i < contact.length; i++) {
    contact[i].innerText = arr[i];
}

const nav = document.querySelectorAll('nav')

for (let i = 0; i < aElements.length; i++) {
    aElements[i].style.color = 'green'
}







button.addEventListener('click', function() {
    button.style.background = 'pink'
})

const btn = document.createElement("button");
const progressBar = document.createElement('progress')
const t = document.createTextNode("Click Here");

btn.appendChild(t);
document.body.appendChild(btn);
btn.setAttribute('id', 'btn')

btn.addEventListener('click', function() {
    let timeleft = 10;
    let downloadTimer = setInterval(function() {
        if (timeleft >= 0) {
            clearInterval()
        }
    }, 1000)
})




// function tenSecondTimer() {
//   let timeleft = 10;
//   const downloadTimer = setInterval(function(){
//     document.getElementById("progressBar").value = 10 - --timeleft;
//     if(timeleft === 0)
//       clearInterval(downloadTimer);
//   },1000);
//   }

//   const buttonTimer = document.getElementById('buttonTimer');
//   buttonTimer.addEventListener('click', tenSecondTimer)