import view from "../utils/view.js"
import Story from "../components/Story.js"
import Comment from "../components/Comment.js"
import { BASE_URL } from "../utils/const.js"


export default async function comments (){
  try {
    const story = await fetchStory();
    const comments = story.comments.length !== 0 ? story.comments.map( comment => Comment(comment)).join('') : "No comments"
    view.innerHTML = `<div class="container">${Story(story)}</div> <hr> <div class="container">${comments}</div>`;  
  } catch (error) {
    view.innerHTML = `<div class="error">${error.status}: ${error.statusText}</div>`
  }
}

async function fetchStory(){
  const id = window.location.hash.split('id=')[1];
  console.log(`${BASE_URL}/item/${id}`)
  const response = await fetch(`${BASE_URL}/item/${id}`)
  if(!response.ok) throw({status: response.status, statusText: response.statusText})
  const data = await response.json();
  return data;
}