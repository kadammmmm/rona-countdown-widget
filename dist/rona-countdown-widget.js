var RonaCountdownWidget=function(){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(i,t,s)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,g=u.trustedTypes,_=g?g.emptyScript:"",f=u.reactiveElementPolyfillSupport,m=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>!a(t,e),$={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:v};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);n?.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{if(e)s.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of i){const i=document.createElement("style"),n=t.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:w).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=i;const r=n.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(void 0!==t){const r=this.constructor;if(!1===i&&(n=this[t]),s??=r.getPropertyOptions(t),!((s.hasChanged??v)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[m("elementProperties")]=new Map,y[m("finalized")]=new Map,f?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const A=globalThis,b=t=>t,x=A.trustedTypes,S=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+k,R=`<${C}>`,T=document,P=()=>T.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,M="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,H=/>/g,I=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,z=/"/g,L=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),j=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),q=new WeakMap,K=T.createTreeWalker(T,129);function G(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const F=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=U;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,h=0;for(;h<s.length&&(o.lastIndex=h,l=o.exec(s),null!==l);)h=o.lastIndex,o===U?"!--"===l[1]?o=D:void 0!==l[1]?o=H:void 0!==l[2]?(L.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=I):void 0!==l[3]&&(o=I):o===I?">"===l[0]?(o=n??U,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?I:'"'===l[3]?z:W):o===z||o===W?o=I:o===D||o===H?o=U:(o=I,n=void 0);const d=o===I&&t[e+1].startsWith("/>")?" ":"";r+=o===U?s+R:c>=0?(i.push(a),s.slice(0,c)+E+s.slice(c)+k+d):s+k+(-2===c?e:d)}return[G(t,r+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class X{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,c]=F(t,e);if(this.el=X.createElement(l,s),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=K.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=c[r++],s=i.getAttribute(t).split(k),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:s,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?st:Q}),i.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:n}),i.removeAttribute(t));if(L.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],P()),K.nextNode(),a.push({type:2,index:++n});i.append(t[e],P())}}}else if(8===i.nodeType)if(i.data===C)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)a.push({type:7,index:n}),t+=k.length-1}n++}}static createElement(t,e){const s=T.createElement("template");return s.innerHTML=t,s}}function J(t,e,s=t,i){if(e===j)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=O(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=J(t,n._$AS(t,e.values),n,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);K.currentNode=i;let n=K.nextNode(),r=0,o=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Z(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new it(n,this,t)),this._$AV.push(e),a=s[++o]}r!==a?.index&&(n=K.nextNode(),r++)}return K.currentNode=T,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),O(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=X.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Y(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new X(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new Z(this.O(P()),this.O(P()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=b(t).nextSibling;b(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=B}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=J(this,t,e,0),r=!O(t)||t!==this._$AH&&t!==j,r&&(this._$AH=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=J(this,i[s+o],e,o),a===j&&(a=this._$AH[o]),r||=!O(a)||a!==this._$AH[o],a===B?t=B:t!==B&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class st extends Q{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??B)===j)return;const s=this._$AH,i=t===B&&s!==B||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==B&&(s===B||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const nt=A.litHtmlPolyfillSupport;nt?.(X,Z),(A.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class ot extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new Z(e.insertBefore(P(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return j}}ot._$litElement$=!0,ot.finalized=!0,rt.litElementHydrateSupport?.({LitElement:ot});const at=rt.litElementPolyfillSupport;at?.({LitElement:ot}),(rt.litElementVersions??=[]).push("4.2.2");class lt extends ot{static properties={_isRona:{state:!0},_countdown:{state:!0},_isShaking:{state:!0},_dramaMeter:{state:!0},_currentAgentState:{state:!0},_showRecoveryMessage:{state:!0}};static styles=r`
    :host {
      display: block;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      --danger-red: #ff0a0a;
      --danger-red-dark: #8b0000;
      --warning-orange: #ff6600;
      --warning-yellow: #ffcc00;
      --safe-green: #00ff88;
      --background-dark: #1a1a2e;
      --text-glow: 0 0 8px currentColor, 0 0 16px currentColor;
      height: 100%;
      max-height: 48px;
    }

    /* Main container - fits within 48px header */
    .widget-container {
      position: relative;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      border-radius: 6px;
      border: 1px solid #2a2a4e;
      height: 36px;
      max-height: 36px;
      box-sizing: border-box;
      transition: all 0.3s ease;
      overflow: hidden;
    }

    /* RONA Active State - Dramatic but contained */
    .widget-container.rona-active {
      background: linear-gradient(135deg, #4a0a0a 0%, #2a0505 100%);
      border-color: var(--danger-red);
      box-shadow: 
        0 0 15px rgba(255, 10, 10, 0.6),
        0 0 30px rgba(255, 10, 10, 0.3),
        inset 0 0 15px rgba(255, 10, 10, 0.2);
      animation: containerPulse 0.5s ease-in-out infinite alternate;
    }

    .widget-container.rona-active.shake {
      animation: containerPulse 0.5s ease-in-out infinite alternate, shake 0.1s linear infinite;
    }

    .widget-container.recovery {
      background: linear-gradient(135deg, #0a2a0a 0%, #051a05 100%);
      border-color: var(--safe-green);
      box-shadow: 0 0 15px rgba(0, 255, 136, 0.5);
    }

    @keyframes containerPulse {
      from {
        border-color: var(--danger-red);
        box-shadow: 
          0 0 15px rgba(255, 10, 10, 0.6),
          0 0 30px rgba(255, 10, 10, 0.3);
      }
      to {
        border-color: var(--warning-orange);
        box-shadow: 
          0 0 20px rgba(255, 102, 0, 0.7),
          0 0 40px rgba(255, 10, 10, 0.4);
      }
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-2px); }
      75% { transform: translateX(2px); }
    }

    /* Alert Icon */
    .alert-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }

    .status-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--safe-green);
      box-shadow: 0 0 6px var(--safe-green);
      transition: all 0.3s ease;
    }

    .status-dot.rona {
      width: 12px;
      height: 12px;
      background: var(--danger-red);
      animation: dotPulse 0.3s ease-in-out infinite alternate;
    }

    .status-dot.recovery {
      background: var(--safe-green);
      animation: dotGlow 0.5s ease-in-out infinite;
    }

    @keyframes dotPulse {
      from {
        box-shadow: 0 0 4px var(--danger-red), 0 0 8px var(--danger-red);
        transform: scale(1);
      }
      to {
        box-shadow: 0 0 8px var(--danger-red), 0 0 16px var(--danger-red), 0 0 24px var(--danger-red);
        transform: scale(1.15);
      }
    }

    @keyframes dotGlow {
      0%, 100% { box-shadow: 0 0 6px var(--safe-green); }
      50% { box-shadow: 0 0 12px var(--safe-green), 0 0 20px var(--safe-green); }
    }

    /* Warning Triangle for RONA */
    .warning-triangle {
      width: 0;
      height: 0;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      border-bottom: 20px solid var(--warning-yellow);
      position: relative;
      animation: trianglePulse 0.4s ease-in-out infinite alternate;
      filter: drop-shadow(0 0 6px var(--warning-yellow));
    }

    .warning-triangle::after {
      content: '!';
      position: absolute;
      top: 5px;
      left: -3px;
      font-size: 11px;
      font-weight: 900;
      color: #000;
    }

    @keyframes trianglePulse {
      from { 
        filter: drop-shadow(0 0 4px var(--warning-yellow));
        transform: scale(1);
      }
      to { 
        filter: drop-shadow(0 0 10px var(--warning-orange));
        transform: scale(1.1);
      }
    }

    /* Countdown Display */
    .countdown-section {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .countdown-number {
      font-family: 'Consolas', 'Monaco', monospace;
      font-size: 22px;
      font-weight: 900;
      color: var(--danger-red);
      text-shadow: var(--text-glow);
      min-width: 28px;
      text-align: center;
      animation: numberPulse 1s ease-in-out infinite;
    }

    .countdown-number.critical {
      color: var(--warning-yellow);
      font-size: 24px;
      animation: numberCritical 0.2s ease-in-out infinite alternate;
    }

    .countdown-number.danger {
      color: #ff0000;
      animation: numberDanger 0.15s linear infinite;
    }

    @keyframes numberPulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.85; }
    }

    @keyframes numberCritical {
      from { 
        transform: scale(1);
        text-shadow: 0 0 8px var(--warning-yellow), 0 0 16px var(--warning-orange);
      }
      to { 
        transform: scale(1.08);
        text-shadow: 0 0 12px var(--warning-yellow), 0 0 24px var(--danger-red);
      }
    }

    @keyframes numberDanger {
      0%, 100% { transform: scale(1); filter: brightness(1); }
      50% { transform: scale(1.05); filter: brightness(1.3); }
    }

    .countdown-unit {
      font-size: 10px;
      font-weight: 600;
      color: rgba(255, 100, 100, 0.9);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    /* Status Label */
    .status-label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #8a8aaa;
      white-space: nowrap;
    }

    .status-label.rona {
      color: var(--danger-red);
      text-shadow: 0 0 8px rgba(255, 10, 10, 0.8);
      animation: labelBlink 0.5s ease-in-out infinite alternate;
    }

    .status-label.recovery {
      color: var(--safe-green);
      text-shadow: 0 0 8px rgba(0, 255, 136, 0.8);
    }

    @keyframes labelBlink {
      from { opacity: 0.7; }
      to { opacity: 1; }
    }

    /* Progress Bar (fits at bottom of container) */
    .progress-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: rgba(255, 255, 255, 0.1);
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--danger-red), var(--warning-orange), var(--warning-yellow));
      transition: width 1s linear;
      box-shadow: 0 0 8px var(--danger-red);
    }

    .progress-fill.critical {
      background: linear-gradient(90deg, var(--warning-yellow), var(--danger-red));
      animation: progressPulse 0.3s ease-in-out infinite alternate;
    }

    @keyframes progressPulse {
      from { box-shadow: 0 0 8px var(--warning-yellow); }
      to { box-shadow: 0 0 16px var(--danger-red); }
    }

    /* Drama Meter - Small dots */
    .drama-meter {
      display: flex;
      gap: 2px;
      margin-left: 4px;
    }

    .drama-dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #333;
      transition: all 0.3s ease;
    }

    .drama-dot.active {
      background: var(--danger-red);
      box-shadow: 0 0 4px var(--danger-red);
    }

    .drama-dot.active.critical {
      background: var(--warning-yellow);
      box-shadow: 0 0 6px var(--warning-yellow);
    }

    /* Recovery checkmark */
    .recovery-check {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--safe-green);
      color: #000;
      font-size: 12px;
      font-weight: 900;
      animation: checkPop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 0 10px var(--safe-green);
    }

    @keyframes checkPop {
      from { transform: scale(0); }
      to { transform: scale(1); }
    }

    /* Scanline effect overlay - subtle */
    .scanlines {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.03) 0px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px,
        transparent 2px
      );
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .widget-container.rona-active .scanlines {
      opacity: 1;
      animation: scanMove 0.1s linear infinite;
    }

    @keyframes scanMove {
      from { transform: translateY(0); }
      to { transform: translateY(2px); }
    }

    /* Hidden state */
    .hidden {
      display: none !important;
    }
  `;constructor(){super(),this._isRona=!1,this._countdown=30,this._isShaking=!1,this._dramaMeter=0,this._currentAgentState="Unknown",this._showRecoveryMessage=!1,this._countdownInterval=null,this._recoveryTimeout=null,this._desktop=null}connectedCallback(){super.connectedCallback(),this._initializeDesktopSDK()}disconnectedCallback(){super.disconnectedCallback(),this._cleanup()}async _initializeDesktopSDK(){try{void 0!==window.WCC&&void 0!==window.WCC.Desktop||(console.log("[RONA Widget] Waiting for Desktop SDK..."),await this._waitForDesktopSDK()),this._desktop=window.WCC.Desktop,await this._desktop.agentContact.init(),console.log("[RONA Widget] Desktop SDK initialized"),this._desktop.agentStateInfo.addEventListener("updated",t=>{this._handleAgentStateChange(t)});const t=await this._desktop.agentStateInfo.latestData;t&&(this._currentAgentState=t.subStatus||t.status||"Unknown",console.log("[RONA Widget] Initial state:",this._currentAgentState))}catch(t){console.error("[RONA Widget] SDK initialization error:",t),this._setupDemoMode()}}_waitForDesktopSDK(t=1e4){return new Promise((e,s)=>{const i=Date.now(),n=()=>{void 0!==window.WCC&&void 0!==window.WCC.Desktop?e():Date.now()-i>t?s(new Error("Desktop SDK not available")):setTimeout(n,100)};n()})}_setupDemoMode(){console.log("[RONA Widget] Running in demo mode"),this.addEventListener("dblclick",()=>{this._isRona||this._triggerRona()})}_handleAgentStateChange(t){const e=t.subStatus||t.status||"Unknown";console.log("[RONA Widget] State changed:",this._currentAgentState,"->",e),this._currentAgentState=e,"RONA"!==e.toUpperCase()||this._isRona?this._isRona&&"RONA"!==e.toUpperCase()&&this._cancelRona():this._triggerRona()}_triggerRona(){console.log("[RONA Widget] RONA TRIGGERED! Starting countdown..."),this._isRona=!0,this._countdown=30,this._dramaMeter=0,this._isShaking=!1,this._playAlertSound(),this._countdownInterval=setInterval(()=>{this._countdown--,this._dramaMeter=Math.floor((30-this._countdown)/3),this._countdown<=10&&(this._isShaking=!0),this._countdown<=10&&this._countdown>0&&this._playTickSound(),this._countdown<=0&&this._autoRecover(),this.requestUpdate()},1e3)}async _autoRecover(){console.log("[RONA Widget] Auto-recovering to Available state..."),this._cleanup();try{this._desktop&&(await this._desktop.agentStateInfo.stateChange({state:"Available",auxCodeId:null}),console.log("[RONA Widget] Successfully set state to Available"))}catch(t){console.error("[RONA Widget] Failed to auto-recover:",t)}this._showRecoveryMessage=!0,this._isRona=!1,this.requestUpdate(),this._recoveryTimeout=setTimeout(()=>{this._showRecoveryMessage=!1,this.requestUpdate()},3e3)}_cancelRona(){console.log("[RONA Widget] RONA cancelled - agent changed state manually"),this._cleanup(),this._isRona=!1,this._showRecoveryMessage=!1,this.requestUpdate()}_cleanup(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null),this._recoveryTimeout&&(clearTimeout(this._recoveryTimeout),this._recoveryTimeout=null)}_playAlertSound(){try{const t=new(window.AudioContext||window.webkitAudioContext),e=t.createOscillator(),s=t.createGain();e.connect(s),s.connect(t.destination),e.frequency.setValueAtTime(880,t.currentTime),e.frequency.setValueAtTime(440,t.currentTime+.1),e.frequency.setValueAtTime(880,t.currentTime+.2),s.gain.setValueAtTime(.3,t.currentTime),s.gain.exponentialRampToValueAtTime(.01,t.currentTime+.3),e.start(t.currentTime),e.stop(t.currentTime+.3)}catch(t){console.log("[RONA Widget] Audio not available")}}_playTickSound(){try{const t=new(window.AudioContext||window.webkitAudioContext),e=t.createOscillator(),s=t.createGain();e.connect(s),s.connect(t.destination),e.frequency.setValueAtTime(1200,t.currentTime),s.gain.setValueAtTime(.1,t.currentTime),s.gain.exponentialRampToValueAtTime(.01,t.currentTime+.05),e.start(t.currentTime),e.stop(t.currentTime+.05)}catch(t){}}_getCountdownClass(){return this._countdown<=5?"danger":this._countdown<=10?"critical":""}_getWarningMessage(){return this._countdown<=5?"⚠️ FINAL WARNING ⚠️":this._countdown<=10?"TIME IS RUNNING OUT!":this._countdown<=20?"RETURN TO AVAILABLE STATE":"MISSED CALL DETECTED"}render(){const t=this._isRona?(30-this._countdown)/30*100:0;return V`
      <div class="widget-container ${this._isRona?"rona-active":""} ${this._isShaking?"shake":""} ${this._showRecoveryMessage?"recovery":""}">
        
        <!-- Scanlines overlay for RONA state -->
        <div class="scanlines"></div>
        
        <!-- Icon Section -->
        <div class="alert-icon">
          ${this._isRona?V`
            <div class="warning-triangle"></div>
          `:this._showRecoveryMessage?V`
            <div class="recovery-check">✓</div>
          `:V`
            <div class="status-dot"></div>
          `}
        </div>

        <!-- Content Section -->
        ${this._isRona?V`
          <!-- RONA Active: Show countdown -->
          <div class="countdown-section">
            <span class="countdown-number ${this._getCountdownClass()}">${this._countdown}</span>
            <span class="countdown-unit">sec</span>
          </div>
          <span class="status-label rona">RONA</span>
          
          <!-- Drama meter dots -->
          <div class="drama-meter">
            ${[...Array(5)].map((t,e)=>V`
              <div class="drama-dot ${e<Math.ceil(this._dramaMeter/2)?"active":""} ${this._countdown<=10?"critical":""}"></div>
            `)}
          </div>
        `:this._showRecoveryMessage?V`
          <!-- Recovery: Show success -->
          <span class="status-label recovery">RECOVERED!</span>
        `:V`
          <!-- Normal: Show current state -->
          <span class="status-label">${this._currentAgentState}</span>
        `}

        <!-- Progress bar at bottom -->
        ${this._isRona?V`
          <div class="progress-bar">
            <div class="progress-fill ${this._countdown<=10?"critical":""}" style="width: ${t}%"></div>
          </div>
        `:""}
      </div>
    `}}return customElements.define("rona-countdown-widget",lt),lt}();
//# sourceMappingURL=rona-countdown-widget.js.map
