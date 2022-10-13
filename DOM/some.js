// function click(){
//     document.querySelector('h1').innerText = 'Hello! My name is Solomon'
// }

// const changeContent = () => document.querySelector('h1').innerText = 'Hello! My name is Solomon'


function changeContent(){
    document.querySelector('#nm').innerText = 'Solomon'
    document.querySelector('h1').style.backgroundColor = 'purple'
    document.querySelector('h1').style.color = 'white'

}

const changePicture = () => document.querySelector('img').src = 'https://pbs.twimg.com/profile_banners/1146165110085492736/1654357792/1500x500'