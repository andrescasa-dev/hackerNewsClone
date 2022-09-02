import view from "../utils/view.js";
import { BASE_URL } from "../utils/const.js";
import Story from "../components/Story.js";

export default async function stories(path){
  const stories = await fetchStories(path);
  const storiesHTML = stories.map((story, i)=>{ return Story({...story, index: ++i}) }).join('');
  view.innerHTML = `<div class="stories-container">${storiesHTML}</div>`;
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