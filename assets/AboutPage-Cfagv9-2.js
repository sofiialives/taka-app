import{a as n,j as e,I as x,u as o,d as a,N as h,S as d,e as f,f as y,r as $}from"./index-Dp-DrunZ.js";import{H as u,a as k,b as j}from"./HeroSection.styled-x_cKPpRX.js";import{m as p}from"./motion-Cs81sdl6.js";import{e as v}from"./eightgroup-oKGK3XUx.js";import{i as w}from"./photoArray-BNmn46OU.js";const b="/taka-app/assets/hero-mobile-IxwLTDQ3.png",T=()=>{const{t}=n();return e.jsx(u,{className:"hero-section",children:e.jsxs("div",{className:"container",children:[e.jsx(p.div,{initial:{x:"-100%",opacity:0},animate:{x:0,opacity:1},transition:{duration:2.5},children:e.jsx(k,{children:t("hero.title")})}),e.jsxs(j,{children:[e.jsx(x,{id:"logo",className:"logo-icon"}),e.jsx("img",{src:b,alt:"woman"})]})]})})},S="/taka-app/assets/woman-CkyI9V5-.png",z=o.div`
  display: flex;
  gap: 135px;
`,N=o.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 24px;
  line-height: 2;
  color: var(--stack-color);

  @media ${a.desktop} {
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

  @media ${a.desktop} {
    gap: 76px;

    .stack-text {
      font-size: 20px;
      line-height: 1.2;
    }
  }
`,L=o.img`
  display: none;
  @media ${a.desktop} {
    display: block;
    width: 600px;
    height: 867px;
  }
`,M=()=>{const{t}=n(),i=[{title:`${t("stack.who")}`,text:`${t("stack.whoText")}`},{title:`${t("stack.what")}`,text:`${t("stack.whatText")}`},{title:`${t("stack.technology")}`,text:`${t("stack.technologyText")}`},{title:`${t("stack.quality")}`,text:`${t("stack.qualityText")}`}];return e.jsx(D,{children:i.map((s,l)=>e.jsxs("li",{children:[e.jsx(N,{children:s.title}),e.jsx("p",{className:"stack-text",children:s.text})]},l))})},C=()=>e.jsx("section",{className:"section",children:e.jsxs(z,{className:"container",children:[e.jsx(M,{}),e.jsx(L,{src:S,alt:"woman"})]})}),E="/taka-app/assets/firstwoman-MZc06wwT.png",I="/taka-app/assets/secondwoman-DADgxiep.png",G="/taka-app/assets/thirdwoman-BL42qKEu.png",q="/taka-app/assets/fourthwoman-CHwYGg5v.png",H="/taka-app/assets/fifthwoman-DquJ9rAl.png",P="/taka-app/assets/sixthwoman-B8M3s89z.png",A="/taka-app/assets/seventhwoman-CxD-NDAB.png",J="/taka-app/assets/eighthwoman-DlI6MDIu.png",_="/taka-app/assets/ninthwoman-lbfIcU1p.png",B=o.div`
  background-color: ${t=>t.header?"transparent":"var(--slider-bg)"};
  margin-left: ${t=>t.header?"18px":"0"};

  .image {
    width: 307px;
    height: 382px;
    object-fit: cover;
    @media ${a.desktop} {
      width: 400px;
      height: 445px;
    }
  }
`,W=o.h4`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 18px;
  color: var(--slider-color);
  @media ${a.desktop} {
    font-size: 22px;
  }
`,R=o.p`
  font-family: var(--inter-font-light);
  font-weight: 300;
  font-size: 13px;
  color: var(--black-color);
  @media ${a.desktop} {
    font-size: 16px;
  }
`,U=o.div`
  display: flex;
  flex-direction: column;
  padding: 20px 12px;
  gap: 20px;
  @media ${a.desktop} {
    gap: 24px;
    padding: 26px 14px;
  }
`,V=o(h)`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 14px;
  line-height: 3.4;
  color: var(--stack-color);
`,c=({array:t,hide:i,header:s})=>{const l={infinite:!1,speed:500,slidesToScroll:1,arrows:!1,dots:!1,swipeToSlide:!0,variableWidth:!0};return e.jsx(d,{...l,children:t.map((r,m)=>e.jsx(B,{header:s,children:s?e.jsx(V,{to:r.route,children:r.component}):e.jsxs(e.Fragment,{children:[e.jsx("img",{className:"image",src:r.image,alt:"scroll-image"}),!i&&e.jsxs(U,{children:[e.jsx(W,{children:r.line}),e.jsx(R,{children:r.collection})]})]})},m))})},Z=()=>{const{t}=n(),i=[{image:E,line:`${t("gallery.line")}`,collection:`${t("gallery.woman")}`},{image:I,line:`${t("gallery.line")}`,collection:`${t("gallery.woman")}`},{image:G,line:`${t("gallery.line")}`,collection:`${t("gallery.woman")}`},{image:q,line:`${t("gallery.outerwear")}`,collection:`${t("gallery.demi")}`},{image:H,line:`${t("gallery.knitted")}`,collection:`${t("gallery.woman")}`},{image:P,line:`${t("gallery.knitted")}`,collection:`${t("gallery.woman")}`},{image:A,line:`${t("gallery.outerwear")}`,collection:`${t("gallery.demi")}`},{image:J,line:`${t("gallery.suit")}`,collection:`${t("gallery.woman")}`},{image:_,line:`${t("gallery.suit")}`,collection:`${t("gallery.woman")}`}];return e.jsx(c,{array:i})},Q=o.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 36px;
  line-height: 1.3;

  @media ${a.desktop} {
    font-size: 64px;
    margin-bottom: 64px;
  }
`,Y=o.h3`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 17px;
  color: var(--black-mobile);
  @media ${a.desktop} {
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
  @media ${a.desktop} {
    padding: 90px 0;
    background-color: var(--bg-grey);
  }
`,X=o.ul`
  display: flex;
  flex-direction: column;
  gap: 90px;
`,F="/taka-app/assets/firstgroup-VNcDqLSu.png",tt="/taka-app/assets/secondgroup-BOqUbdl7.png",et="/taka-app/assets/thirdgroup-CprJudN7.png",ot="/taka-app/assets/fourthgroup-i_e3I_xI.png",it="/taka-app/assets/fifthgroup-CshbEuxa.png",at="/taka-app/assets/sixthgroup-wDjNW8iZ.png",st="/taka-app/assets/seventhgroup-D8pfPg5s.png",nt="/taka-app/assets/ninthgroup-DZWbaoDM.png",lt=()=>{const{t}=n(),i=[{image:F,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:tt,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:et,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:ot,line:`${t("gallery.costume")}`,collection:`${t("gallery.demi")}`},{image:it,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:at,line:`${t("gallery.outerwear")}`,collection:`${t("gallery.woman")}`},{image:st,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:v,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:nt,line:`${t("gallery.dress")}`,collection:`${t("gallery.woman")}`}];return e.jsx(c,{array:i})},rt="/taka-app/assets/firstperson-Evp64RlX.png",ct="/taka-app/assets/secondperson-CbA-mHGe.png",pt="/taka-app/assets/thirdperson-CLpo88yz.png",gt="/taka-app/assets/fourthperson-BA0-Q8Lg.png",mt="/taka-app/assets/fifthperson-C8fyiITt.png",xt="/taka-app/assets/sixthperson-b8m6GIJ7.png",ht="/taka-app/assets/seventhperson-sYovTjtl.png",dt="/taka-app/assets/eighthperson-e_yVMrhc.png",ft="/taka-app/assets/ninthperson-hlWMhS2J.png",yt=()=>{const{t}=n(),i=[{image:rt,line:`${t("gallery.costumeCloth")}`,collection:`${t("gallery.staff")}`},{image:ct,line:`${t("gallery.costumeCloth")}`,collection:`${t("gallery.staff")}`},{image:pt,line:`${t("gallery.special")}`,collection:`${t("gallery.staff")}`},{image:gt,line:`${t("gallery.special")}`,collection:`${t("gallery.staff")}`},{image:mt,line:`${t("gallery.special")}`,collection:`${t("gallery.staff")}`},{image:xt,line:`${t("gallery.special")}`,collection:`${t("gallery.staff")}`},{image:ht,line:`${t("gallery.costumeCloth")}`,collection:`${t("gallery.staff")}`},{image:dt,line:`${t("gallery.special")}`,collection:`${t("gallery.staff")}`},{image:ft,line:`${t("gallery.hats")}`,collection:`${t("gallery.staff")}`}];return e.jsx(c,{array:i})},$t=()=>{const{t}=n(),i=[{title:`${t("gallery.woman")}`,text:`${t("gallery.womanText")}`,scroll:e.jsx(Z,{})},{title:`${t("gallery.corporate")}`,text:`${t("gallery.individual")}`,scroll:e.jsx(lt,{})},{title:`${t("gallery.staff")}`,text:`${t("gallery.personnel")}`,scroll:e.jsx(yt,{})}];return e.jsx(X,{children:i.map((s,l)=>e.jsxs("li",{children:[e.jsx(Y,{children:s.title}),e.jsx(K,{children:s.text}),s.scroll]},l))})},ut=()=>{const{t}=n();return e.jsx(O,{className:"section",children:e.jsxs("div",{className:"container",style:{overflow:"hidden"},children:[e.jsx(Q,{children:t("gallery.gallery")}),e.jsx($t,{})]})})},kt=o.div`
  display: flex;
  flex-direction: column;
  @media ${a.desktop} {
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

  @media ${a.desktop} {
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
    @media ${a.desktop} {
      width: 295px;
    }
  }
`,bt=()=>{const t=f();return e.jsx(jt,{children:w.map((i,s)=>e.jsx(wt,{children:e.jsxs(y,{to:`/about/${s}`,state:{from:t},children:[e.jsxs(vt,{children:[e.jsx("h3",{className:"photo-title",children:i.title}),e.jsx("p",{className:"photo-text",children:i.text})]}),e.jsx("img",{src:i.img,alt:"cloth",className:"image"})]})},s))})},Tt=o.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 36px;
  line-height: 1.1;
  color: var(--stack-color);
  margin-bottom: 15px;
  @media ${a.desktop} {
    font-family: var(--inter-font-medium);
    font-weight: 500;
    color: var(--black-color);
    margin-bottom: 41px;
  }
`,St=o.h3`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 36px;
  line-height: 1.1;
  color: var(--stack-color);
  margin-bottom: 15px;
  @media ${a.desktop} {
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
  @media ${a.desktop} {
    font-family: var(--inter-font-regular);
    font-size: 14px;
    color: var(--black-color);
    margin-bottom: 41px;
  }
`,zt=()=>{const{t}=n(),i=[{title:`${t("mission.values")}`,text:`${t("mission.valuesText")}`},{title:`${t("mission.trust")}`,text:`${t("mission.trustText")}`},{title:`${t("mission.potentional")}`,text:`${t("mission.potentialText")}`}];return e.jsx("ul",{children:i.map((s,l)=>e.jsxs("li",{children:[e.jsx(St,{children:s.title}),e.jsx(g,{children:s.text})]},l))})},Nt=()=>{const{t}=n();return e.jsxs("div",{children:[e.jsx(Tt,{children:t("mission.mission")}),e.jsx(g,{children:t("mission.missionText")}),e.jsx(zt,{})]})},Dt=()=>e.jsx("section",{className:"section",children:e.jsxs(kt,{className:"container",children:[e.jsx(Nt,{}),e.jsx(bt,{})]})}),Lt="/taka-app/assets/exfirst-wlVqD4cw.png",Mt="/taka-app/assets/exsecond-C2Sp3Cz0.png",Ct="/taka-app/assets/exthird-DJTH-fHU.png",Et="/taka-app/assets/exfourth-0ZIROMhe.png",It="/taka-app/assets/exfifth-Hit__51N.png",Gt="/taka-app/assets/exsixth-DfUqieu_.png",qt=o.p`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  color: var(--black-color);
`,Ht=o.h2`
  font-family: var(--inter-font-medium);
  font-size: 16px;
  font-weight: 500;
  margin: 22px 0 51px;
  color: var(--black-color);
  @media ${a.desktop} {
    margin: 20px 0;
  }
`,Pt=o.p`
  display: none;
  @media ${a.desktop} {
    font-family: var(--inter-font-regular);
    font-size: 14px;
    color: var(--black-color);
    margin-bottom: 20px;
  }
`,At=o.ul`
  display: flex;
  gap: 14px;
`,Jt=o.div`
  background-color: var(--bg-grey);
`,_t=()=>{const t=[{img:Lt},{img:Mt},{img:Ct},{img:Et},{img:It},{img:Gt}];return e.jsx(At,{children:t.map((i,s)=>e.jsx("li",{children:e.jsx("img",{src:i.img,alt:"exibition"})},s))})},Bt="/taka-app/assets/firstscroll-CTEGJLKh.jpg",Wt="/taka-app/assets/secondscroll-i9aiqBY2.jpg",Rt="/taka-app/assets/thirdscroll-DJik0rhX.jpg",Ut="/taka-app/assets/fourthscroll-DoM_8T53.jpg",Vt=()=>{const t=[{image:Bt},{image:Wt},{image:Rt},{image:Ut}];return e.jsx(c,{array:t,hide:!0})},Zt=()=>{const{t}=n(),i=$.useMediaQuery({query:"(min-width: 1440px)"});return e.jsx(Jt,{className:"section",children:e.jsxs("div",{className:"container",style:{overflow:"hidden"},children:[e.jsx(qt,{children:t("exhibition.exhibition")}),e.jsx(Ht,{children:t("exhibition.title")}),e.jsx(Pt,{children:t("exhibition.annual")}),i?e.jsx(_t,{}):e.jsx(Vt,{})]})})},Ft=()=>e.jsxs(p.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:2.5},children:[e.jsx(T,{}),e.jsx(C,{}),e.jsx(ut,{}),e.jsx(Dt,{}),e.jsx(Zt,{})]});export{Ft as default};
