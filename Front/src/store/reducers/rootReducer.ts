const init = {
    user: null,
    token: null,
    };

const rootReducer = (state = init, action: any) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        default:
            return state;
    }
}

export default rootReducer;