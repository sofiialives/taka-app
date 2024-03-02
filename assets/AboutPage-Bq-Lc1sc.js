import{a as n,j as e,I as f,u as s,d as i,N as y,S as $,e as u,f as k,r as j}from"./index-l3V-gbF2.js";import{H as v,a as w,b}from"./HeroSection.styled-pCocUlIC.js";import{m as g}from"./motion-BIZI8Kfq.js";import{e as T}from"./eightgroup-oKGK3XUx.js";import{i as S}from"./photoArray-BhELebvR.js";const z="/taka-app/assets/hero-mobile-IxwLTDQ3.png",N=()=>{const{t}=n();return e.jsx(v,{className:"hero-section",children:e.jsxs("div",{className:"container",children:[e.jsx(g.div,{initial:{x:"-100%",opacity:0},animate:{x:0,opacity:1},transition:{duration:2.5},children:e.jsx(w,{children:t("hero.title")})}),e.jsxs(b,{children:[e.jsx(f,{id:"logo",className:"logo-icon"}),e.jsx("img",{src:z,alt:"woman"})]})]})})},D="/taka-app/assets/woman-CkyI9V5-.png",L=s.div`
  display: flex;
  gap: 135px;
`,C=s.h2`
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
`,M=s.ul`
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
`,I=s.img`
  display: none;
  @media ${i.desktop} {
    display: block;
    width: 600px;
    height: 867px;
  }
`,E=()=>{const{t}=n(),o=[{title:`${t("stack.who")}`,text:`${t("stack.whoText")}`},{title:`${t("stack.what")}`,text:`${t("stack.whatText")}`},{title:`${t("stack.technology")}`,text:`${t("stack.technologyText")}`},{title:`${t("stack.quality")}`,text:`${t("stack.qualityText")}`}];return e.jsx(M,{children:o.map((a,l)=>e.jsxs("li",{children:[e.jsx(C,{children:a.title}),e.jsx("p",{className:"stack-text",children:a.text})]},l))})},G=()=>e.jsx("section",{className:"section",children:e.jsxs(L,{className:"container",children:[e.jsx(E,{}),e.jsx(I,{src:D,alt:"woman"})]})}),H="/taka-app/assets/firstwoman-MZc06wwT.png",q="/taka-app/assets/secondwoman-DADgxiep.png",P="/taka-app/assets/thirdwoman-BL42qKEu.png",B="/taka-app/assets/fourthwoman-CHwYGg5v.png",_="/taka-app/assets/fifthwoman-DquJ9rAl.png",A="/taka-app/assets/sixthwoman-B8M3s89z.png",J="/taka-app/assets/seventhwoman-CxD-NDAB.png",V="/taka-app/assets/eighthwoman-DlI6MDIu.png",W="/taka-app/assets/ninthwoman-lbfIcU1p.png",Z=s.div`
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
`,Q=s.h4`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 18px;
  color: var(--slider-color);
  @media ${i.desktop} {
    font-size: 22px;
  }
`,R=s.p`
  font-family: var(--inter-font-light);
  font-weight: 300;
  font-size: 13px;
  color: var(--black-color);
  @media ${i.desktop} {
    font-size: 16px;
  }
`,U=s.div`
  display: flex;
  flex-direction: column;
  padding: 20px 12px;
  gap: 20px;
  @media ${i.desktop} {
    gap: 24px;
    padding: 26px 14px;
  }
`,Y=s(y)`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 14px;
  line-height: 3.4;
  color: var(--stack-color);
`,c=({array:t,hide:o,header:a})=>{const l={infinite:!1,speed:500,slidesToScroll:1,arrows:!1,dots:!1,swipeToSlide:!0,variableWidth:!0};return e.jsx($,{...l,children:t.map((r,d)=>e.jsx(Z,{header:a,children:a?e.jsx(Y,{to:r.route,children:r.component}):e.jsxs(e.Fragment,{children:[e.jsx("img",{className:"image",src:r.image,alt:"scroll-image"}),!o&&e.jsxs(U,{children:[e.jsx(Q,{children:r.line}),e.jsx(R,{children:r.collection})]})]})},d))})},F=()=>{const{t}=n(),o=[{image:H,line:`${t("gallery.line")}`,collection:`${t("gallery.woman")}`},{image:q,line:`${t("gallery.line")}`,collection:`${t("gallery.woman")}`},{image:P,line:`${t("gallery.line")}`,collection:`${t("gallery.woman")}`},{image:B,line:`${t("gallery.outerwear")}`,collection:`${t("gallery.demi")}`},{image:_,line:`${t("gallery.knitted")}`,collection:`${t("gallery.woman")}`},{image:A,line:`${t("gallery.knitted")}`,collection:`${t("gallery.woman")}`},{image:J,line:`${t("gallery.outerwear")}`,collection:`${t("gallery.demi")}`},{image:V,line:`${t("gallery.suit")}`,collection:`${t("gallery.woman")}`},{image:W,line:`${t("gallery.suit")}`,collection:`${t("gallery.woman")}`}];return e.jsx(c,{array:o})},K=s.h2`
  font-family: var(--arimo-font-bold);
  font-weight: 700;
  font-size: 36px;
  line-height: 1.3;

  @media ${i.desktop} {
    font-size: 64px;
    margin-bottom: 64px;
  }
`,O=s.h3`
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
`,X=s.p`
  font-family: var(--inter-font-regular);
  font-size: 14px;
  line-height: 1.2;
  color: var(--black-color);
  margin-bottom: 20px;
`,tt=s.div`
  padding: 0;
  @media ${i.desktop} {
    padding: 90px 0;
    background-color: var(--bg-grey);
  }
`,et=s.ul`
  display: flex;
  flex-direction: column;
  gap: 90px;
`,st="/taka-app/assets/firstgroup-VNcDqLSu.png",ot="/taka-app/assets/secondgroup-BOqUbdl7.png",at="/taka-app/assets/thirdgroup-CprJudN7.png",it="/taka-app/assets/fourthgroup-i_e3I_xI.png",nt="/taka-app/assets/fifthgroup-CshbEuxa.png",lt="/taka-app/assets/sixthgroup-wDjNW8iZ.png",rt="/taka-app/assets/seventhgroup-D8pfPg5s.png",ct="/taka-app/assets/ninthgroup-DZWbaoDM.png",pt=()=>{const{t}=n(),o=[{image:st,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:ot,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:at,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:it,line:`${t("gallery.costume")}`,collection:`${t("gallery.demi")}`},{image:nt,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:lt,line:`${t("gallery.outerwear")}`,collection:`${t("gallery.woman")}`},{image:rt,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:T,line:`${t("gallery.costume")}`,collection:`${t("gallery.woman")}`},{image:ct,line:`${t("gallery.dress")}`,collection:`${t("gallery.woman")}`}];return e.jsx(c,{array:o})},gt="/taka-app/assets/firstperson-Evp64RlX.png",xt="/taka-app/assets/secondperson-CbA-mHGe.png",ht="/taka-app/assets/thirdperson-CLpo88yz.png",mt="/taka-app/assets/fourthperson-BA0-Q8Lg.png",dt="/taka-app/assets/fifthperson-C8fyiITt.png",ft="/taka-app/assets/sixthperson-b8m6GIJ7.png",yt="/taka-app/assets/seventhperson-sYovTjtl.png",$t="/taka-app/assets/eighthperson-e_yVMrhc.png",ut="/taka-app/assets/ninthperson-hlWMhS2J.png",kt=()=>{const{t}=n(),o=[{image:gt,line:`${t("gallery.costumeCloth")}`,collection:`${t("gallery.staff")}`},{image:xt,line:`${t("gallery.costumeCloth")}`,collection:`${t("gallery.staff")}`},{image:ht,line:`${t("gallery.special")}`,collection:`${t("gallery.staff")}`},{image:mt,line:`${t("gallery.special")}`,collection:`${t("gallery.staff")}`},{image:dt,line:`${t("gallery.special")}`,collection:`${t("gallery.staff")}`},{image:ft,line:`${t("gallery.special")}`,collection:`${t("gallery.staff")}`},{image:yt,line:`${t("gallery.costumeCloth")}`,collection:`${t("gallery.staff")}`},{image:$t,line:`${t("gallery.special")}`,collection:`${t("gallery.staff")}`},{image:ut,line:`${t("gallery.hats")}`,collection:`${t("gallery.staff")}`}];return e.jsx(c,{array:o})},jt=()=>{const{t}=n(),o=[{title:`${t("gallery.woman")}`,text:`${t("gallery.womanText")}`,scroll:e.jsx(F,{})},{title:`${t("gallery.corporate")}`,text:`${t("gallery.individual")}`,scroll:e.jsx(pt,{})},{title:`${t("gallery.staff")}`,text:`${t("gallery.personnel")}`,scroll:e.jsx(kt,{})}];return e.jsx(et,{children:o.map((a,l)=>e.jsxs("li",{children:[e.jsx(O,{children:a.title}),e.jsx(X,{children:a.text}),a.scroll]},l))})},vt=()=>{const{t}=n();return e.jsx(tt,{className:"section",children:e.jsxs("div",{className:"container",style:{overflow:"hidden"},children:[e.jsx(K,{children:t("gallery.gallery")}),e.jsx(jt,{})]})})},wt=s.div`
  display: flex;
  flex-direction: column;
  @media ${i.desktop} {
    display: flex;
    flex-direction: row;
    gap: 105px;
  }
`,bt=s.ul`
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
`,Tt=s.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,St=s.li`
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
`,zt=()=>{const t=u();return e.jsx(bt,{children:S.map((o,a)=>e.jsx(St,{children:e.jsxs(k,{to:`/about/${a}`,state:{from:t},children:[e.jsxs(Tt,{children:[e.jsx("h3",{className:"photo-title",children:o.title}),e.jsx("p",{className:"photo-text",children:o.text})]}),e.jsx("img",{src:o.img,alt:"cloth",className:"image"})]})},a))})},Nt=s.h2`
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
`,Dt=s.h3`
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
`,x=s.p`
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
`,Lt=()=>{const{t}=n(),o=[{title:`${t("mission.values")}`,text:`${t("mission.valuesText")}`},{title:`${t("mission.trust")}`,text:`${t("mission.trustText")}`},{title:`${t("mission.potentional")}`,text:`${t("mission.potentialText")}`}];return e.jsx("ul",{children:o.map((a,l)=>e.jsxs("li",{children:[e.jsx(Dt,{children:a.title}),e.jsx(x,{children:a.text})]},l))})},Ct=()=>{const{t}=n();return e.jsxs("div",{children:[e.jsx(Nt,{children:t("mission.mission")}),e.jsx(x,{children:t("mission.missionText")}),e.jsx(Lt,{})]})},Mt=()=>e.jsx("section",{className:"section",children:e.jsxs(wt,{className:"container",children:[e.jsx(Ct,{}),e.jsx(zt,{})]})}),It="/taka-app/assets/exfirst-wlVqD4cw.png",Et="/taka-app/assets/exsecond-C2Sp3Cz0.png",Gt="/taka-app/assets/exthird-DJTH-fHU.png",Ht="/taka-app/assets/exfourth-0ZIROMhe.png",qt="/taka-app/assets/exfifth-Hit__51N.png",Pt="/taka-app/assets/exsixth-DfUqieu_.png",Bt=s.p`
  font-family: var(--inter-font-medium);
  font-weight: 500;
  font-size: 20px;
  color: var(--black-color);
`,p=s.h2`
  font-family: var(--inter-font-medium);
  font-size: 16px;
  font-weight: 500;
  margin: 22px 0 51px;
  color: var(--black-color);
  @media ${i.desktop} {
    font-size: 36px;
    margin: 20px 0;
  }
`,_t=s.p`
  display: none;
  @media ${i.desktop} {
    font-family: var(--inter-font-regular);
    font-size: 14px;
    color: var(--black-color);
    margin-bottom: 20px;
  }
`,h=s.ul`
  display: flex;
  gap: 14px;
`,At=s.div`
  background-color: var(--bg-grey);
`,Jt=s.ul`
  display: flex;
  flex-direction: column;
  gap: 62px;
`,Vt=()=>{const t=[It,Et,Gt,Ht,qt,Pt];return e.jsx(h,{children:t.map((o,a)=>e.jsx("li",{children:e.jsx("img",{src:o,alt:"exibition"})},a))})},Wt="/taka-app/assets/firstscroll-CTEGJLKh.jpg",Zt="/taka-app/assets/secondscroll-i9aiqBY2.jpg",Qt="/taka-app/assets/thirdscroll-DJik0rhX.jpg",Rt="/taka-app/assets/fourthscroll-DoM_8T53.jpg",Ut=()=>{const t=[{image:Wt},{image:Zt},{image:Qt},{image:Rt}];return e.jsx(c,{array:t,hide:!0})},Yt="/taka-app/assets/firstfrench-QWfNCLus.png",Ft="/taka-app/assets/secondfrench-B_Lj5w1u.png",m="/taka-app/assets/thirdfrench-CD116zuI.png",Kt="/taka-app/assets/fourthfrench-CjvPxX-3.png",Ot="/taka-app/assets/fifthfrench-fWnVunZz.png",Xt="/taka-app/assets/sixthfrench-2rsi0NNi.png",te=()=>{const t=[Yt,Ft,m,Kt,Ot,Xt];return e.jsx(h,{children:t.map((o,a)=>e.jsx("li",{children:e.jsx("img",{src:o,alt:"exibition"})},a))})},ee="/taka-app/assets/scrollfirst-CDnH-BvB.png",se="/taka-app/assets/scrollsecond-gNKOYI9l.png",oe="/taka-app/assets/scrollfourth-DaV7PLt3.png",ae="/taka-app/assets/scrollfifth-DVp6vaM8.png",ie=()=>{const t=[{image:ee},{image:m},{image:se},{image:oe},{image:ae}];return e.jsx(c,{array:t,hide:!0})},ne=()=>{const{t}=n(),o=j.useMediaQuery({query:"(min-width: 1440px)"});return e.jsx(At,{className:"section",children:e.jsxs("div",{className:"container",style:{overflow:"hidden"},children:[e.jsx(Bt,{children:t("exhibition.exhibition")}),e.jsxs(Jt,{children:[e.jsxs("li",{children:[e.jsx(p,{children:t("exhibition.title")}),e.jsx(_t,{children:t("exhibition.annual")}),o?e.jsx(Vt,{}):e.jsx(Ut,{})]}),e.jsxs("li",{children:[e.jsx(p,{children:t("exhibition.frenchtitle")}),o?e.jsx(te,{}):e.jsx(ie,{})]})]})]})})},xe=()=>e.jsxs(g.section,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:2.5},children:[e.jsx(N,{}),e.jsx(G,{}),e.jsx(vt,{}),e.jsx(Mt,{}),e.jsx(ne,{})]});export{xe as default};
