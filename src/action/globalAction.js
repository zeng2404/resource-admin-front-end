const initialBaseUrl = () => {
    return {
        type: 'INITIAL_BASE_URL',
    }
}
const openLocaleChooseMenu = anchorEl => {
    return {
        type: 'OPEN_LOCALE_CHOOSE_MENU',
        anchorEl
    }
}

const closeLocaleChooseMenu = () => {
    return {
        type: 'CLOSE_LOCALE_CHOOSE_MENU'
    }
}

const changeLocaleChooseIndex = index => {
    return {
        type: 'CHANGE_LOCALE_CHOOSE_INDEX',
        index
    }
}

const changeLeftDrawerOpenStatus = openBool => {
    return {
        type: 'CHANGE_LEFT_DRAWER_OPEN_STATUS',
        openBool
    }
}

const changeSnackbarVisibilityStatus = openBool => {
    return {
        type: 'CHANGE_SNACKBAR_VISIBILITY_STATUS',
        openBool,
    }
}
export {
    openLocaleChooseMenu,
    closeLocaleChooseMenu,
    changeLocaleChooseIndex,
    changeLeftDrawerOpenStatus,
    changeSnackbarVisibilityStatus,
    initialBaseUrl,
}