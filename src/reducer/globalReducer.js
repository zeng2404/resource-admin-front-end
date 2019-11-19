import globalState from "../state/globalState";

const globalReducer =(state = globalState, action) => {
    switch (action.type) {
        case 'OPEN_LOCALE_CHOOSE_MENU':
            return Object.assign({}, state, {
                localeChooseMenuVisibility: true,
                localeChooseMenuAnchorEl: action.anchorEl,
            })
            break;
        case 'CLOSE_LOCALE_CHOOSE_MENU':
            return Object.assign({}, state, {
                localeChooseMenuAnchorEl: null,
                localeChooseMenuVisibility: false,
            })
            break;
        case 'CHANGE_LOCALE_CHOOSE_INDEX':
            return Object.assign({}, state, {
                currentLocaleChooseIndex: action.index,
            })
            break;
        case 'CHANGE_LEFT_DRAWER_OPEN_STATUS':
            return Object.assign({}, state, {
                leftDrawerOpenBool: action.openBool,
            })
            break;
        case 'CHANGE_SNACKBAR_VISIBILITY_STATUS':
            return Object.assign({}, state, {
                snackbarVisibility: action.openBool,
            });
            break;
        default:
            return state;
    }
}

export default globalReducer;