import{_ as n,c as i,e as a,a as t,d as o,b as r,o as l,r as d}from"./app-CefLgoES.js";const u={},c={id:"state",tabindex:"-1"},h={class:"header-anchor",href:"#state"};function p(b,e){const s=d("Badge");return l(),i("div",null,[e[1]||(e[1]=a('<div class="hint-container warning"><p class="hint-container-title">Warning</p><p><em>Needs <a href="https://github.com/zachowj/hass-node-red" target="_blank" rel="noopener noreferrer">Custom Integration</a> installed in Home Assistant for this node to function</em></p></div><h1 id="sensor" tabindex="-1"><a class="header-anchor" href="#sensor"><span>Sensor</span></a></h1><p>The Sensor node creates a sensor entity within Home Assistant that is controlled from Node-RED. Sensors are entities that report data from various sources, such as temperature, humidity, or motion detection. This node allows you to create and manage such sensors directly from your Node-RED flows.</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2>',4)),t("h3",c,[t("a",h,[t("span",null,[e[0]||(e[0]=o("State ")),r(s,{text:"required"})])])]),e[2]||(e[2]=a('<ul><li>Type: <code>string | number | boolean</code></li></ul><p>The state the entity should be updated to</p><p>To set the Home Assistant state to <code>Unknown</code>, send a state with a js expression <code>null</code>.</p><h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes"><span>Attributes</span></a></h3><ul><li>Type: <code>Object</code></li></ul><p>Key/Value pair of attributes to update. The key should be a string and the value can be a [string | number | boolean | object]</p><h3 id="input-override" tabindex="-1"><a class="header-anchor" href="#input-override"><span>Input Override</span></a></h3><ul><li>Type: <code>string</code></li><li>Values: <code>accept | merge | block</code></li></ul><p>Determine how input values will be handled. When merge is selected the message object values will override the configuration values.</p><h3 id="resend-state-and-attributes" tabindex="-1"><a class="header-anchor" href="#resend-state-and-attributes"><span>Resend state and attributes</span></a></h3><ul><li>Type: <code>boolean</code></li></ul><p>When creating the entity in Home Assistant this will also send the last updated state and attributes then node sent to Home Assistant</p><h2 id="inputs" tabindex="-1"><a class="header-anchor" href="#inputs"><span>Inputs</span></a></h2><p>properties of <code>msg.payload</code></p><h3 id="state-1" tabindex="-1"><a class="header-anchor" href="#state-1"><span>state</span></a></h3><ul><li>Type: <code>string | number | boolean</code></li></ul><p>The state the entity should be updated to</p><h3 id="attributes-1" tabindex="-1"><a class="header-anchor" href="#attributes-1"><span>attributes</span></a></h3><ul><li>Type: <code>Object</code></li></ul><p>Key/Value pair of attributes to update. The key should be a string and the value can be a <code>[string | number | boolean | object]</code></p>',20))])}const g=n(u,[["render",p],["__file","sensor.html.vue"]]),f=JSON.parse('{"path":"/node/sensor.html","title":"Sensor","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[{"level":3,"title":"State","slug":"state","link":"#state","children":[]},{"level":3,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":3,"title":"Input Override","slug":"input-override","link":"#input-override","children":[]},{"level":3,"title":"Resend state and attributes","slug":"resend-state-and-attributes","link":"#resend-state-and-attributes","children":[]}]},{"level":2,"title":"Inputs","slug":"inputs","link":"#inputs","children":[{"level":3,"title":"state","slug":"state-1","link":"#state-1","children":[]},{"level":3,"title":"attributes","slug":"attributes-1","link":"#attributes-1","children":[]}]}],"git":{"updatedTime":1723606857000,"contributors":[{"name":"Jason","email":"37859597+zachowj@users.noreply.github.com","commits":7},{"name":"Mikko Tervala","email":"miksu103@gmail.com","commits":1}]},"filePathRelative":"node/sensor.md"}');export{g as comp,f as data};
