import RouterHandler from "./route.js";
const header = document.querySelector('header');

class App{
  constructor(){
    new RouterHandler();
    this.listeners();
  }

  listeners(){
    header.addEventListener('click', ({target})=>{
      if(target.matches('a')){
        const sections = header.querySelectorAll('a');
        sections.forEach( sections => sections.classList.remove('active'))
        target.classList.add('active');
      }
    })
  }
}
new App();