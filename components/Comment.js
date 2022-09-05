export default function Comment({id, level, user, time_ago, content, comments}){  
  const hasComments = comments.length > 0;
  
  let commentHMTML = `
  <div id="${id}" class="comment comment--level-${level}">
    <div class="comment__info">
      <span>  ▲</span>
      <span>${user}</span>
      <span>${time_ago}</span>
      <a href="">prev</a>
      <a href="">next</a>
    </div>
    <div class="comment__content">
      ${content}  
      ${hasComments ? comments.map(comment => Comment(comment)).join('') : ''}
    </div>
    <a class="comment__reply hide" href="#">reply</a>
  </div>
  `
  return commentHMTML;
}