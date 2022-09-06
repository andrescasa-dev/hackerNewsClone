class Store{
  #reducer;
  #state;
  constructor(reducer){
    this.#reducer = reducer;
    this.#state = undefined;
  }
  dispatch(action){
    this.#state = this.#reducer(this.#state, action);
  }
  get state(){
    return this.#reducer(this.#state, '');
  }
}

const initialState = {
  favorites: []
}

function favoritesReducer(state = initialState, action){
  switch(action.type){
    case ('REMOVE_FAVORITE'):{
      const favoritesUpdated = state.favorites.filter(favorite => favorite.id !== action.payload.favorite.id)
      return {...state, favorites: favoritesUpdated};
    }
    case ('ADD_FAVORITE'):{
      const favoritesUpdated = [...state.favorites, action.payload.favorite]
      return {...state, favorites: favoritesUpdated};
    }
    default:
      return state;
  }
}

export default new Store(favoritesReducer);

