(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{235:function(e,a,t){"use strict";t.r(a);t(16),t(134),t(7),t(8),t(3),t(23);var n=t(0),o=t.n(n),r=t(246),i=t(272),c=t(314),l=t(273),s=t(251),p=t(252),d=t(271),f={aisingapore:{padding:"45px",marginTop:"-60px",marginLeft:"40px"},alibaba:{padding:"45px",marginTop:"-50px"},dso:{justifyContent:"center",marginTop:"-85px"},mindef:{justifyContent:"center",marginTop:"-50px"},moe:{padding:"55px",marginTop:"-90px"},nrf:{padding:"25px",marginTop:"-30px"},nsfc:{padding:"75px",marginTop:"-100px"}};a.default=function(){return o.a.createElement("div",{style:{margin:"5rem auto",maxWidth:1e3}},o.a.createElement(r.a,null),o.a.createElement("h1",null,"Our Research Philosophy"),o.a.createElement(i.a,{style:{padding:"25px"}},"Advancing the state of Natural Language Processing by focusing on fundamental research."),o.a.createElement("h1",null,"Our Partners"),o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},Object.keys(d).map(function(e,a){return o.a.createElement(i.a,{key:e,style:{width:310,height:220,margin:"10px"}},o.a.createElement(c.a,{action:o.a.createElement(l.a,{"aria-label":e,size:"small",style:{color:"#232F34",background:"#ffff",fontSize:"14px"},href:d[e].link,target:"_blank",rel:"noopener"},o.a.createElement(s.a,{icon:p.c}))}),o.a.createElement("img",{alt:e,src:t(275)("./"+e+".jpg"),style:f[e]}))})))}},243:function(e,a,t){var n;e.exports=(n=t(244))&&n.default||n},244:function(e,a,t){"use strict";t.r(a);t(40);var n=t(0),o=t.n(n),r=t(125);a.default=function(e){var a=e.location,t=e.pageResources;return t?o.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}},245:function(e,a,t){e.exports=t.p+"static/statnlp_logo-82c79dc657bd9ffad28343ebf9d052f0.svg"},246:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(94),i=t.n(r);t(243),t(17).default.enqueue,o.a.createContext({});var c=t(324),l={color:"#344955",background:"#f5f5f5",textDecoration:"none"},s={color:"#232F34",fontWeight:"bold"},p=function(e){return o.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},o.a.createElement(i.a,{to:e.to,style:l,activeStyle:s},e.children))};a.a=function(){return o.a.createElement(c.a,{color:"default",style:{height:64}},o.a.createElement("div",{style:{margin:"1rem"}},o.a.createElement(i.a,{to:"/",style:{textShadow:"none",backgroundImage:"none",display:"flex",flexDirection:"row"}},o.a.createElement("img",{src:t(245),style:{marginTop:-30,marginLeft:-25}}),o.a.createElement("h3",{style:{marginTop:-3,marginLeft:-20}},"StatNLP")),o.a.createElement("ul",{style:{listStyle:"none",float:"right",marginTop:-100}},o.a.createElement(p,{to:"/about/"},"About"),o.a.createElement(p,{to:"/people/"},"People"),o.a.createElement(p,{to:"/publications/"},"Publications"),o.a.createElement(p,{to:"/tools/"},"Tools"))))}},271:function(e){e.exports={aisingapore:{link:"https://www.aisingapore.org/"},alibaba:{link:"https://www.alibabagroup.com/en/global/home"},dso:{link:"https://www.dso.org.sg/"},mindef:{link:"https://www.mindef.gov.sg/web/portal/mindef/home"},moe:{link:"https://www.moe.gov.sg/"},nrf:{link:"https://www.nrf.gov.sg/"},nsfc:{link:"http://www.nsfc.gov.cn/"}}},273:function(e,a,t){"use strict";t(172);var n=t(1),o=t(18),r=t(0),i=t.n(r),c=(t(27),t(95)),l=t(242),s=t(248),p=t(327),d=t(247),f=i.a.forwardRef(function(e,a){var t=e.edge,r=void 0!==t&&t,l=e.children,s=e.classes,f=e.className,m=e.color,g=void 0===m?"default":m,u=e.disabled,b=void 0!==u&&u,v=e.disableFocusRipple,h=void 0!==v&&v,y=e.size,x=void 0===y?"medium":y,L=Object(o.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return i.a.createElement(p.a,Object(n.a)({className:Object(c.a)(s.root,f,"default"!==g&&s["color".concat(Object(d.a)(g))],b&&s.disabled,{small:s["size".concat(Object(d.a)(x))]}[x],{start:s.edgeStart,end:s.edgeEnd}[r]),centerRipple:!0,focusRipple:!h,disabled:b,ref:a},L),i.a.createElement("span",{className:s.label},l))});a.a=Object(l.a)(function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(s.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},{name:"MuiIconButton"})(f)},275:function(e,a,t){var n={"./aisingapore.jpg":276,"./alibaba.jpg":277,"./dso.jpg":278,"./mindef.jpg":279,"./moe.jpg":280,"./nrf.jpg":281,"./nsfc.jpg":282};function o(e){var a=r(e);return t(a)}function r(e){var a=n[e];if(!(a+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=275},276:function(e,a,t){e.exports=t.p+"static/aisingapore-a96962bed90e3d6dac9c0c4e442665c2.jpg"},277:function(e,a){e.exports="data:image/jpeg;base64,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"},278:function(e,a,t){e.exports=t.p+"static/dso-c72b53dac3cdf8174b20e6cc06ef08ec.jpg"},279:function(e,a,t){e.exports=t.p+"static/mindef-e0e9fa84aece3eb16bcb8f1632075dd4.jpg"},280:function(e,a,t){e.exports=t.p+"static/moe-a97f13ca751920426260a75dcd4915bb.jpg"},281:function(e,a,t){e.exports=t.p+"static/nrf-7cb8691bebbd7fd86b84b81aaea16e67.jpg"},282:function(e,a,t){e.exports=t.p+"static/nsfc-a4c4cdfaad25d4adb77ab74b590da7f3.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-js-31ab7a6aed71102aa57e.js.map