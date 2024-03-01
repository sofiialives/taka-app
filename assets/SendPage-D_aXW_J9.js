import{u as o,d as e,N as a,a as n,j as t,I as s}from"./index-CsmB_2dp.js";import{E as r}from"./EmailList-CRv9BSxW.js";import{a as c}from"./HeroSection.styled-Cz9fa5AZ.js";import{m as l}from"./motion-cGmRBcIG.js";const m="/taka-app/assets/emailSuccess-en_27Jf6.jpg",d="/taka-app/assets/mobileemail-Dnfs9InN.png",p=o.section`
  position: relative;
  background-image: url(${d});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: 80px;
  @media ${e.desktop} {
    background-image: url(${m});
    background-size: cover;
    margin-top: 0;
  }
`,x=o(a)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 14px;
  padding: 21px 116px;
  color: var(--bg-color);
  border-radius: 12px;
  background-color: var(--form-btn);
  margin-top: 192px;
  @media ${e.desktop} {
    display: inline-block;
    margin-top: 132px;
  }
`,g=o.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 20px;
  line-height: 1.7;
  color: var(--stack-color);
  text-align: center;

  @media ${e.desktop} {
    text-align: start;
    margin: 0;
    font-size: 36px;
    line-height: 1.3;
    color: var(--black-color);
  }
`,f=o.div`
  @media ${e.desktop} {
    display: flex;
    align-items: center;
    gap: 52px;
  }
`,h=o(a)`
  position: absolute;
  top: -48px;
  left: 50%;
  transform: translateX(-50%);

  .logo-icon {
    width: 88px;
    height: 26px;
  }
  @media ${e.desktop} {
    display: none;
  }
`,u=()=>{const{t:i}=n();return t.jsx("section",{className:"section",children:t.jsxs("div",{className:"container",children:[t.jsxs(f,{children:[t.jsx(g,{children:i("contacts.notifySuccess")}),t.jsx(r,{})]}),t.jsx(x,{to:"/",children:i("header.home")})]})})},k=()=>{const{t:i}=n();return t.jsx(p,{className:"hero-section",children:t.jsxs("div",{className:"container",children:[t.jsx(h,{to:"/",children:t.jsx(s,{id:"logo",className:"logo-icon"})}),t.jsx(c,{children:i("hero.contacts")})]})})},N=()=>t.jsxs(l.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:2.5},children:[t.jsx(k,{}),t.jsx(u,{})]});export{N as default};
