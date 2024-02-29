import{u as s,d as i,a as r,j as e}from"./index-BJbLTaHr.js";import{B as l}from"./Bar-F4mjXMs8.js";import"./ContactForm.styled-DGiC6alW.js";const c="/taka-app/assets/man-BeGxZvhW.png",p="/taka-app/assets/womanReview-CdTfo1N3.png",m="/taka-app/assets/thirdreview-Bnc1aQCK.png",x=s.ul`
  display: flex;
  flex-direction: column;
  gap: 76px;
  @media ${i.desktop} {
    gap: 88px;
  }
`,d=s.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media ${i.desktop} {
    position: relative;
    flex-direction: row;
    gap: 76px;
  }
`,v=s.p`
  font-family: var(--montserrat-font-regular);
  font-size: 16px;
  color: var(--black-color);
  @media ${i.desktop} {
    font-family: var(--inter-font-bold);
    font-weight: 700;
    line-height: 2.25;
    color: var(--text-color);
  }
`,f=()=>{const{t}=r(),o=[{image:c,text:`${t("reviews.man")}`},{image:p,text:`${t("reviews.woman")}`},{image:m,text:`${t("reviews.company")}`}];return e.jsx(l,{title:t("reviews.reviews"),children:e.jsx(x,{children:o.map((a,n)=>e.jsxs(d,{children:[e.jsx("img",{src:a.image,alt:"client"}),e.jsx(v,{children:a.text})]},n))})})},u=()=>e.jsx("section",{children:e.jsx(f,{})});export{u as default};
