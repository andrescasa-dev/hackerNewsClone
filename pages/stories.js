import view from "../utils/view.js";
import { BASE_URL } from "../utils/const.js";
import Story from "../components/Story.js";
import store from "../store.js";
import checkFavorite from "../utils/checkFavorite.js";

export default async function stories(path){
  const stories = await fetchStories(path);
  console.log(store.state);
  const storiesHTML = stories.map(
    (story, i)=>{ 
      return Story({...story, index: ++i, isFavorite: checkFavorite(store.state.favorites, story)})
    }
  ).join('');
  view.innerHTML = `<div class="container">${storiesHTML}</div>`;
}

async function fetchStories(path){
  const endPoints = [
    {path: '/top' , endPoint:'/news'},
    {path: '/new' , endPoint:'/newest'},
    {path: '/show' , endPoint:'/show'},
    {path: '/ask' , endPoint:'/ask'},
  ];
  const endPoint = endPoints.find((route)=> route.path === path).endPoint;
  const response = await fetch(`${BASE_URL}${endPoint}`);
  const stories = await response.json();
  return stories;
}

document.addEventListener('click', (event)=>{
  if(event.target.matches('button.story__btn-favorite')){
    const storySelected = {...JSON.parse(event.target.dataset.story)};
    const isFavorite = event.target.dataset.isFavorite === 'true';
    const action = {
      type: isFavorite ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
      payload: {
        favorite: storySelected
      }
    }
    store.dispatch(action);
    const storyElement = view.querySelector(`.story[data-id="${storySelected.id}"]`)
    storyElement.outerHTML = Story({...storySelected, isFavorite: checkFavorite(store.state.favorites, storySelected)});
    console.log(store.state)
  }
});