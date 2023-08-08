/*
 * (C) 2015 TekMonks. All rights reserved.
 * License: MIT - see enclosed license.txt file.
 */

const FRONTEND = "https://{{{hostname}}}";
const BACKEND = "https://{{{hostname}}}:9090";
const APP_PATH = `${FRONTEND}/apps/webscrolls`;
const API_PATH = `${BACKEND}/apps/webscrolls`;

export const APP_CONSTANTS = {
    FRONTEND, BACKEND, APP_PATH,
    MAIN_HTML: APP_PATH+"/home.html",
    PRODUCT_HTML: APP_PATH+"/product.html",
    INDEX_HTML: APP_PATH+"/index.html",
    ERROR_HTML: FRONTEND+"/framework/error.html",
    CMS_ROOT_URL: `${APP_PATH}/contents`,
    TEMPLATES_ROOT_URL: `${APP_PATH}/templates`,
    STYLE_ROOT_URL: `${APP_PATH}/css`,
    HOSTNAME: APP_PATH+"/conf/hostname.json",

    SESSION_NOTE_ID: "com_monkshu_app_mnkp",
    
    //API
    API_GET_CONTENT: API_PATH+"/getContent",
    API_GET_TEMPLATE: API_PATH+"/getTemplate",

    // Login constants
    MIN_PASS_LENGTH: 8,
    API_LOGIN: `${API_PATH}/login`,
    BCRYPT_SALT: "$2a$10$VFyiln/PpFyZc.ABoi4ppf",
    USERID: "id",
    USER_ROLE: "user",
    GUEST_ROLE: "guest"
}

APP_CONSTANTS.PERMISSIONS_MAP = {
    user:[APP_CONSTANTS.INDEX_HTML,APP_CONSTANTS.MAIN_HTML,APP_CONSTANTS.PRODUCT_HTML,APP_CONSTANTS.ERROR_HTML],
    guest:[APP_CONSTANTS.INDEX_HTML,APP_CONSTANTS.MAIN_HTML,APP_CONSTANTS.PRODUCT_HTML,APP_CONSTANTS.ERROR_HTML]
}