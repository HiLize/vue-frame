const ROOT_PATH = '/wec-cpdaily-admin-frame'

let dataServer = ''

let dataPath = (path) => {
    return dataServer + path
}

export default {
    menuList: dataPath(`${ROOT_PATH}/menu/list`),
    userInfo: dataPath(`${ROOT_PATH}/user/info`),
}
