import{u as c,d,c as S,a as x,b as _,j as r,I as E}from"./index-BVmqSKzz.js";import{C as N,a as C,N as P,F as z,b as V}from"./ContactForm.styled-C8bDLQ74.js";import{E as K}from"./EmailList-CbpDDJhC.js";import{a as q}from"./HeroSection.styled-REw4NI4u.js";import{m as B}from"./motion-DbMKSKlU.js";const a={origin:"https://api.emailjs.com",blockHeadless:!1},g=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},$=(t,e="https://api.emailjs.com")=>{if(!t)return;const s=g(t);a.publicKey=s.publicKey,a.blockHeadless=s.blockHeadless,a.blockList=s.blockList,a.limitRate=s.limitRate,a.origin=s.origin||e};class m{constructor(e=0,s="Network Error"){this.status=e,this.text=s}}const k=async(t,e,s={})=>{const i=await fetch(a.origin+t,{method:"POST",headers:s,body:e}),o=await i.text(),n=new m(i.status,o);if(i.ok)return n;throw n},v=(t,e,s)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},A=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},w=t=>t.webdriver||!t.languages||t.languages.length===0,L=()=>new m(451,"Unavailable For Headless Browser"),O=(t,e)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},D=t=>{var e;return!((e=t.list)!=null&&e.length)||!t.watchVariable},I=(t,e)=>t instanceof FormData?t.get(e):t[e],T=(t,e)=>{if(D(t))return!1;O(t.list,t.watchVariable);const s=I(e,t.watchVariable);return typeof s!="string"?!1:t.list.includes(s)},F=()=>new m(403,"Forbidden"),M=(t,e)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a string"},Z=(t,e,s)=>{const i=Number(s.getItem(t)||0);return e-Date.now()+i},j=(t,e,s)=>{setTimeout(()=>{s.removeItem(t)},e)},R=(t,e,s)=>{if(!s.throttle)return!1;M(s.throttle,s.id);const i=s.id||e,o=Z(i,s.throttle,t);return o>0?(j(i,o,t),!0):(t.setItem(i,Date.now().toString()),j(i,s.throttle,t),!1)},H=()=>new m(429,"Too Many Requests"),J=(t,e,s,i)=>{const o=g(i),n=o.publicKey||a.publicKey,p=o.blockHeadless||a.blockHeadless,u={...a.blockList,...o.blockList},h={...a.limitRate,...o.limitRate};return p&&w(navigator)?Promise.reject(L()):(v(n,t,e),A(s),s&&T(u,s)?Promise.reject(F()):R(localStorage,location.pathname,h)?Promise.reject(H()):k("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:n,service_id:t,template_id:e,template_params:s}),{"Content-type":"application/json"}))},W=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},U=t=>typeof t=="string"?document.querySelector(t):t,Q=(t,e,s,i)=>{const o=g(i),n=o.publicKey||a.publicKey,p=o.blockHeadless||a.blockHeadless,u={...a.blockList,...o.blockList},h={...a.limitRate,...o.limitRate};if(p&&w(navigator))return Promise.reject(L());const b=U(s);v(n,t,e),W(b);const l=new FormData(b);return T(u,l)?Promise.reject(F()):R(localStorage,location.pathname,h)?Promise.reject(H()):(l.append("lib_version","4.1.0"),l.append("service_id",t),l.append("template_id",e),l.append("user_id",n),k("/api/v1.0/email/send-form",l))},X={init:$,send:J,sendForm:Q},f=c.p`
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
`,tt=c.textarea`
  width: 100%;
  height: 130px;
  border: 1px solid var(--form-input);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 12px;
  resize: none;
`,et=c.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media ${d.desktop} {
    flex-direction: row;
    gap: 20px;
    margin-bottom: 20px;
  }
`,st=()=>{const t=S(),{t:e}=x(),s=_.useRef(),i=o=>{o.preventDefault(),X.sendForm("service_5iiiovo","template_u0cnr98",s.current,{publicKey:"XdZgWkRPqJU3nI6iF"}).then(()=>{t("/email")}),s.current.reset()};return r.jsxs(G,{ref:s,onSubmit:i,children:[r.jsxs(et,{children:[r.jsxs("label",{children:[r.jsx(f,{children:e("contacts.name")}),r.jsx(y,{type:"text",name:"user_name"})]}),r.jsxs("label",{children:[r.jsx(f,{children:"Email"}),r.jsx(y,{type:"email",name:"user_email",pattern:"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"})]})]}),r.jsxs("label",{children:[r.jsx(f,{children:e("contacts.message")}),r.jsx(tt,{name:"message"})]}),r.jsx(Y,{type:"submit",children:e("contacts.send")})]})},rt=()=>{const{t}=x();return r.jsx(N,{className:"section",children:r.jsxs(C,{className:"container",children:[r.jsx(P,{to:"/",children:r.jsx(E,{id:"logo",className:"logo-icon"})}),r.jsxs("div",{children:[r.jsx(z,{children:t("contacts.message")}),r.jsx(V,{children:t("contacts.question")}),r.jsx(st,{})]}),r.jsx(K,{})]})})},it="/taka-app/assets/heroContacts-ClWmEiW7.jpg",ot=c.section`
  display: none;
  @media ${d.desktop} {
    display: block;
    background-image: url(${it});
    background-repeat: no-repeat;
    background-size: cover;
  }
`,at=()=>{const{t}=x();return r.jsx(ot,{className:"hero-section",children:r.jsx("div",{className:"container",children:r.jsx(q,{children:t("hero.contacts")})})})},pt=()=>r.jsxs(B.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:2.5},children:[r.jsx(at,{}),r.jsx(rt,{})]});export{pt as default};
