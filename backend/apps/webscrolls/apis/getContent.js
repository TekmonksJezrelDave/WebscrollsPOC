const API_CONSTANTS = require(`${__dirname}/lib/constants.js`);
const path = require("path");
const readdirAsync = require("util").promisify(require("fs").readdir);
const readFileAsync = require("util").promisify(require("fs").readFile)


exports.doService = async jsonReq => {
	if (!validateRequest(jsonReq)) {LOG.error("Validation failure."); return CONSTANTS.FALSE_RESULT;}
    LOG.debug({jsonReq})
    LOG.debug({API_CONSTANTS})
    let contentPath = path.resolve(`${API_CONSTANTS.CONTENT_ROOT}/${jsonReq.q}`);
	LOG.debug(`Got request for path: ${contentPath}`);

    try { return {result: true, files: await readFileAsync(contentPath)}; } 
    catch (err) {return err}
}

const validateRequest = jsonReq => (jsonReq && jsonReq.q);


