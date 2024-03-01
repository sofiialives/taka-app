import{u as i,d as a,a as r,j as e}from"./index-CsmB_2dp.js";import{B as c}from"./Bar-CYK-4Nz6.js";import{m as p}from"./motion-cGmRBcIG.js";import"./ContactForm.styled-N37FY3Ka.js";const l="/taka-app/assets/man-BeGxZvhW.png",m="/taka-app/assets/womanReview-CdTfo1N3.png",x="/taka-app/assets/thirdreview-Bnc1aQCK.png",d=i.ul`
  display: flex;
  flex-direction: column;
  gap: 76px;
  @media ${a.desktop} {
    gap: 88px;
  }
`,f=i.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media ${a.desktop} {
    position: relative;
    flex-direction: row;
    gap: 76px;
  }
`,v=i.p`
  font-family: var(--montserrat-font-regular);
  font-size: 16px;
  color: var(--black-color);
  @media ${a.desktop} {
    font-family: var(--inter-font-bold);
    font-weight: 700;
    line-height: 2.25;
    color: var(--text-color);
  }
`,g=()=>{const{t}=r(),o=[{image:l,text:`${t("reviews.man")}`},{image:m,text:`${t("reviews.woman")}`},{image:x,text:`${t("reviews.company")}`}];return e.jsx(c,{title:t("reviews.reviews"),children:e.jsx(d,{children:o.map((s,n)=>e.jsxs(f,{children:[e.jsx("img",{src:s.image,alt:"client"}),e.jsx(v,{children:s.text})]},n))})})},y=()=>e.jsx(p.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:2.5},children:e.jsx(g,{})});export{y as default};
