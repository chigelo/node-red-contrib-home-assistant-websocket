import{_ as r,c as d,a as t,d as n,b as i,w as o,e as u,r as s,o as p}from"./app-CefLgoES.js";const c={},h={id:"entity-id",tabindex:"-1"},f={class:"header-anchor",href:"#entity-id"};function g(y,e){const a=s("Badge"),l=s("RouteLink");return p(),d("div",null,[e[5]||(e[5]=t("h1",{id:"current-state",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#current-state"},[t("span",null,"Current State")])],-1)),e[6]||(e[6]=t("p",null,"This node is used to fetch the last known state of any entity within Home Assistant when it receives an input. It’s useful for making decisions based on the current status of entities, such as checking if a light is already on before turning it off, or determining the temperature reading before adjusting the thermostat.",-1)),e[7]||(e[7]=t("h2",{id:"configuration",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#configuration"},[t("span",null,"Configuration")])],-1)),t("h3",h,[t("a",f,[t("span",null,[e[0]||(e[0]=n("Entity ID ")),i(a,{text:"required"})])])]),t("ul",null,[e[3]||(e[3]=t("li",null,[n("Type: "),t("code",null,"string")],-1)),t("li",null,[e[2]||(e[2]=n("Accepts ")),i(l,{to:"/guide/mustache-templates.html"},{default:o(()=>e[1]||(e[1]=[n("Mustache Templates")])),_:1})])]),e[8]||(e[8]=t("p",null,"The id of the entity to return.",-1)),e[9]||(e[9]=t("h3",{id:"if-state",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#if-state"},[t("span",null,"If State")])],-1)),e[10]||(e[10]=t("ul",null,[t("li",null,[n("Type: "),t("code",null,"string")])],-1)),e[11]||(e[11]=t("p",null,"If the conditional statement is evaluated as true send the message to the first output otherwise send it to the second output. If blank there will only be one output.",-1)),e[12]||(e[12]=t("p",null,[t("strong",null,"Also see:")],-1)),t("ul",null,[t("li",null,[i(l,{to:"/guide/conditionals.html"},{default:o(()=>e[4]||(e[4]=[n("Conditionals")])),_:1})])]),e[13]||(e[13]=u('<h3 id="for" tabindex="-1"><a class="header-anchor" href="#for"><span>For</span></a></h3><ul><li>Type: <code>number</code></li></ul><p>The amount of time the entity state needs to have been constant for the &quot;If state&quot; to be <code>true</code></p><h3 id="state-type" tabindex="-1"><a class="header-anchor" href="#state-type"><span>State Type</span></a></h3><ul><li>Type: <code>string</code></li><li>Values: <code>string|number|boolean</code></li><li>Default: <code>string</code></li></ul><p>Convert the state of the entity to the selected type. Boolean will be converted to true based on if the string is equal by default to (<code>y|yes|true|on|home|open</code>). Original value stored in <code>msg.data.original_state</code></p><h3 id="block-input-overrides" tabindex="-1"><a class="header-anchor" href="#block-input-overrides"><span>Block Input Overrides</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Stop <code>msg.payload</code> values from overriding local config</p><h2 id="inputs" tabindex="-1"><a class="header-anchor" href="#inputs"><span>Inputs</span></a></h2><h3 id="payload-entityid" tabindex="-1"><a class="header-anchor" href="#payload-entityid"><span>payload.entityId</span></a></h3><ul><li><p>Type : <code>string</code></p><p>Overrides or sets the entity id for which the current state is being fetched</p></li></ul><h2 id="outputs" tabindex="-1"><a class="header-anchor" href="#outputs"><span>Outputs</span></a></h2><p>Value types:</p><ul><li><code>entity</code>: full entity object</li><li><code>entity id</code>: entity id of the triggered entity</li><li><code>entity state</code>: entity state of the triggered entity</li><li><code>config</code>: config properties of the node</li></ul><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references"><span>References</span></a></h2><ul><li><a href="https://home-assistant.io/docs/configuration/state_object/" target="_blank" rel="noopener noreferrer">Home Assistant State Objects</a></li></ul>',17))])}const b=r(c,[["render",g],["__file","current-state.html.vue"]]),v=JSON.parse('{"path":"/node/current-state.html","title":"Current State","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[{"level":3,"title":"Entity ID","slug":"entity-id","link":"#entity-id","children":[]},{"level":3,"title":"If State","slug":"if-state","link":"#if-state","children":[]},{"level":3,"title":"For","slug":"for","link":"#for","children":[]},{"level":3,"title":"State Type","slug":"state-type","link":"#state-type","children":[]},{"level":3,"title":"Block Input Overrides","slug":"block-input-overrides","link":"#block-input-overrides","children":[]}]},{"level":2,"title":"Inputs","slug":"inputs","link":"#inputs","children":[{"level":3,"title":"payload.entityId","slug":"payload-entityid","link":"#payload-entityid","children":[]}]},{"level":2,"title":"Outputs","slug":"outputs","link":"#outputs","children":[]},{"level":2,"title":"References","slug":"references","link":"#references","children":[]}],"git":{"updatedTime":1725861627000,"contributors":[{"name":"Jason","email":"37859597+zachowj@users.noreply.github.com","commits":8},{"name":"Simon Kaiser","email":"simon@emperor.ch","commits":1},{"name":"jason","email":"37859597+zachowj@users.noreply.github.com","commits":1}]},"filePathRelative":"node/current-state.md"}');export{b as comp,v as data};
