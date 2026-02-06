!function(){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(i,t,s)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:a,defineProperty:h,getOwnPropertyDescriptor:c,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,_=u.trustedTypes,f=_?_.emptyScript:"",g=u.reactiveElementPolyfillSupport,m=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},A=(t,e)=>!a(t,e),y={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:A};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&h(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);n?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...l(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{if(e)s.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of i){const i=document.createElement("style"),n=t.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:$).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=i;const o=n.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(void 0!==t){const o=this.constructor;if(!1===i&&(n=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??A)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[m("elementProperties")]=new Map,v[m("finalized")]=new Map,g?.({ReactiveElement:v}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const w=globalThis,b=t=>t,x=w.trustedTypes,S=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+R,C=`<${k}>`,T=document,M=()=>T.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,N="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,I=/>/g,H=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,z=/"/g,B=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),q=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),V=new WeakMap,K=T.createTreeWalker(T,129);function F(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const G=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=O;for(let e=0;e<s;e++){const s=t[e];let a,h,c=-1,l=0;for(;l<s.length&&(r.lastIndex=l,h=r.exec(s),null!==h);)l=r.lastIndex,r===O?"!--"===h[1]?r=D:void 0!==h[1]?r=I:void 0!==h[2]?(B.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=H):void 0!==h[3]&&(r=H):r===H?">"===h[0]?(r=n??O,c=-1):void 0===h[1]?c=-2:(c=r.lastIndex-h[2].length,a=h[1],r=void 0===h[3]?H:'"'===h[3]?z:L):r===z||r===L?r=H:r===D||r===I?r=O:(r=H,n=void 0);const d=r===H&&t[e+1].startsWith("/>")?" ":"";o+=r===O?s+C:c>=0?(i.push(a),s.slice(0,c)+E+s.slice(c)+R+d):s+R+(-2===c?e:d)}return[F(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class J{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[h,c]=G(t,e);if(this.el=J.createElement(h,s),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=K.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=c[o++],s=i.getAttribute(t).split(R),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:s,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?st:X}),i.removeAttribute(t)}else t.startsWith(R)&&(a.push({type:6,index:n}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(R),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],M()),K.nextNode(),a.push({type:2,index:++n});i.append(t[e],M())}}}else if(8===i.nodeType)if(i.data===k)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(R,t+1));)a.push({type:7,index:n}),t+=R.length-1}n++}}static createElement(t,e){const s=T.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){if(e===q)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const o=U(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=Y(t,n._$AS(t,e.values),n,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);K.currentNode=i;let n=K.nextNode(),o=0,r=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Q(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new it(n,this,t)),this._$AV.push(e),a=s[++r]}o!==a?.index&&(n=K.nextNode(),o++)}return K.currentNode=T,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),U(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==j&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=J.createElement(F(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Z(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new J(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new Q(this.O(M()),this.O(M()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=b(t).nextSibling;b(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=j}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=Y(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==q,o&&(this._$AH=t);else{const i=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Y(this,i[s+r],e,r),a===q&&(a=this._$AH[r]),o||=!U(a)||a!==this._$AH[r],a===j?t=j:t!==j&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!i&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==j)}}class st extends X{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??j)===q)return;const s=this._$AH,i=t===j&&s!==j||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==j&&(s===j||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const nt=w.litHtmlPolyfillSupport;nt?.(J,Q),(w.litHtmlVersions??=[]).push("3.3.2");const ot=globalThis;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class rt extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new Q(e.insertBefore(M(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}rt._$litElement$=!0,rt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:rt});const at=ot.litElementPolyfillSupport;at?.({LitElement:rt}),(ot.litElementVersions??=[]).push("4.2.2");const ht=()=>{if(window.WxccDesktopSDK)return window.WxccDesktopSDK;if(window.Desktop)return window.Desktop;throw new Error("WxCC Desktop SDK not available - running in demo mode?")};class ct extends rt{static styles=o`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .widget-container {
      width: 220px;
      height: 80px;
      background: rgba(30, 30, 50, 0.85);
      border-radius: 12px;
      border: 1px solid #3a3a5c;
      color: white;
      overflow: hidden;
      position: relative;
      box-shadow: 0 4px 15px rgba(0,0,0,0.4);
      transition: all 0.3s ease;
    }

    .widget-container.rona-active {
      background: linear-gradient(135deg, #8b0000, #ff0a0a);
      animation: pulse 2s infinite;
    }

    .widget-container.shake {
      animation: shake 0.5s;
    }

    .widget-container.recovery {
      background: linear-gradient(135deg, #006400, #00ff88);
      animation: successPulse 1.5s;
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.03); }
      100% { transform: scale(1); }
    }

    @keyframes shake {
      0% { transform: translate(1px, 1px) rotate(0deg); }
      10% { transform: translate(-1px, -2px) rotate(-1deg); }
      20% { transform: translate(-3px, 0px) rotate(1deg); }
      30% { transform: translate(3px, 2px) rotate(0deg); }
      40% { transform: translate(1px, -1px) rotate(1deg); }
      50% { transform: translate(-1px, 2px) rotate(-1deg); }
      60% { transform: translate(-3px, 1px) rotate(0deg); }
      70% { transform: translate(3px, 1px) rotate(-1deg); }
      80% { transform: translate(-1px, -1px) rotate(1deg); }
      90% { transform: translate(1px, 2px) rotate(0deg); }
      100% { transform: translate(1px, -2px) rotate(-1deg); }
    }

    @keyframes successPulse {
      0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,255,136,0.7); }
      70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(0,255,136,0); }
      100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,255,136,0); }
    }

    .scanlines {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: repeating-linear-gradient(
        to bottom,
        transparent 0%,
        rgba(255,255,255,0.03) 1px,
        transparent 2px
      );
      pointer-events: none;
      animation: scan 8s linear infinite;
    }

    @keyframes scan {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }

    .alert-icon {
      position: absolute;
      top: 12px;
      left: 16px;
      width: 48px;
      height: 48px;
    }

    .warning-triangle {
      width: 0;
      height: 0;
      border-left: 24px solid transparent;
      border-right: 24px solid transparent;
      border-bottom: 42px solid #ffff00;
      position: relative;
    }

    .warning-triangle::after {
      content: "!";
      position: absolute;
      top: 8px;
      left: -8px;
      font-size: 28px;
      color: #000;
      font-weight: bold;
    }

    .recovery-check {
      font-size: 48px;
      color: #00ff88;
      animation: checkFade 1.2s;
    }

    @keyframes checkFade {
      0% { opacity: 0; transform: scale(0.5); }
      60% { opacity: 1; transform: scale(1.2); }
      100% { opacity: 1; transform: scale(1); }
    }

    .status-dot {
      width: 48px;
      height: 48px;
      background: #00bceb;
      border-radius: 50%;
      box-shadow: 0 0 15px #00bceb;
    }

    .countdown-section {
      position: absolute;
      top: 10px;
      left: 70px;
      font-size: 32px;
      font-weight: bold;
    }

    .countdown-number {
      color: #ffff00;
    }

    .countdown-number.danger {
      color: #ff0a0a;
      animation: flash 0.8s infinite;
    }

    .countdown-number.critical {
      color: #ff6600;
      animation: flash 0.6s infinite;
    }

    @keyframes flash {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    .countdown-unit {
      font-size: 16px;
      vertical-align: super;
    }

    .status-label {
      position: absolute;
      bottom: 12px;
      left: 70px;
      font-size: 16px;
      font-weight: 600;
    }

    .status-label.rona {
      color: #ffff00;
    }

    .status-label.recovery {
      color: #00ff88;
      font-size: 20px;
    }

    .drama-meter {
      position: absolute;
      bottom: 8px;
      right: 12px;
      display: flex;
      gap: 4px;
    }

    .drama-dot {
      width: 8px;
      height: 8px;
      background: #444;
      border-radius: 50%;
      transition: all 0.3s;
    }

    .drama-dot.active {
      background: #ffff00;
      box-shadow: 0 0 8px #ffff00;
    }

    .drama-dot.critical {
      background: #ff0a0a;
      box-shadow: 0 0 12px #ff0a0a;
    }

    .progress-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: rgba(0,0,0,0.5);
    }

    .progress-fill {
      height: 100%;
      background: #ffff00;
      transition: width 1s linear;
    }

    .progress-fill.critical {
      background: #ff0a0a;
    }
  `;static properties={_isRona:{type:Boolean},_countdown:{type:Number},_isShaking:{type:Boolean},_dramaMeter:{type:Number},_showRecoveryMessage:{type:Boolean},_currentAgentState:{type:String},_isDemo:{type:Boolean}};constructor(){super(),this._isRona=!1,this._countdown=0,this._isShaking=!1,this._dramaMeter=0,this._showRecoveryMessage=!1,this._currentAgentState="Loading...",this._isDemo=!1,this._countdownInterval=null,this._sdkLogger=null}connectedCallback(){super.connectedCallback(),this._initSDK()}disconnectedCallback(){super.disconnectedCallback(),this._countdownInterval&&clearInterval(this._countdownInterval)}async _initSDK(){try{const t=ht();this._sdkLogger=t.logger.createLogger("rona-countdown-widget"),await t.config.init(),this._sdkLogger.info("Desktop SDK initialized successfully");const e=t.agentStateInfo.latestData?.state||"Unknown";this._currentAgentState=e,this._sdkLogger.info(`Initial agent state: ${e}`),this._isRonaState(e)&&this._triggerRona(),t.agentStateInfo.addEventListener("eAgentStateChange",t=>{const e=t.data?.state||"Unknown";this._currentAgentState=e,this._sdkLogger.info(`Agent state changed to: ${e}`),this._isRonaState(e)?this._triggerRona():this._isRona&&this._cancelRona(),this.requestUpdate()})}catch(t){console.error("[RONA Widget] SDK error:",t),this._enterDemoMode()}setTimeout(()=>{"Loading..."===this._currentAgentState&&this._enterDemoMode()},1e4)}_enterDemoMode(){this._isDemo=!0,this._currentAgentState="Available (Demo)",this.requestUpdate(),console.warn("[RONA Widget] Entered demo mode - SDK not detected")}_isRonaState(t){return"NOTRESPONDING"===t?.toUpperCase()}_triggerRona(){this._isRona||(this._isRona=!0,this._countdown=30,this._dramaMeter=0,this._isShaking=!0,this._showRecoveryMessage=!1,this._playAlertSound(),this._countdownInterval=setInterval(()=>{this._countdown--,this._dramaMeter=Math.min(this._dramaMeter+1,10),this._countdown<=10&&this._countdown>0&&this._playTickSound(),this._countdown<=0&&(clearInterval(this._countdownInterval),this._recoverFromRona()),this.requestUpdate()},1e3),this.requestUpdate())}async _recoverFromRona(){try{const t=ht();await t.agentStateInfo.stateChange({state:"Available",auxCodeId:null}),this._sdkLogger?.info("Auto-recovered from RONA to Available")}catch(t){this._sdkLogger?.error(`Auto-recovery failed: ${t.message}`),console.error("[RONA Widget] Recovery error:",t)}this._isRona=!1,this._isShaking=!1,this._showRecoveryMessage=!0,setTimeout(()=>{this._showRecoveryMessage=!1,this.requestUpdate()},4e3),this.requestUpdate()}_cancelRona(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null),this._isRona=!1,this._isShaking=!1,this._dramaMeter=0,this._showRecoveryMessage=!1,this.requestUpdate()}_playAlertSound(){try{const t=new(window.AudioContext||window.webkitAudioContext),e=t.createOscillator(),s=t.createGain();e.connect(s),s.connect(t.destination),e.frequency.setValueAtTime(1200,t.currentTime),s.gain.setValueAtTime(.1,t.currentTime),s.gain.exponentialRampToValueAtTime(.01,t.currentTime+.05),e.start(t.currentTime),e.stop(t.currentTime+.05)}catch(t){console.warn("Audio context error:",t)}}_playTickSound(){try{const t=new(window.AudioContext||window.webkitAudioContext),e=t.createOscillator(),s=t.createGain();e.connect(s),s.connect(t.destination),e.frequency.setValueAtTime(800,t.currentTime),s.gain.setValueAtTime(.05,t.currentTime),e.start(t.currentTime),e.stop(t.currentTime+.08)}catch(t){}}_getCountdownClass(){return this._countdown<=5?"danger":this._countdown<=10?"critical":""}_getWarningMessage(){return this._countdown<=5?"⚠️ FINAL WARNING ⚠️":this._countdown<=10?"TIME IS RUNNING OUT!":this._countdown<=20?"RETURN TO AVAILABLE STATE":"MISSED CALL DETECTED"}render(){const t=this._isRona?(30-this._countdown)/30*100:0;return W`
      <div class="widget-container 
        ${this._isRona?"rona-active":""} 
        ${this._isShaking?"shake":""} 
        ${this._showRecoveryMessage?"recovery":""}">

        ${this._isRona?W`<div class="scanlines"></div>`:""}

        <div class="alert-icon">
          ${this._isRona?W`<div class="warning-triangle"></div>`:this._showRecoveryMessage?W`<div class="recovery-check">✓</div>`:W`<div class="status-dot"></div>`}
        </div>

        ${this._isRona?W`
          <div class="countdown-section">
            <span class="countdown-number ${this._getCountdownClass()}">${this._countdown}</span>
            <span class="countdown-unit">sec</span>
          </div>
          <span class="status-label rona">RONA</span>

          <div class="drama-meter">
            ${[...Array(5)].map((t,e)=>W`
              <div class="drama-dot 
                ${e<Math.ceil(this._dramaMeter/2)?"active":""} 
                ${this._countdown<=10?"critical":""}">
              </div>
            `)}
          </div>
        `:this._showRecoveryMessage?W`
          <span class="status-label recovery">RECOVERED!</span>
        `:W`
          <span class="status-label">${this._currentAgentState}</span>
        `}

        ${this._isRona?W`
          <div class="progress-bar">
            <div class="progress-fill ${this._countdown<=10?"critical":""}" 
                 style="width: ${t}%"></div>
          </div>
        `:""}
      </div>
    `}}customElements.define("rona-countdown-widget",ct)}();
//# sourceMappingURL=rona-countdown-widget.js.map
