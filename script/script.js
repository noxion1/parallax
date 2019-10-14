const verwerkScrollEvent = () => {
    let scrollWaarde = this.pageYOffset;
    console.log(scrollWaarde);
    pasDeel2Aan(scrollWaarde);

    if (scrollWaarde > 1800) {
        voegClassToe();
    } else {
        verwijderClass();
    }

    pasNavAan(scrollWaarde);

    pasVoortgangAan(scrollWaarde);
}

const documentHoogte = document.body.offsetHeight;
const viewPoortHoogte = window.innerHeight;
let nav = document.getElementById('nav');
let LaatsteScrollPos = 0;
window.addEventListener('scroll', verwerkScrollEvent);

const pasNavAan = (getal) => {
    if (getal>LaatsteScrollPos) {
        console.log("de pagina gaat naar BENEDEN.");
        LaatsteScrollPos = getal;
        nav.style.top = "-2em";
    } else {
        console.log("de pagina gaat naar BOVEN.");
        LaatsteScrollPos = getal;
        nav.style.top = 0;
    }
}

const pasDeel2Aan = (getal) => {
    document.getElementsByClassName('deel-2')[0].style.backgroundPositionY = -getal / 2 + 'px';
    if (getal > 400) {
        let tussenRuimte = getal - 400;
        document.getElementsByClassName('deel__span-links')[0].style.marginLeft = -tussenRuimte / 2 + 'px';
        document.getElementsByClassName('deel__span-rechts')[0].style.marginLeft = tussenRuimte + 2 + 'px';
    } else {
        document.getElementsByClassName('deel__span-links')[0].style.marginLeft = 0;
        document.getElementsByClassName('deel__span-rechts')[0].style.marginLeft = 0;
    }
}

const voegClassToe = () => {
    let allSections = document.getElementsByTagName('section');
    for (let i = 0; i < allSections.length; i++) {
        allSections[i].classList.add('accent');
    }
}

const verwijderClass = () => {
    let allSections = document.getElementsByTagName('section');
    for (let i = 0; i < allSections.length; i++) {
        allSections[i].classList.remove('accent');
    }
}


const pasVoortgangAan = (getal) => {
    let voortgang = getal * 100 / (documentHoogte - viewPoortHoogte) + "%";
    document.getElementById('voortgang').style.width = voortgang;
}
