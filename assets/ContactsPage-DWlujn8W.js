import{u as c,d,c as S,a as x,b as _,j as r,B as E,I as N}from"./index-FnrkLLEN.js";import{C,a as P,N as z,F as V,b as K}from"./ContactForm.styled-DQD8xW15.js";import{E as B}from"./EmailList-CStui3wY.js";import{a as $}from"./HeroSection.styled-DpfKJ2J4.js";import{m as q}from"./motion-DQHXiz6O.js";const a={origin:"https://api.emailjs.com",blockHeadless:!1},g=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},A=(t,e="https://api.emailjs.com")=>{if(!t)return;const s=g(t);a.publicKey=s.publicKey,a.blockHeadless=s.blockHeadless,a.blockList=s.blockList,a.limitRate=s.limitRate,a.origin=s.origin||e};class m{constructor(e=0,s="Network Error"){this.status=e,this.text=s}}const k=async(t,e,s={})=>{const o=await fetch(a.origin+t,{method:"POST",headers:s,body:e}),i=await o.text(),n=new m(o.status,i);if(o.ok)return n;throw n},v=(t,e,s)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},O=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},w=t=>t.webdriver||!t.languages||t.languages.length===0,L=()=>new m(451,"Unavailable For Headless Browser"),D=(t,e)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},I=t=>{var e;return!((e=t.list)!=null&&e.length)||!t.watchVariable},M=(t,e)=>t instanceof FormData?t.get(e):t[e],T=(t,e)=>{if(I(t))return!1;D(t.list,t.watchVariable);const s=M(e,t.watchVariable);return typeof s!="string"?!1:t.list.includes(s)},F=()=>new m(403,"Forbidden"),Z=(t,e)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a string"},J=(t,e,s)=>{const o=Number(s.getItem(t)||0);return e-Date.now()+o},j=(t,e,s)=>{setTimeout(()=>{s.removeItem(t)},e)},R=(t,e,s)=>{if(!s.throttle)return!1;Z(s.throttle,s.id);const o=s.id||e,i=J(o,s.throttle,t);return i>0?(j(o,i,t),!0):(t.setItem(o,Date.now().toString()),j(o,s.throttle,t),!1)},H=()=>new m(429,"Too Many Requests"),W=(t,e,s,o)=>{const i=g(o),n=i.publicKey||a.publicKey,p=i.blockHeadless||a.blockHeadless,u={...a.blockList,...i.blockList},h={...a.limitRate,...i.limitRate};return p&&w(navigator)?Promise.reject(L()):(v(n,t,e),O(s),s&&T(u,s)?Promise.reject(F()):R(localStorage,location.pathname,h)?Promise.reject(H()):k("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:n,service_id:t,template_id:e,template_params:s}),{"Content-type":"application/json"}))},U=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Q=t=>typeof t=="string"?document.querySelector(t):t,X=(t,e,s,o)=>{const i=g(o),n=i.publicKey||a.publicKey,p=i.blockHeadless||a.blockHeadless,u={...a.blockList,...i.blockList},h={...a.limitRate,...i.limitRate};if(p&&w(navigator))return Promise.reject(L());const b=Q(s);v(n,t,e),U(b);const l=new FormData(b);return T(u,l)?Promise.reject(F()):R(localStorage,location.pathname,h)?Promise.reject(H()):(l.append("lib_version","4.1.0"),l.append("service_id",t),l.append("template_id",e),l.append("user_id",n),k("/api/v1.0/email/send-form",l))},G={init:A,send:W,sendForm:X},f=c.p`
  font-family: var(--montserrat-font-regular);
  font-size: 12px;
  color: var(--stack-color);
  margin-bottom: 4px;
  @media ${d.desktop} {
    margin-bottom: 8px;
  }
`,Y=c.form`
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
`,tt=c.button`
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
`,et=c.textarea`
  width: 100%;
  height: 130px;
  border: 1px solid var(--form-input);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 12px;
  resize: none;
`,st=c.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media ${d.desktop} {
    flex-direction: row;
    gap: 20px;
    margin-bottom: 20px;
  }
`,rt=()=>{const t=S(),{t:e}=x(),s=_.useRef(),o=i=>{i.preventDefault(),G.sendForm("service_5iiiovo","template_u0cnr98",s.current,{publicKey:"XdZgWkRPqJU3nI6iF"}).then(()=>{t("/email")},()=>{E.error(`${e("contacts.notifyError")}`)}),s.current.reset()};return r.jsxs(Y,{ref:s,onSubmit:o,children:[r.jsxs(st,{children:[r.jsxs("label",{children:[r.jsx(f,{children:e("contacts.name")}),r.jsx(y,{type:"text",name:"user_name"})]}),r.jsxs("label",{children:[r.jsx(f,{children:"Email"}),r.jsx(y,{type:"email",name:"user_email",pattern:"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"})]})]}),r.jsxs("label",{children:[r.jsx(f,{children:e("contacts.message")}),r.jsx(et,{name:"message"})]}),r.jsx(tt,{type:"submit",children:e("contacts.send")})]})},ot=()=>{const{t}=x();return r.jsx(C,{className:"section",children:r.jsxs(P,{className:"container",children:[r.jsx(z,{to:"/",children:r.jsx(N,{id:"logo",className:"logo-icon"})}),r.jsxs("div",{children:[r.jsx(V,{children:t("contacts.message")}),r.jsx(K,{children:t("contacts.question")}),r.jsx(rt,{})]}),r.jsx(B,{})]})})},it="/taka-app/assets/heroContacts-ClWmEiW7.jpg",at=c.section`
  display: none;
  @media ${d.desktop} {
    display: block;
    background-image: url(${it});
    background-repeat: no-repeat;
    background-size: cover;
  }
`,nt=()=>{const{t}=x();return r.jsx(at,{className:"hero-section",children:r.jsx("div",{className:"container",children:r.jsx($,{children:t("hero.contacts")})})})},ut=()=>r.jsxs(q.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:2.5},children:[r.jsx(nt,{}),r.jsx(ot,{})]});export{ut as default};
