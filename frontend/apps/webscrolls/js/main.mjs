import {router} from "/framework/js/router.mjs";

async function getContent(){
  
  //get content and template
  let contentPath = new URL(router.getCurrentURL()).searchParams.get("content_path") || 'home/home.json'
  let content = await(await fetch(`${APP_CONSTANTS.CMS_ROOT_URL}/${contentPath}`)).json();
  let template = await(await fetch(`${APP_CONSTANTS.TEMPLATES_ROOT_URL}/${content.template_type}.json`)).json();
  
  //parse HTML from content and template
  let renderedHTML
  let html = parseHTML(template, content)
  await $$.require("/framework/3p/mustache.min.js"); 
  Mustache.parse(html)
  let contentFunctions = getContentFunctions();
  let data = {...contentFunctions, ...APP_CONSTANTS}
  
  //get CSS stylesheet
  let cssLink = document.createElement("link")
  cssLink.href = `${APP_CONSTANTS.STYLE_ROOT_URL}/${template.css_path}`
  cssLink.type = "text/css"
  cssLink.rel = "stylesheet"
  document.querySelector('head').appendChild(cssLink)
  
  html = `<div ${template.style ? `style="${template.style}"`:''}>${html}</div>`
  
  renderedHTML = Mustache.render(html, data)
  const element = document.querySelector('body');
  element.innerHTML = renderedHTML
}

function getContentFunctions() {
	return {makeLink: _ => (text, render) => router.encodeURL(render(text))}
}

function parseHTML(template, content) {
  let html = "";

  for (const key in template) {
    if (key == 'id') continue
    if (key == 'template_type') continue

    const value = template[key];
    const style = template[key].style;
    const type = template[key].type;

    if (typeof template[key] == 'object') {
      if(key == 'template'){
        html += `${parseHTML(value, content)}`
      }else{
        if(type == 'image' || type == 'img'){
          html += `<img class="${key}"${style != undefined ? ` style="${style}"` : ''} src="${content[key].src}" alt="${content[key].alt}">${parseHTML(value, content)}</img>`
        }else if(type == 'link' || type == 'url'){
          html += `<a class="${key}"${style != undefined ? ` style="${style}"` : ''} href="${content[key].url}">${content[key] ? urlObject.value : parseHTML(value, content)}</a>`
        }else{
          html += `<div class="${key}"${style != undefined ? ` style="${style}"` : ''}>${content[key] ? content[key] : parseHTML(value, content)}</div>`
        }
      }
    }
  }
  
  return html;
}

export const main = {getContent}