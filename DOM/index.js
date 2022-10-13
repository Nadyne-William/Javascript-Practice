// document.querySelector('h1').innerHTML = '<button>Nadyne says Hello World</button>'


// document.querySelector('button').style.backgroundColor = 'black'
// document.querySelector('button').style.color = 'white'

document.querySelector('h1').innerText = 'I hate Nadyne!'
document.querySelector('h1').innerHTML = '<button>I hate Nadyne!</button>'


document.getElementById('title').style.backgroundImage = 'url(https://pbs.twimg.com/profile_images/1533113694455988230/QC09NKsA_400x400.jpg)'

document.getElementById('title').style.color = 'white'
document.getElementById('title').style.padding = '20px'


document.getElementsByTagName('label')[1].innerText = 'hello'


document.getElementsByClassName('desc')[0].innerText = 'I am from AKwa united league'

document.querySelector('button').setAttribute('disabled', '')

const para = document.createElement("p");

para.innerText = "This is a paragraph";

document.body.appendChild(para);
// document.body.removeChild(para);

// var ttl = document.querySelector('#title')
// var ttle = document.querySelector('#bio')

// document.body.replaceChild(ttl,ttle)