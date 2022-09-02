import stories from "./pages/stories.js";
import newView from "./pages/new.js";

const router = new Navigo('index.html', true, '#');

export default class RouterHandler{
  constructor() {
    this.createRoutes();
  }

  createRoutes(){
    const routes = [
      {path: '/', page: stories},
      {path: '/top', page: stories},
      {path: '/new', page: stories},
      {path: '/ask', page: stories},
      {path: '/show', page: stories},
    ]
    routes.forEach( ({path, page}) => {
      router.on(path,()=>{ page(path);}).resolve();
    })
  }
}


// / (Top) -> /new
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show 