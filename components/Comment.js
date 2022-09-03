export default function Comment({id, level, user, time_ago, content, comments}){  
  let commentHMTML = `
  <div id="${id}" class="comment comment--level-${level}">
    <div class="comment__info">
      <span>▲</span>
      <span>${user}</span>
      <span>${time_ago}</span>
      <a href="">prev</a>
      <a href="">next</a>
    </div>
    <div class="comment__content">
      ${content}  
    </div>
    <a href="#">reply</a>
  </div>
  `
  if(comments.length !== 0) commentHMTML += comments.map(comment => Comment(comment)).join('');
  return commentHMTML;
}