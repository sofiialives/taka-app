import{a as n,j as e,I as x,u as o,d as i,N as h,S as d,e as f,f as y,r as $}from"./index-Bffr_-NO.js";import{H as u,a as k,b as j}from"./HeroSection.styled-BMqoNKTF.js";import{m as p}from"./motion-BXGpgztK.js";import{e as v}from"./eightgroup-oKGK3XUx.js";import{i as w}from"./photoArray-11kvxW3C.js";const b="/taka-app/assets/hero-mobile-IxwLTDQ3.png",S=()=>{const{t}=n();return e.jsx(u,{className:"hero-section",children:e.jsxs("div",{className:"container",children:[e.jsx(p.div,{initial:{x:"-100%",opacity:0},animate:{x:0,opacity:1},transition:{duration:2.5},children:e.jsx(k,{children:t("hero.title")})}),e.jsxs(j,{children:[e.jsx(x,{id:"logo",className:"logo-icon"}),e.jsx("img",{src:b,alt:"woman"})]})]})})},T="/taka-app/assets/woman-CkyI9V5-.png",z=o.div`
  display: flex;
  gap: 135px;
`,N=o.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 24px;
  line-height: 2;
  color: var(--stack-color);

  @media ${i.desktop} {
    white-space: nowrap;
    font-size: 36px;
    line-height: 1.3;
    color: var(--black-text-color);
    margin-bottom: 16px;
  }
`,D=o.ul`
  display: flex;
  flex-direction: column;
  gap: 37px;
  .stack-text {
    font-family: var(--montserrat-font-regular);
    font-size: 16px;
    line-height: 1.5;
    color: var(--text-color);
  }

  @media ${i.desktop} {
    gap: 76px;

    .stack-text {
      font-size: 20px;
      line-height: 1.2;
    }
  }
`,L=o.img`
  display: none;
  @media ${i.desktop} {
    display: block;
    width: 600px;
    height: 867px;
  }
`,C=()=>{const{t}=n(),a=[{title:`${t("stack.who")}`,text:`${t("stack.whoText")}`},{title:`${t("stack.what")}`,text:`${t("stack.whatText")}`},{title:`${t("stack.technology")}`,text:`${t("stack.technologyText")}`},{title:`${t("stack.quality")}`,text:`${t("stack.qualityText")}`}];return e.jsx(D,{children:a.map((s,l)=>e.jsxs("li",{children:[e.jsx(N,{children:s.title}),e.jsx("p",{className:"stack-text",children:s.text})]},l))})},M=()=>e.jsx("section",{className:"section",children:e.jsxs(z,{className:"container",children:[e.jsx(C,{}),e.jsx(L,{src:T,alt:"woman"})]})}),I="/taka-app/assets/firstwoman-MZc06wwT.png",E="/taka-app/assets/secondwoman-DADgxiep.png",G="/taka-app/assets/thirdwoman-BL42qKEu.png",H="/taka-app/assets/fourthwoman-CHwYGg5v.png",q="/taka-app/assets/fifthwoman-DquJ9rAl.png",P="/taka-app/assets/sixthwoman-B8M3s89z.png",A="/taka-app/assets/seventhwoman-CxD-NDAB.png",_="/taka-app/assets/eighthwoman-DlI6MDIu.png",B="/taka-app/assets/ninthwoman-lbfIcU1p.png",J=o.div`
  background-color: ${t=>t.header?"transparent":"var(--slider-bg)"};
  margin-left: ${t=>t.header?"18px":"0"};

  .image {
    width: 307px;
    height: 382px;
    object-fit: cover;
    @media ${i.desktop} {
      width: 400px;
      height: 445px;
    }
  }
`,W=o.h4`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 18px;
  color: var(--slider-color);
  @media ${i.desktop} {
    font-size: 22px;
  }
`,R=o.p`
  font-family: var(--inter-font-light);
  font-weight: 300;
  font-size: 13px;
  color: var(--black-color);
  @media ${i.desktop} {
    font-size: 16px;
  }
