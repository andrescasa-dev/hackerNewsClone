import view from "../utils/view.js";
import Story from "../components/Story.js";
import store from "../store.js";

export default function favorites(path){  
  const favoritesArr = store.state.favorites;
  const hasFavorites = favoritesArr.length > 0;
  const content = hasFavorites ? favoritesArr.map(favorite => Story({...favorite, index: undefined})).join('') 
  : 'There is no favorites yet';
  view.innerHTML = `<div class='container'>${content}</div>`
}