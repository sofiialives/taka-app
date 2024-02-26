import{a as n,d as a,N as s,u as i,j as e}from"./index-DLM_LoTc.js";import{E as o}from"./EmailList-DuV7bpA3.js";import{a as r}from"./HeroSection.styled-BqWFDsTN.js";const c="/taka-app/assets/emailSuccess-en_27Jf6.jpg",l=n.section`
  background-image: url(${c});
  background-repeat: no-repeat;
  background-size: cover;
`,d=n(s)`
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
  @media ${a.desktop} {
    display: inline-block;
    margin-top: 132px;
  }
`,m=n.h2`
  text-align: center;
  font-family: var(--inter-font-regular);
  font-size: 20px;
  line-height: 1.7;
  color: var(--black-color);

  @media ${a.desktop} {
    text-align: start;
    margin: 0;
    font-family: var(--arimo-font-bold);
    font-weight: 700;
    font-size: 36px;
    line-height: 1.3;
  }
`,x=n.div`
  @media ${a.desktop} {
    display: flex;
    align-items: center;
    gap: 52px;
  }
`,p=()=>{const{t}=i();return e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsxs(x,{children:[e.jsx(m,{children:t("contacts.notifySuccess")}),e.jsx(o,{})]}),e.jsx(d,{to:"/",children:t("header.home")})]})})},f=()=>{const{t}=i();return e.jsx(l,{className:"hero-section",children:e.jsx("div",{className:"container",children:e.jsx(r,{children:t("hero.contacts")})})})},j=()=>e.jsxs("section",{children:[e.jsx(f,{}),e.jsx(p,{})]});export{j as default};
