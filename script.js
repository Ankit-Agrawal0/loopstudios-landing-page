// const navBar = () =>{
//     const hamburger = document.querySelector('header nav .hamburger');
//     const list_items = document.querySelector('header nav ul');

//     hamburger.addEventListener(
//         'click', function(){
//             console.log('working')
//         }
//     )
// }
// navBar()
const navBar = () =>{
    const hamburger = document.querySelector('header nav .hamburger')
    const navUL = document.querySelector('header nav ul')
    const navLinks = document.querySelectorAll('nav ul li')
    const header= document.querySelector('header')

    hamburger.addEventListener('click' ,  () =>{
        console.log('clicked');
        navUL.classList.toggle('nav-active')
        hamburger.classList.toggle('active')
        header.classList.toggle('header-acive')
        navLinks.forEach((Link, index) =>{
            if (Link.style.animation) {
                Link.style.animation = ''
            }else{
                Link.style.animation = `fade 0.5s ease forwards ${index / 10 + 0.3}s`
            }

        })
    })
}

navBar()