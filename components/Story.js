export default function Story(story){
  const {title, index, domain, user, points, time_ago, comments_count, id, isFavorite} = story;
  const cleanStory = {title, index, domain, user, points, time_ago, comments_count, id, isFavorite};
  return `
  <div class="story" data-id='${id}'>
      ${index ? `<span>${index}.</span>` : ''}
      <span>▲</span>
      <div>
        <div class="story__title">        
          <h2><a href="#">${title}</a></h2>
          <span><a href="#">(${domain})</a></span>
        </div>
        <div class="story__info">
          <p>${points} points by <a href="#">${user}</a> <a href="#">${time_ago}</a></p>
          <a href="#">hide</a>
          <a href="#/item?id=${id}">${comments_count} comments</a>
          <button class="story__btn-favorite" data-is-favorite='${isFavorite}' data-story='${JSON.stringify(cleanStory)}' >${isFavorite ? 'unlike': 'like'}</button>
        </div>
      </div>
  </div>
  `
}