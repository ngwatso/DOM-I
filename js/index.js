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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const codeImg = document.getElementById("cta-img");
codeImg.setAttribute('src', siteContent["cta"]["img-src"])

const midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

document.querySelector('a:nth-of-type(1)').textContent = siteContent["nav"]["nav-item-1"]
document.querySelector('a:nth-of-type(2)').textContent = siteContent["nav"]["nav-item-2"]
document.querySelector('a:nth-of-type(3)').textContent = siteContent["nav"]["nav-item-3"]
document.querySelector('a:nth-of-type(4)').textContent = siteContent["nav"]["nav-item-4"]
document.querySelector('a:nth-of-type(5)').textContent = siteContent["nav"]["nav-item-5"]
document.querySelector('a:nth-of-type(6)').textContent = siteContent["nav"]["nav-item-6"]

function addTextNode(text) {
  const newText = document.createTextNode(text);
  const domText = siteContent["cta"]["h1"];

  domText.appendChild(newText);
}


// const domText1 = siteContent["cta"]["h1"]
// const domText2 = domText1.split(' ');
// domText2.forEach(str => {
//   const lb = document.createElement('BR');
//   lb.textContent = str;
//   document.querySelector('h1').appendChild(lb);
// })

document.querySelector('h1').innerHTML = "DOM<br/> Is<br/> Awesome"
// document.querySelector('h1').textContent = domText2[1]
// document.querySelector('h1').textContent = domText2[2]

document.querySelector('button').textContent = 'Get Started'

const h4Element = document.querySelectorAll('h4');

h4Element[0].textContent = siteContent["main-content"]["features-h4"]
h4Element[1].textContent = siteContent["main-content"]["about-h4"]
h4Element[2].textContent = siteContent["main-content"]["services-h4"]
h4Element[3].textContent = siteContent["main-content"]["product-h4"]
h4Element[4].textContent = siteContent["main-content"]["vision-h4"]

h4Element[5].textContent = siteContent["contact"]["contact-h4"]

const paraElement = document.querySelectorAll('p');

paraElement[0].textContent = siteContent["main-content"]["features-content"]
paraElement[1].textContent = siteContent["main-content"]["about-content"]
paraElement[2].textContent = siteContent["main-content"]["services-content"]
paraElement[3].textContent = siteContent["main-content"]["product-content"]
paraElement[4].textContent = siteContent["main-content"]["vision-content"]

paraElement[5].innerHTML = "123 Way 456 Street<br/> Somewhere, USA"
paraElement[6].textContent = siteContent["contact"]["phone"]
paraElement[7].textContent = siteContent["contact"]["email"]

paraElement[8].textContent = siteContent["footer"]["copyright"]

const anchor = document.querySelectorAll('nav a');
anchor.forEach(a => a.style.color = "green");

const newItem1 = document.createElement('a');
newItem1.textContent = 'Last Link'
document.querySelector('nav').appendChild(newItem1);
newItem1.style.color = "green";

const newItem2 = document.createElement('a');
newItem2.textContent = 'First Link'
document.querySelector('nav').prepend(newItem2);
newItem2.style.color = "green";
