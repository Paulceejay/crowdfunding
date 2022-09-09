// instantiate UI class
const ui = new UI;

// stoping the default styles on my htnml
const stopDefault = () => {
   const body = document.querySelector(UISelectors.body);
   body.className = "bg-dgray text-base";

   const main = document.querySelector(UISelectors.main);
   main.className =
     "bg-lgray w-10/12 mx-auto md:w-9/12 lg:w-1/2 relative z-0 bottom-24 rounded-xl";
}

// ui selectors
const UISelectors = {
  body: 'body',
  bodyNull: '#body',
  header: 'header',
  main: 'main',
  nav: 'nav',
  toggleBarNav: '#toggle-bar-nav',
  cancelSignNav: '#cancel-sign-nav',
  navItemsMobile: '#nav-items-mobile',
  empty: '#empty',
  masterCraft: '#mastercraft-cont',
  backProject: '#back-project',
  bambooStand: '#bamboo-stand-btn',
  blackEdition: '#black-edition-stand-btn',
  specialEdition: '#Special-edition-btn'
} 

// my toggle mav bav on click
document.querySelector(UISelectors.toggleBarNav).addEventListener('click', () => {
     stopDefault();

    const cancel = document.querySelector(UISelectors.cancelSignNav);
    cancel.className = 'text-white text-2xl block'

    const toggleBar = document.querySelector(UISelectors.toggleBarNav)
    toggleBar.className = 'hidden'

    const navItems = document.querySelector(UISelectors.navItemsMobile);
    navItems.className = 'bg-white rounded-2xl mt-11 visible z-10 relative'

});

// my cancel toggle nav bar on click
document.querySelector(UISelectors.cancelSignNav).addEventListener('click', () => {
    const cancel = document.querySelector(UISelectors.cancelSignNav);
    cancel.className = 'text-white text-2xl hidden'

    const toggleBar = document.querySelector(UISelectors.toggleBarNav)
    toggleBar.className = 'block text-white text-2xl'

    const navItems = document.querySelector(UISelectors.navItemsMobile);
    navItems.className = 'bg-white rounded-2xl relative h-auto mt-11 invisible'

    const main = document.querySelector(UISelectors.main);
    main.className =
      "w-10/12 mx-auto rounded-xl md:w-9/12 relative z-0 bottom-24 bg-white";

    const body = document.querySelector(UISelectors.body);
    body.className = "bg-white text-base";

});

// back this project on the HTML om clock
document.querySelector(UISelectors.backProject).addEventListener("click", (e) => {
  e.preventDefault();

  ui.backProject();

  stopDefault()
});

// bamboo stand get reward button on click
document.querySelector(UISelectors.bambooStand).addEventListener('click', (e) => {
  e.preventDefault();

  ui.bambooStand()

  stopDefault() 
})

// black edition get reward btn on  click
document.querySelector(UISelectors.blackEdition).addEventListener('click', (e) => {
  e.preventDefault();

  ui.blackEdition()

  stopDefault() 
})

// speciaL EDITION get reward btn on click
document.querySelector(UISelectors.specialEdition).addEventListener('click', (e) => {
  e.preventDefault();

  ui.specialEdidtion()

  stopDefault() 
})