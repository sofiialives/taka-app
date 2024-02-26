import{a as c,d,e as S,u as x,r as _,j as r,B as E,I as N}from"./index-DLM_LoTc.js";import{C,a as P,N as z,F as V,b as K}from"./ContactForm.styled-CGkQ3doy.js";import{E as B}from"./EmailList-DuV7bpA3.js";import{a as $}from"./HeroSection.styled-BqWFDsTN.js";const a={origin:"https://api.emailjs.com",blockHeadless:!1},g=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},q=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=g(e);a.publicKey=s.publicKey,a.blockHeadless=s.blockHeadless,a.blockList=s.blockList,a.limitRate=s.limitRate,a.origin=s.origin||t};class m{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const k=async(e,t,s={})=>{const o=await fetch(a.origin+e,{method:"POST",headers:s,body:t}),i=await o.text(),n=new m(o.status,i);if(o.ok)return n;throw n},v=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},A=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},w=e=>e.webdriver||!e.languages||e.languages.length===0,L=()=>new m(451,"Unavailable For Headless Browser"),O=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},D=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},I=(e,t)=>e instanceof FormData?e.get(t):e[t],T=(e,t)=>{if(D(e))return!1;O(e.list,e.watchVariable);const s=I(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},F=()=>new m(403,"Forbidden"),M=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},Z=(e,t,s)=>{const o=Number(s.getItem(e)||0);return t-Date.now()+o},j=(e,t,s)=>{setTimeout(()=>{s.removeItem(e)},t)},R=(e,t,s)=>{if(!s.throttle)return!1;M(s.throttle,s.id);const o=s.id||t,i=Z(o,s.throttle,e);return i>0?(j(o,i,e),!0):(e.setItem(o,Date.now().toString()),j(o,s.throttle,e),!1)},H=()=>new m(429,"Too Many Requests"),J=(e,t,s,o)=>{const i=g(o),n=i.publicKey||a.publicKey,p=i.blockHeadless||a.blockHeadless,u={...a.blockList,...i.blockList},h={...a.limitRate,...i.limitRate};return p&&w(navigator)?Promise.reject(L()):(v(n,e,t),A(s),s&&T(u,s)?Promise.reject(F()):R(localStorage,location.pathname,h)?Promise.reject(H()):k("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:n,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},W=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},U=e=>typeof e=="string"?document.querySelector(e):e,Q=(e,t,s,o)=>{const i=g(o),n=i.publicKey||a.publicKey,p=i.blockHeadless||a.blockHeadless,u={...a.blockList,...i.blockList},h={...a.limitRate,...i.limitRate};if(p&&w(navigator))return Promise.reject(L());const b=U(s);v(n,e,t),W(b);const l=new FormData(b);return T(u,l)?Promise.reject(F()):R(localStorage,location.pathname,h)?Promise.reject(H()):(l.append("lib_version","4.1.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",n),k("/api/v1.0/email/send-form",l))},X={init:q,send:J,sendForm:Q},f=c.p`
  font-family: var(--montserrat-font-regular);
  font-size: 12px;
  color: var(--stack-color);
  margin-bottom: 4px;
  @media ${d.desktop} {
    margin-bottom: 8px;
  }
`,G=c.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media ${d.desktop} {
    display: block;
  }
`,y=c.input`
  width: 100%;
  height: 40px;
  border: 1px solid var(--form-input);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0 12px;
  @media ${d.desktop} {
    width: 400px;
    height: 58px;
  }
`,Y=c.button`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 14px;
  color: var(--bg-color);
  padding: 21px 0;
  display: flex;
  justify-content: center;
  background-color: var(--form-btn);
  border-radius: 12px;
  margin-top: 12px;
  cursor: pointer;
  @media ${d.desktop} {
    font-family: var(--lato-font-regular);
    font-size: 16px;
    line-height: 1.4;
    padding: 18px 36px;
    margin-top: 24px;
    text-transform: uppercase;
  }
`,ee=c.textarea`
  width: 100%;
  height: 130px;
  border: 1px solid var(--form-input);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 12px;
  resize: none;
`,te=c.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media ${d.desktop} {
    flex-direction: row;
    gap: 20px;
    margin-bottom: 20px;
  }
`,se=()=>{const e=S(),{t}=x(),s=_.useRef(),o=i=>{i.preventDefault(),X.sendForm("service_5iiiovo","template_u0cnr98",s.current,{publicKey:"XdZgWkRPqJU3nI6iF"}).then(()=>{e("/email")},()=>{E.error(`${t("contacts.notifyError")}`)}),s.current.reset()};return r.jsxs(G,{ref:s,onSubmit:o,children:[r.jsxs(te,{children:[r.jsxs("label",{children:[r.jsx(f,{children:t("contacts.name")}),r.jsx(y,{type:"text",name:"user_name"})]}),r.jsxs("label",{children:[r.jsx(f,{children:"Email"}),r.jsx(y,{type:"email",name:"user_email",pattern:"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"})]})]}),r.jsxs("label",{children:[r.jsx(f,{children:t("contacts.message")}),r.jsx(ee,{name:"message"})]}),r.jsx(Y,{type:"submit",children:t("contacts.send")})]})},re=()=>{const{t:e}=x();return r.jsx(C,{className:"section",children:r.jsxs(P,{className:"container",children:[r.jsx(z,{to:"/",children:r.jsx(N,{id:"logo",className:"logo-icon"})}),r.jsxs("div",{children:[r.jsx(V,{children:e("contacts.message")}),r.jsx(K,{children:e("contacts.question")}),r.jsx(se,{})]}),r.jsx(B,{})]})})},oe="/taka-app/assets/heroContacts-ClWmEiW7.jpg",ie=c.section`
  display: none;
  @media ${d.desktop} {
    display: block;
    background-image: url(${oe});
    background-repeat: no-repeat;
    background-size: cover;
  }
`,ae=()=>{const{t:e}=x();return r.jsx(ie,{className:"hero-section",children:r.jsx("div",{className:"container",children:r.jsx($,{children:e("hero.contacts")})})})},me=()=>r.jsxs("section",{children:[r.jsx(ae,{}),r.jsx(re,{})]});export{me as default};
