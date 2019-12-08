const tagState = {
    tagSaveDialogVisibility: false,
    tagSaveDialogErrorArray: [],
}

const tagReducer = (state = tagState, action) => {
    switch (action.type) {
        case 'CHANGE_TAG_SAVE_DIALOG_VISIBILITY':
            return Object.assign({}, state,{
                tagSaveDialogVisibility: action.visibilityBool,
            });
            break;
        case 'TAG_SAVE_DIALOG_VALIDATE_ERROR':
            return Object.assign({}, state, {
                tagSaveDialogErrorArray: action.tagSaveDialogErrorArray,
            });
            break;
        default:
            return state;
    }
}

export default tagReducer;