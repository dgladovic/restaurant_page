import './styles.css';
import MyImage from './home.png';


const content = document.getElementById('content')
const body = document.querySelector('body');
const piece = document.createElement('div');

const hud = () =>{
    const hud = document.createElement('div');
    hud.setAttribute('class','hud');
    for(let i = 0; i < 3; i++){
        const tab = document.createElement('div');
        tab.addEventListener('click', () => {console.log('abc')});
        tab.setAttribute('id',i);
        switch(i){
            case 0:
                tab.textContent = 'Home';
                break;
            case 1:
                tab.textContent = 'Menu';
                break;
            case 2:
                tab.textContent = 'Contact Us';
                break;
        }
        hud.appendChild(tab);
    }
    
    body.appendChild(hud);

}


const firstLoad = () => {
    const cHeader = document.createElement('h1');
    cHeader.textContent = "Dobrodosli na sajt Lorenzo i Kakalamba";

    const cParag = document.createElement('p');
    
    const cImg = document.createElement('img');
    cImg.setAttribute('src',MyImage);
    cImg.setAttribute('class','slika');

    cParag.textContent = 'Deselepojede LORENZO I KAKALAMBA" je porodični restoran koji je za kratko vreme uspeo \
    da osvoji goste svojom originalnošću, šarmom i jedinstvenim spojem Firence i Pirota. Zamisao je potekla od iskrenog \
    obećanja pažljivog muža voljenoj ženi na početku braka: ”Draga, jedino što mogu sigurno da ti obećam je da nikada nećeš \
    biti gladna!”. Iz jedne ljubavi, slike dva života su se izmešale u biografiji jednog restorana...';

    content.appendChild(cHeader);
    content.appendChild(cImg);
    content.appendChild(cParag);
    
}

export {firstLoad,hud};
