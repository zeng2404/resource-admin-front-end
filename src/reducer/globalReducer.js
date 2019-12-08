const globalState = {
    baseUrl: "http://localhost:7777",
    currentLocaleChooseIndex: 0,
    localeList: ['zh-CN','en-US'],
    localeDescriptionList: ['中文','English'],
    localeChooseMenuVisibility: false,
    localeChooseMenuAnchorEl: null,
    leftDrawerOpenBool: false,
    snackbarVisibility: false,
    snackbarInfoLevel: 'success',
    snackbarMessageIntlId: 'intl_snackbar_default_message',
}

const globalReducer =(state = globalState, action) => {
    switch (action.type) {
        case 'INITIAL_BASE_URL_SUCCESS':
            return Object.assign({}, state, {
                baseUrl: action.baseUrl,
            });
            break;
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
        case 'CHANGE_SNACKBAR_MESSAGE_ID':
            return Object.assign({}, state, {
                snackbarMessageIntlId: action.intlId,
                snackbarInfoLevel: action.infoLevel,
                snackbarVisibility: true,
            })
        default:
            return state;
    }
}

export default globalReducer;