import RouterHandler from "./route.js";
import listeners from "./listeners.js";

class App{
  constructor(){
    new RouterHandler();
    listeners();
  }
}

new App();