`,U=o.div`
  display: flex;
  flex-direction: column;
  padding: 20px 12px;
  gap: 20px;
  @media ${i.desktop} {
    gap: 24px;
    padding: 26px 14px;
  }
`,V=o(h)`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 14px;
  line-height: 3.4;
  color: var(--stack-color);
`,c=({array:t,hide:a,header:s})=>{const l={infinite:!1,speed:500,slidesToScroll:1,arrows:!1,dots:!1,swipeToSlide:!0,variableWidth:!0};return e.jsx(d,{...l,children:t.map((r,m)=>e.jsx(J,{header:s,children:s?e.jsx(V,{to:r.route,children:r.component}):e.jsxs(e.Fragment,{children:[e.jsx("img",{className:"image",src:r.image,alt:"scroll-image"}),!a&&e.jsxs(U,{children:[e.jsx(W,{children:r.line}),e.jsx(R,{children:r.collection})]})]})},m))})},Y=()=>{const{t}=n(),a=[{image:I,line:`${t("gallery.line")}`,collection:`${t("gallery.woman")}`},{image:E,line:`${t("gallery.line")}`,collection:`${t("gallery.woman")}`},{image:G,line:`${t("gallery.line")}`,collection:`${t("gallery.woman")}`},{image:H,line:`${t("gallery.outerwear")}`,collection:`${t("gallery.demi")}`},{image:q,line:`${t("gallery.knitted")}`,collection:`${t("gallery.woman")}`},{image:P,line:`${t("gallery.knitted")}`,collection:`${t("gallery.woman")}`},{image:A,line:`${t("gallery.outerwear")}`,collection:`${t("gallery.demi")}`},{image:_,line:`${t("gallery.suit")}`,collection:`${t("gallery.woman")}`},{image:B,line:`${t("gallery.suit")}`,collection:`${t("gallery.woman")}`}];return e.jsx(c,{array:a})},Z=o.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 36px;
  line-height: 1.3;

  @media ${i.desktop} {
    font-size: 64px;
    margin-bottom: 64px;
  }
`,Q=o.h3`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 17px;
  color: var(--black-mobile);
  @media ${i.desktop} {
    font-size: 36px;
    margin-bottom: 20px;
    color: var(--black-color);
  }
`,K=o.p`
  font-family: var(--inter-font-regular);
  font-size: 14px;
  line-height: 1.2;
  color: var(--black-color);
  margin-bottom: 20px;
`,O=o.div`
  padding: 0;
  @media ${i.desktop} {
    padding: 90px 0;
    background-color: var(--bg-grey);
  }
`,X=o.ul`
  display: flex;
  flex-direction: column;
  gap: 90px;
`,F="/taka-app/assets/firstgroup-VNcDqLSu.png",tt="/taka-app/assets/secondgroup-BOqUbdl7.png",et="/taka-app/assets/thirdgroup-CprJudN7.png",ot="/taka-app/assets/fourthgroup-i_e3I_xI.png",at="/taka-app/assets/fifthgroup-CshbEuxa.png",it="/taka-app/assets/sixthgroup-wDjNW8iZ.png",st="/taka-app/assets/seventhgroup-D8pfPg5s.png",nt="/taka-app/assets/ninthgroup-DZWbaoDM.png",lt=()=>{const{t}=n(),a=[{image:F,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:tt,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:et,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:ot,line:`${t("gallery.costume")}`,collection:`${t("gallery.demi")}`},{image:at,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:it,line:`${t("gallery.outerwear")}`,collection:`${t("gallery.woman")}`},{image:st,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:v,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:nt,line:`${t("gallery.dress")}`,collection:`${t("gallery.woman")}`}];return e.jsx(c,{array:a})},rt="/taka-app/assets/firstperson-Evp64RlX.png",ct="/taka-app/assets/secondperson-CbA-mHGe.png",pt="/taka-app/assets/thirdperson-CLpo88yz.png",gt="/taka-app/assets/fourthperson-BA0-Q8Lg.png",mt="/taka-app/assets/fifthperson-C8fyiITt.png",xt="/taka-app/assets/sixthperson-b8m6GIJ7.png",ht="/taka-app/assets/seventhperson-sYovTjtl.png",dt="/taka-app/assets/eighthperson-e_yVMrhc.png",ft="/taka-app/assets/ninthperson-hlWMhS2J.png",yt=()=>{const{t}=n(),a=[{image:rt,line:`${t("gallery.costumeCloth")}`,collection:`${t("gallery.staff")}`},{image:ct,line:`${t("gallery.costumeCloth")}`,collection:`${t("gallery.staff")}`},{image:pt,line:`${t("gallery.special")}`,collection:`${t("gallery.staff")}`},{image:gt,line:`${t("gallery.special")}`,collection:`${t("gallery.staff")}`},{image:mt,line:`${t("gallery.special")}`,collection:`${t("gallery.staff")}`},{image:xt,line:`${t("gallery.special")}`,collection:`${t("gallery.staff")}`},{image:ht,line:`${t("gallery.costumeCloth")}`,collection:`${t("gallery.staff")}`},{image:dt,line:`${t("gallery.special")}`,collection:`${t("gallery.staff")}`},{image:ft,line:`${t("gallery.hats")}`,collection:`${t("gallery.staff")}`}];return e.jsx(c,{array:a})},$t=()=>{const{t}=n(),a=[{title:`${t("gallery.woman")}`,text:`${t("gallery.womanText")}`,scroll:e.jsx(Y,{})},{title:`${t("gallery.corporate")}`,text:`${t("gallery.individual")}`,scroll:e.jsx(lt,{})},{title:`${t("gallery.staff")}`,text:`${t("gallery.personnel")}`,scroll:e.jsx(yt,{})}];return e.jsx(X,{children:a.map((s,l)=>e.jsxs("li",{children:[e.jsx(Q,{children:s.title}),e.jsx(K,{children:s.text}),s.scroll]},l))})},ut=()=>{const{t}=n();return e.jsx(O,{className:"section",children:e.jsxs("div",{className:"container",style:{overflow:"hidden"},children:[e.jsx(Z,{children:t("gallery.gallery")}),e.jsx($t,{})]})})},kt=o.div`
  display: flex;
  flex-direction: column;
  @media ${i.desktop} {
    display: flex;
    flex-direction: row;
    gap: 105px;
  }
`,jt=o.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 78px;
  li:nth-child(2),
  li:nth-child(3) {
    display: none;
  }

  @media ${i.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    li:nth-child(2),
    li:nth-child(3) {
      display: initial;
    }
  }
