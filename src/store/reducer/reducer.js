const initState = {
  searchKeyword: '',
  suggestedPlaces: [],
  suggestedHotels: []
}

const Reducer = (state = initState, action) => {
  switch (action.type) {

    case "UPDATE_SUGGESTED_PLACES":
      return {
        ...state,
        suggestedPlaces: action.payload
      }
    case "UPDATE_SUGGESTED_HOTELS":
      return {
        ...state,
        suggestedHotels: action.payload
      }
    case "UPDATE_SEARCH_KEYWORD":
      return {
        ...state,
        searchKeyword: action.payload
      }

    default:
      return state
  }
}

export default Reducer