/* 
 * (C) 2015 TekMonks. All rights reserved.
 * License: MIT - see enclosed LICENSE file.
 */

const path = require("path");

APP_ROOT = `${path.resolve(`${__dirname}/../../`)}`;
exports.CONTENT_ROOT = `${path.resolve(`${__dirname}/../../../../../frontend/apps/webscrolls/contents`)}`;
exports.TEMPLATE_ROOT = `${path.resolve(`${__dirname}/../../../../../frontend/apps/webscrolls/templates`)}`;
exports.LIB_DIR = `${APP_ROOT}/apis/lib`;
exports.CONF_DIR = `${APP_ROOT}/conf`;

/* Constants for the FS Login subsystem */
exports.SALT_PW = "$2a$10$VFyiln/PpFyZc.ABoi4ppf";
exports.APP_DB = `${APP_ROOT}/db/webscrolls.db`;