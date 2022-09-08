import store from "./store.js";
import view from "./utils/view.js";
import Story from "./components/Story.js";

export default function listeners(){
  document.addEventListener('click', ({target})=>{
    if(target.matches('header a')){
      const sections = document.querySelectorAll('header a');
      sections.forEach( sections => sections.classList.remove('active'))
      target.classList.add('active');
    }

    if(target.matches('button.story__btn-favorite')){
      const isFavorite = target.dataset.isFavorite === 'true';
      const storySelected = {...JSON.parse(target.dataset.story), isFavorite: !isFavorite};
  
      const action = {
        type: isFavorite ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
        payload: {
          favorite: storySelected
        }
      }
      store.dispatch(action);
  
      const storyElement = view.querySelector(`.story[data-id="${storySelected.id}"]`)
      storyElement.outerHTML = Story(storySelected);
    }
  });
}