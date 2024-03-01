import{u as n,d as l,a as c,j as e}from"./index-BVmqSKzz.js";const r=n.ul`
  display: none;
  @media ${l.desktop} {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
`,x=n.h3`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 24px;
  line-height: 2;
  color: var(--black-text-color);
`,s=n.p`
  font-family: var(--lato-font-regular);
  font-size: 16px;
`,m=()=>{const{t}=c(),i=[{title:`${t("contacts.visit")}`,text:`${t("footer.address")}`,secondText:`${t("contacts.phone")}: +38 099 319 04 93`},{title:`${t("contacts.connect")}`,text:`${t("contacts.connectText")}`,secondText:"Email: 1919titan@gmail.com"}];return e.jsx(r,{children:i.map((o,a)=>e.jsxs("li",{children:[e.jsx(x,{children:o.title}),e.jsx(s,{children:o.text}),e.jsx(s,{children:o.secondText})]},a))})};export{m as E};
