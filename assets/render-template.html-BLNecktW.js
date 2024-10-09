import{_ as t,c as a,e as l,o as n}from"./app-CefLgoES.js";const s={};function r(i,e){return n(),a("div",null,e[0]||(e[0]=[l('<h1 id="render-template" tabindex="-1"><a class="header-anchor" href="#render-template"><span>Render Template</span></a></h1><p>The Render Template node allows you to render templates based on input data. Templates in Home Assistant are powerful tools for dynamically generating text or values based on the state of entities or other variables. This node sends the template to Home Assistant for rendering and outputs the result.</p><div class="hint-container tip"><p class="hint-container-title">NOTE:</p><p>The node will output any Home Assistant API errors for catching with the &#39;catch-all&#39; node</p></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><h3 id="template" tabindex="-1"><a class="header-anchor" href="#template"><span>template</span></a></h3><ul><li>Type: <code>string</code></li></ul><p>Jinja template to be rendered, discarded if <code>msg.template</code> is provided via input msg</p><h3 id="template-location" tabindex="-1"><a class="header-anchor" href="#template-location"><span>Template Location</span></a></h3><p>Customizable location to output original template</p><h3 id="results" tabindex="-1"><a class="header-anchor" href="#results"><span>Results</span></a></h3><p>Customizable location to output rendered template</p><h2 id="inputs" tabindex="-1"><a class="header-anchor" href="#inputs"><span>Inputs</span></a></h2><h3 id="template-1" tabindex="-1"><a class="header-anchor" href="#template-1"><span>template</span></a></h3><ul><li>Type: <code>string</code></li></ul><p>Jinja template to be rendered</p><h2 id="outputs" tabindex="-1"><a class="header-anchor" href="#outputs"><span>Outputs</span></a></h2><h3 id="template-2" tabindex="-1"><a class="header-anchor" href="#template-2"><span>template</span></a></h3><ul><li>Type: <code>string</code></li></ul><p>The original template sent to Home Assistant for rendering</p><h3 id="payload" tabindex="-1"><a class="header-anchor" href="#payload"><span>payload</span></a></h3><ul><li>Type: <code>string</code></li></ul><p>The rendered template</p><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references"><span>References</span></a></h2><ul><li><a href="https://home-assistant.io/docs/configuration/templating/" target="_blank" rel="noopener noreferrer">Home Assistant Template Docs</a></li><li><a href="http://jinja.pocoo.org/docs/dev/templates/" target="_blank" rel="noopener noreferrer">Jinja Docs</a></li></ul>',24)]))}const p=t(s,[["render",r],["__file","render-template.html.vue"]]),d=JSON.parse('{"path":"/node/render-template.html","title":"Render Template","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[{"level":3,"title":"template","slug":"template","link":"#template","children":[]},{"level":3,"title":"Template Location","slug":"template-location","link":"#template-location","children":[]},{"level":3,"title":"Results","slug":"results","link":"#results","children":[]}]},{"level":2,"title":"Inputs","slug":"inputs","link":"#inputs","children":[{"level":3,"title":"template","slug":"template-1","link":"#template-1","children":[]}]},{"level":2,"title":"Outputs","slug":"outputs","link":"#outputs","children":[{"level":3,"title":"template","slug":"template-2","link":"#template-2","children":[]},{"level":3,"title":"payload","slug":"payload","link":"#payload","children":[]}]},{"level":2,"title":"References","slug":"references","link":"#references","children":[]}],"git":{"updatedTime":1723606857000,"contributors":[{"name":"Jason","email":"37859597+zachowj@users.noreply.github.com","commits":4}]},"filePathRelative":"node/render-template.md"}');export{p as comp,d as data};
