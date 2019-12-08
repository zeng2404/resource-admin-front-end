const changeTagSaveDialogVisibility = visibilityBool => {
    return {
        type: 'CHANGE_TAG_SAVE_DIALOG_VISIBILITY',
        visibilityBool,
    }
}

const submitTagSaveForm = tagObject => {
    return {
        type: 'SUBMIT_TAG_SAVE_FORM',
        tagObject,
    }
}
export {
    changeTagSaveDialogVisibility,
    submitTagSaveForm,
}