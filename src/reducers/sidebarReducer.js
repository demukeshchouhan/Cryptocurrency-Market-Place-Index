const initialState = {
	toggle_sidebar : false
  }
  
  const sideBarReducer = (state = initialState, action) => {
	switch (action.type) {
  
	case "TOGGLE_SIDEBAR":
	  return state = { 
		...state,
		toggle_sidebar : action.payload
	  }
  
	default:
	  return state
	}
  }
  
  
  export default sideBarReducer;