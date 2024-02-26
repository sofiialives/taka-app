import{a,d as c,N as S,e as _,u as x,r as z,j as s,B as E,I as N}from"./index-D5cf2zl_.js";import{E as $}from"./EmailList-BQ5l7qwx.js";import{a as P}from"./HeroSection.styled-K0bIHf_H.js";const C=a.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 32px;
  line-height: 1.1;
  color: var(--stack-color);
  margin-bottom: 12px;
  text-align: center;
  @media ${c.desktop} {
    font-size: 36px;
    line-height: 1.3;
    color: var(--black-contact);
    text-align: start;
  }
`,V=a(S)`
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
  .logo-icon {
    margin-top: 15px;
    width: 88px;
    height: 27px;
  }
  @media ${c.desktop} {
    display: none;
  }
`,K=a.section`
  padding-top: 0;
  @media ${c.desktop} {
    padding-top: 90px;
  }
`,B=a.p`
  display: none;
  @media ${c.desktop} {
    display: block;
    font-family: var(--lato-font-regular);
    font-size: 16px;
    margin-top: 32px;
    margin-bottom: 48px;
  }
`,q=a.div`
  @media ${c.desktop} {
    display: flex;
    gap: 70px;
  }
`,n={origin:"https://api.emailjs.com",blockHeadless:!1},g=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},A=(t,e="https://api.emailjs.com")=>{if(!t)return;const o=g(t);n.publicKey=o.publicKey,n.blockHeadless=o.blockHeadless,n.blockList=o.blockList,n.limitRate=o.limitRate,n.origin=o.origin||e};class m{constructor(e=0,o="Network Error"){this.status=e,this.text=o}}const j=async(t,e,o={})=>{const i=await fetch(n.origin+t,{method:"POST",headers:o,body:e}),r=await i.text(),l=new m(i.status,r);if(i.ok)return l;throw l},v=(t,e,o)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o||typeof o!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},O=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},w=t=>t.webdriver||!t.languages||t.languages.length===0,L=()=>new m(451,"Unavailable For Headless Browser"),D=(t,e)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},I=t=>{var e;return!((e=t.list)!=null&&e.length)||!t.watchVariable},M=(t,e)=>t instanceof FormData?t.get(e):t[e],T=(t,e)=>{if(I(t))return!1;D(t.list,t.watchVariable);const o=M(e,t.watchVariable);return typeof o!="string"?!1:t.list.includes(o)},R=()=>new m(403,"Forbidden"),Z=(t,e)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a string"},J=(t,e,o)=>{const i=Number(o.getItem(t)||0);return e-Date.now()+i},y=(t,e,o)=>{setTimeout(()=>{o.removeItem(t)},e)},F=(t,e,o)=>{if(!o.throttle)return!1;Z(o.throttle,o.id);const i=o.id||e,r=J(i,o.throttle,t);return r>0?(y(i,r,t),!0):(t.setItem(i,Date.now().toString()),y(i,o.throttle,t),!1)},H=()=>new m(429,"Too Many Requests"),W=(t,e,o,i)=>{const r=g(i),l=r.publicKey||n.publicKey,p=r.blockHeadless||n.blockHeadless,u={...n.blockList,...r.blockList},h={...n.limitRate,...r.limitRate};return p&&w(navigator)?Promise.reject(L()):(v(l,t,e),O(o),o&&T(u,o)?Promise.reject(R()):F(localStorage,location.pathname,h)?Promise.reject(H()):j("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:l,service_id:t,template_id:e,template_params:o}),{"Content-type":"application/json"}))},U=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Q=t=>typeof t=="string"?document.querySelector(t):t,X=(t,e,o,i)=>{const r=g(i),l=r.publicKey||n.publicKey,p=r.blockHeadless||n.blockHeadless,u={...n.blockList,...r.blockList},h={...n.limitRate,...r.limitRate};if(p&&w(navigator))return Promise.reject(L());const b=Q(o);v(l,t,e),U(b);const d=new FormData(b);return T(u,d)?Promise.reject(R()):F(localStorage,location.pathname,h)?Promise.reject(H()):(d.append("lib_version","4.1.0"),d.append("service_id",t),d.append("template_id",e),d.append("user_id",l),j("/api/v1.0/email/send-form",d))},G={init:A,send:W,sendForm:X},f=a.p`
  font-family: var(--montserrat-font-regular);
  font-size: 12px;
  color: var(--stack-color);
  margin-bottom: 4px;
  @media ${c.desktop} {
    margin-bottom: 8px;
  }
`,Y=a.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media ${c.desktop} {
    display: block;
  }
`,k=a.input`
  width: 100%;
  height: 40px;
  border: 1px solid var(--form-input);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0 12px;
  @media ${c.desktop} {
    width: 400px;
    height: 58px;
  }
`,tt=a.button`
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
  @media ${c.desktop} {
    font-family: var(--lato-font-regular);
    font-size: 16px;
    line-height: 1.4;
    padding: 18px 36px;
    margin-top: 24px;
    text-transform: uppercase;
  }
`,et=a.textarea`
  width: 100%;
  height: 130px;
  border: 1px solid var(--form-input);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 12px;
  resize: none;
`,ot=a.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media ${c.desktop} {
    flex-direction: row;
    gap: 20px;
    margin-bottom: 20px;
  }
`,st=()=>{const t=_(),{t:e}=x(),o=z.useRef(),i=r=>{r.preventDefault(),G.sendForm("service_5iiiovo","template_u0cnr98",o.current,{publicKey:"XdZgWkRPqJU3nI6iF"}).then(()=>{t("/email")},()=>{E.error(`${e("contacts.notifyError")}`)}),o.current.reset()};return s.jsxs(Y,{ref:o,onSubmit:i,children:[s.jsxs(ot,{children:[s.jsxs("label",{children:[s.jsx(f,{children:e("contacts.name")}),s.jsx(k,{type:"text",name:"user_name"})]}),s.jsxs("label",{children:[s.jsx(f,{children:"Email"}),s.jsx(k,{type:"email",name:"user_email",pattern:"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"})]})]}),s.jsxs("label",{children:[s.jsx(f,{children:e("contacts.message")}),s.jsx(et,{name:"message"})]}),s.jsx(tt,{type:"submit",children:e("contacts.send")})]})},it=()=>{const{t}=x();return s.jsx(K,{className:"section",children:s.jsxs(q,{className:"container",children:[s.jsx(V,{to:"/",children:s.jsx(N,{id:"logo",className:"logo-icon"})}),s.jsxs("div",{children:[s.jsx(C,{children:t("contacts.message")}),s.jsx(B,{children:t("contacts.question")}),s.jsx(st,{})]}),s.jsx($,{})]})})},rt="/taka-app/assets/heroContacts-ClWmEiW7.jpg",nt=a.section`
  display: none;
  @media ${c.desktop} {
    display: block;
    background-image: url(${rt});
    background-repeat: no-repeat;
    background-size: cover;
  }
`,at=()=>{const{t}=x();return s.jsx(nt,{className:"hero-section",children:s.jsx("div",{className:"container",children:s.jsx(P,{children:t("hero.contacts")})})})},mt=()=>s.jsxs("section",{children:[s.jsx(at,{}),s.jsx(it,{})]});export{mt as default};
