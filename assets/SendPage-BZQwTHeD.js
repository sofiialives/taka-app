import{u as t,d as o,N as a,a as i,j as e,I as s}from"./index-3TRxtfpr.js";import{E as r}from"./EmailList-Cz7c7YUX.js";import{a as c}from"./HeroSection.styled-B8WFjCR0.js";const l="/taka-app/assets/emailSuccess-en_27Jf6.jpg",d="/taka-app/assets/mobileemail-Dnfs9InN.png",m=t.section`
  position: relative;
  background-image: url(${d});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: 80px;
  @media ${o.desktop} {
    background-image: url(${l});
    background-size: cover;
    margin-top: 0;
  }
`,p=t(a)`
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
  @media ${o.desktop} {
    display: inline-block;
    margin-top: 132px;
  }
`,x=t.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 20px;
  line-height: 1.7;
  color: var(--stack-color);
  text-align: center;

  @media ${o.desktop} {
    text-align: start;
    margin: 0;
    font-size: 36px;
    line-height: 1.3;
    color: var(--black-color);
  }
`,g=t.div`
  @media ${o.desktop} {
    display: flex;
    align-items: center;
    gap: 52px;
  }
`,f=t(a)`
  position: absolute;
  top: -48px;
  left: 50%;
  transform: translateX(-50%);

  .logo-icon {
    width: 88px;
    height: 26px;
  }
  @media ${o.desktop} {
    display: none;
  }
`,h=()=>{const{t:n}=i();return e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsxs(g,{children:[e.jsx(x,{children:n("contacts.notifySuccess")}),e.jsx(r,{})]}),e.jsx(p,{to:"/",children:n("header.home")})]})})},u=()=>{const{t:n}=i();return e.jsx(m,{className:"hero-section",children:e.jsxs("div",{className:"container",children:[e.jsx(f,{to:"/",children:e.jsx(s,{id:"logo",className:"logo-icon"})}),e.jsx(c,{children:n("hero.contacts")})]})})},v=()=>e.jsxs("section",{children:[e.jsx(u,{}),e.jsx(h,{})]});export{v as default};
