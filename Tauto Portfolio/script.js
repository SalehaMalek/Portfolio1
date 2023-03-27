const saluteTextContainer = document.querySelector(".saluteTextContainer")
const saluteImageContainer = document.querySelector(".saluteImageContainer")
const AuthorName = document.querySelector(".name")
const jobTitleContainers = document.querySelectorAll(".jobTitleContainer")
const jobTitles = document.querySelectorAll(".jobTitle")
const ProjectTitle = document.querySelector(".ProjectTitle")
const imgs = document.querySelectorAll(".img")
const contactInfo = document.querySelector(".contact-info")
const cards = document.querySelectorAll(".card")




window.addEventListener("scroll", () => {
    let offsetY = window.scrollY
    saluteTextContainer.style.transform = `translateY(${offsetY * 0.3}px)`
    saluteImageContainer.style.transform = `translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`
    AuthorName.style.transform = `translateX(${offsetY * 0.1}px)`
    jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 0.5}px`
    jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`
    jobTitles[0].style.transform = `translateX(calc(200vh - ${offsetY}px))`
    jobTitles[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`
    ProjectTitle.style.transform = `translateX(calc(400vh - ${offsetY}px))`
    imgs[0].style.transform = `translateY(calc(-500vh + ${offsetY}px))`
    imgs[1].style.transform = `translateY(calc(-500vh + ${offsetY}px))`
    imgs[2].style.transform = `translateY(calc(-500vh + ${offsetY}px))`
    imgs[3].style.transform = `translateY(calc(-500vh + ${offsetY}px))`
    imgs[4].style.transform = `translateY(calc(-500vh + ${offsetY}px))`
    // -------------------------------------------------------------------------
    imgs[12].style.transform = `translateY(calc(500vh - ${offsetY}px))`
    imgs[13].style.transform = `translateY(calc(500vh - ${offsetY}px))`
    imgs[14].style.transform = `translateY(calc(500vh - ${offsetY}px))`
    imgs[15].style.transform = `translateY(calc(500vh - ${offsetY}px))`
    imgs[16].style.transform = `translateY(calc(500vh - ${offsetY}px))`
    cards.style.transform = `translateY(${offsetY * 0.5}px)`
    contactInfo.style.backgroundPositionY = `${offsetY * 0.9}px`
})  




