`,vt=o.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,wt=o.li`
  position: relative;

  .photo-title {
    font-family: var(--inter-font-bold);
    font-weight: 700;
    font-size: 24px;
    line-height: 1.2;
    color: var(--bg-color);
    max-width: 250px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 8px;
  }

  .photo-text {
    font-family: var(--inter-font-regular);
    font-size: 14px;
    line-height: 1.2;
    text-align: center;
    margin: 0 auto;
    color: var(--bg-color);
  }

  .image {
    width: 315px;
    border-radius: 12px;
    @media ${i.desktop} {
      width: 295px;
    }
  }
`,bt=()=>{const t=f();return e.jsx(jt,{children:w.map((a,s)=>e.jsx(wt,{children:e.jsxs(y,{to:`/about/${s}`,state:{from:t},children:[e.jsxs(vt,{children:[e.jsx("h3",{className:"photo-title",children:a.title}),e.jsx("p",{className:"photo-text",children:a.text})]}),e.jsx("img",{src:a.img,alt:"cloth",className:"image"})]})},s))})},St=o.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 36px;
  line-height: 1.1;
  color: var(--stack-color);
  margin-bottom: 15px;
  @media ${i.desktop} {
    font-family: var(--inter-font-medium);
    font-weight: 500;
    color: var(--black-color);
    margin-bottom: 41px;
  }
`,Tt=o.h3`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 36px;
  line-height: 1.1;
  color: var(--stack-color);
  margin-bottom: 15px;
  @media ${i.desktop} {
    font-family: var(--inter-font-black);
    font-weight: 900;
    font-size: 14px;
    color: var(--black-color);
    margin-bottom: 24px;
  }
`,g=o.p`
  font-family: var(--montserrat-font-regular);
  font-size: 16px;
  margin-bottom: 37px;
  line-height: 1.5;
  @media ${i.desktop} {
    font-family: var(--inter-font-regular);
    font-size: 14px;
    color: var(--black-color);
    margin-bottom: 41px;
  }
`,zt=()=>{const{t}=n(),a=[{title:`${t("mission.values")}`,text:`${t("mission.valuesText")}`},{title:`${t("mission.trust")}`,text:`${t("mission.trustText")}`},{title:`${t("mission.potentional")}`,text:`${t("mission.potentialText")}`}];return e.jsx("ul",{children:a.map((s,l)=>e.jsxs("li",{children:[e.jsx(Tt,{children:s.title}),e.jsx(g,{children:s.text})]},l))})},Nt=()=>{const{t}=n();return e.jsxs("div",{children:[e.jsx(St,{children:t("mission.mission")}),e.jsx(g,{children:t("mission.missionText")}),e.jsx(zt,{})]})},Dt=()=>e.jsx("section",{className:"section",children:e.jsxs(kt,{className:"container",children:[e.jsx(Nt,{}),e.jsx(bt,{})]})}),Lt="/taka-app/assets/exfirst-wlVqD4cw.png",Ct="/taka-app/assets/exsecond-C2Sp3Cz0.png",Mt="/taka-app/assets/exthird-DJTH-fHU.png",It="/taka-app/assets/exfourth-0ZIROMhe.png",Et="/taka-app/assets/exfifth-Hit__51N.png",Gt="/taka-app/assets/exsixth-DfUqieu_.png",Ht=o.p`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  color: var(--black-color);
`,qt=o.h2`
  font-family: var(--inter-font-medium);
  font-size: 16px;
  font-weight: 500;
  margin: 22px 0 51px;
  color: var(--black-color);
  @media ${i.desktop} {
    margin: 20px 0;
  }
`,Pt=o.p`
  display: none;
  @media ${i.desktop} {
    font-family: var(--inter-font-regular);
    font-size: 14px;
    color: var(--black-color);
    margin-bottom: 20px;
  }
`,At=o.ul`
  display: flex;
  gap: 14px;
`,_t=o.div`
  background-color: var(--bg-grey);
`,Bt=()=>{const t=[{img:Lt},{img:Ct},{img:Mt},{img:It},{img:Et},{img:Gt}];return e.jsx(At,{children:t.map((a,s)=>e.jsx("li",{children:e.jsx("img",{src:a.img,alt:"exibition"})},s))})},Jt="/taka-app/assets/firstscroll-C3C6k_7b.png",Wt="/taka-app/assets/secondscroll-dWpJ9pAi.png",Rt="/taka-app/assets/thirdscroll-CzkYwyou.png",Ut="/taka-app/assets/fourthscroll-BKyr3Xc2.png",Vt="/taka-app/assets/fifthscroll-zPpY-dz7.png",Yt=()=>{const t=[{image:Jt},{image:Wt},{image:Rt},{image:Ut},{image:Vt}];return e.jsx(c,{array:t,hide:!0})},Zt=()=>{const{t}=n(),a=$.useMediaQuery({query:"(min-width: 1440px)"});return e.jsx(_t,{className:"section",children:e.jsxs("div",{className:"container",style:{overflow:"hidden"},children:[e.jsx(Ht,{children:t("exhibition.exhibition")}),e.jsx(qt,{children:t("exhibition.title")}),e.jsx(Pt,{children:t("exhibition.annual")}),a?e.jsx(Bt,{}):e.jsx(Yt,{})]})})},te=()=>e.jsxs(p.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:2.5},children:[e.jsx(S,{}),e.jsx(M,{}),e.jsx(ut,{}),e.jsx(Dt,{}),e.jsx(Zt,{})]});export{te as default};
