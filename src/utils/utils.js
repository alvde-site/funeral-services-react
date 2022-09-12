import { burger, menu } from "./constants.js";

// Переключает меню бургера
export const toggleBurger = () => {
    burger.classList.toggle('open');
    menu.classList.toggle('topnav__links_opened');
}

const activateTopnavShadow = (topnav)=> {
  topnav.classList.add('topnav_on_shadow');
}

const deactivateTopnavShadow = (topnav)=> {
  topnav.classList.remove('topnav_on_shadow');
}

// const activateTopnavContacts = (topnavContacts)=> {
//   // topnavContacts.classList.add('topnav__contacts_active');
// }

// const deactivateTopnavContacts = (topnavContacts)=> {
//   // topnavContacts.classList.remove('topnav__contacts_active');
// }

//Активирует тень когда topnav на верху
export const handleTopnavTopPosition = (topnav)=> {
  let topPosition = topnav.getBoundingClientRect().y;
    if(topPosition === 0) {
      activateTopnavShadow(topnav);
      //activateTopnavContacts();
    } else {
      deactivateTopnavShadow(topnav);
      //deactivateTopnavContacts();
    }
}

// Отображает контакты на ширине 768-992px
export const handeDeviceWidth = ()=> {
  let width = Math.max(window.screen.width, window.innerWidth);
  if( 768 <= width || width >= 992) {
    window.addEventListener('scroll', handleTopnavTopPosition)
  } else {
    window.removeEventListener('scroll', handleTopnavTopPosition)
  }
}
