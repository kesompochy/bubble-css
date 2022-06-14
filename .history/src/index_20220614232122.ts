//import './style.scss';

const HTMLsToAdd = [
    '<div class="color"></div>',
    '<span class="highlight1" />',
];

const main: ()=>void = () => {
    const images: HTMLCollectionOf<Element> = document.getElementsByClassName('bubble');
    for(let i=0, len=images.length;i<len;i++){
        HTMLsToAdd.forEach(html=>{
            images[i].insertAdjacentHTML('afterend', html);
        })
    }
}

window.onload = main;
