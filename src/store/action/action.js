export const updateSearchKeyword = (payload) => {
    return {
        type: 'UPDATE_SEARCH_KEYWORD',
        payload: payload,
    }
}

export const updateSuggestedPlaces = (payload) => {
    return {
        type: 'UPDATE_SUGGESTED_PLACES',
        payload: payload,
    }
}

export const updateSuggestedHotels = (payload) => {
    return {
        type: 'UPDATE_SUGGESTED_HOTELS',
        payload: payload,
    }
}
