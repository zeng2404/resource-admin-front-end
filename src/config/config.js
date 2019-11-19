const snackbarAutoHiddenTime = 6000;
const backEndServerPort = 7777;
const host = document.location.hostname;
const backEndServerUrl = 'http://' + host + ":" + backEndServerPort + '/';
export {
    snackbarAutoHiddenTime,
    backEndServerUrl,
    backEndServerPort,
    host,
}