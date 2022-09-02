export default function Story({index, title, domain, user, points, time_ago, comments_count}){
  return `
  <div class="story">
      <span>${index}.</span>
      <span>▲</span>
      <div>
        <div class="story__title">        
          <h2><a href="#">${title}</a></h2>
          <span><a href="#">(${domain})</a></span>
        </div>
        <div class="story__info">
          <p>${points} points by <a href="#">${user}</a> <a href="#">${time_ago}</a></p>
          <a href="#">hide</a>
          <a href="#">${comments_count} comments</a>
        </div>
      </div>
  </div>
  `
}