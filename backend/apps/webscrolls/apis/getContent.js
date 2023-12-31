const API_CONSTANTS = require(`${__dirname}/lib/constants.js`);
const path = require("path");
const readdirAsync = require("util").promisify(require("fs").readdir);
const readFile = require("util").promisify(require("fs").readFile)


exports.doService = async jsonReq => {
	if (!validateRequest(jsonReq)) {LOG.error("Validation failure."); return CONSTANTS.FALSE_RESULT;}
   
    let contentPath = path.resolve(`${API_CONSTANTS.CONTENT_ROOT}/${jsonReq.q}`);
	
    try {
        const fileContent = await readFile(contentPath, 'utf8');
        const parsedContent = JSON.parse(fileContent);
        return parsedContent;
    } catch (err) {
        return { result: false, error: err.message };
    }
    
}

const validateRequest = jsonReq => (jsonReq && jsonReq.q);