const element = document.getElementById("#transformer")
const HOME = document.getElementById("#home");
const ABOUT = document.getElementById("#about");
const CONTACT = document.getElementById("#contact");
const EXPERIENCE = document.getElementById("#experience");

let ACTIVE_ELEMENT = "#home-button"

function changeContent(string) {
    removeActiveClass();
    ACTIVE_ELEMENT = `${string}-button`;
    switch (string) {
        case "#about":
            setContent(ABOUT.innerHTML);
            break;
        case "#contact":
            setContent(CONTACT.innerHTML);
            break;
        case "#experience":
            setContent(EXPERIENCE.innerHTML);
            break;
        default:
            ACTIVE_ELEMENT = "#home-button"
            setContent(HOME.innerHTML)
    };

    addActiveClass();
}

function removeActiveClass(){
    document.getElementById(ACTIVE_ELEMENT).classList.remove("active")
}

function addActiveClass(){
    document.getElementById(ACTIVE_ELEMENT).classList.add("active")
}

function setContent(content){
    element.innerHTML = content;
}

function renderContent() {
    const path = location.hash;
    changeContent(path);
}

renderContent();