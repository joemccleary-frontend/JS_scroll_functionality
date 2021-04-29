//Global var that will store navbar__list ul 
const allNav = document.getElementById('navbar__list');
//Collates all sections and store in var
const allSections = document.querySelectorAll('section');

// build the nav
//Function to create nav bar
const navbarCreate=() => {
    
    //sets navbar var to empty
    let navbar = '';
    
    //for each loop through each section
    allSections.forEach(section =>{

        //set ID
        const ID = section.id;
        
        //sets var to nav
        const navData = section.dataset.nav
        
        //append info to navbar var
        navbar += `<li><a class= "menu__link" data-link=${ID} href="#${ID}">${navData}</a></li>`;
    }
    );
    //navbar list (allNav) ammended to equal new info 
    allNav.innerHTML = navbar;
};
//builds the navbar
navbarCreate();


//nav bar change color when in view
// every scroll triggers function
window.addEventListener("scroll", navHighlight);

//call function
function navHighlight() {
  // set scroll pos to var
  let scrollY = window.pageYOffset;
  
  // loop through each section
  allSections.forEach(section => {
    //get height
    const sectionHeight = section.offsetHeight;
    //get offset top and compensate 400px
    const sectionTop = section.offsetTop - 400;
    //get section id
    sectionId = section.getAttribute("id");
    
    if (
      //if section is in view 
      scrollY <= sectionTop + sectionHeight &&
      scrollY > sectionTop
    )
    //make it active
      {document.querySelector(".navbar__menu a[href*= " + sectionId + "]").classList.add("your-active-class");
    }
    //otherwise make it normal
    else 
      {document.querySelector(".navbar__menu a[href*= " + sectionId + "]").classList.remove("your-active-class");
    }});
}
