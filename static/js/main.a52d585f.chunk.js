(this["webpackJsonpu-inbox"]=this["webpackJsonpu-inbox"]||[]).push([[0],{180:function(e,t,a){},193:function(e){e.exports=JSON.parse('{"menu":{"title":"Sales","buttonName":"Compose","allConverstation":"All converstation","assignedToMe":"Assigned to me","unassigned":"Unassigned","email":"Email","forms":"Forms","filtred":"Filtred","trash":"Trash","connectAnotherChannel":"Connect another channel"}}')},194:function(e){e.exports=JSON.parse('{"home":{"title":"onvaneKhane"}}')},218:function(e,t,a){e.exports=a(345)},345:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),l=a(7),i=a(389),s=a(413),u=a(13),d=a(39),m=a(2),p=a(422),h=a(394),f=a(392),g=a(347),b=a(181),E=a.n(b),v=a(182),w=a.n(v),O=a(348),x=a(395),y=a(397),j=a(183),C=a.n(j),S=a(393),k=a(396),N=a(103),I=a.n(N),T=Object(i.a)((function(e){return{root:{display:"flex"},appBarHeight:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",backgroundColor:e.palette.primary.main},e.mixins.toolbar),menuButton:{width:42,height:42},menuButtonHide:{width:42,height:42},hide:{display:"none"},drawer:{display:"flex",flexFlow:"column",height:"100vh",width:"15%",flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:"15%",overflowY:"auto",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),transitionTimingFunction:"cubic-bezier(0.6, -0.28, 0.74, 0.05)",transitionDuration:"500ms"},drawerClose:Object(u.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(5)+1},e.breakpoints.up("sm"),{width:e.spacing(5)+1}),list:{paddingLeft:8,minWidth:5},textInList:{fontSize:8,padding:-10},iconInList:{minWidth:35},link:{marginTop:80},channelsSection:{flex:"1",overflowY:"auto",overflowX:"hidden"}}})),B=function(e){var t,a,n=T(),c=r.a.useState(!1),o=Object(l.a)(c,2),i=o[0],s=o[1];return r.a.createElement(p.a,{variant:"permanent",className:Object(m.a)(n.drawer,(t={},Object(u.a)(t,n.drawerOpen,i),Object(u.a)(t,n.drawerClose,!i),t)),classes:{paper:Object(m.a)((a={},Object(u.a)(a,n.drawerOpen,i),Object(u.a)(a,n.drawerClose,!i),a))}},r.a.createElement("div",{className:n.appBarHeight},r.a.createElement(g.a,{color:"inherit","aria-label":"open drawer",onClick:"error"===e.status?e.refetch:function(){s(!0)},className:Object(m.a)(n.menuButton,Object(u.a)({},n.hide,i))},"error"===e.status?r.a.createElement(I.a,null):r.a.createElement(E.a,null)),r.a.createElement(g.a,{className:Object(m.a)(n.menuButtonHide,Object(u.a)({},n.hide,!i)),onClick:function(){s(!1)}},r.a.createElement(w.a,null))),r.a.createElement("div",{className:n.channelsSection},r.a.createElement(f.a,null),"error"===e.status?r.a.createElement("div",null,"Failed to load channels"):"loading"===e.status?r.a.createElement(S.a,null):"success"===e.status&&e.channels?r.a.createElement(h.a,null,e.channels.map((function(t,a){return r.a.createElement(O.a,{button:!0,className:n.list,key:t.id,selected:e.selectedChannelId===t.id,onClick:function(a){return n=t.id,void e.onSelectedChannelChange(n);var n}},r.a.createElement(x.a,{className:n.iconInList},r.a.createElement(k.a,{color:"secondary",max:99,badgeContent:t.count},r.a.createElement(C.a,null))),r.a.createElement(y.a,{primary:t.name,className:n.textInList}))}))):r.a.createElement("div",null,"Error")))},F=a(23),H=a.n(F),R=a(196),L=a(40),M=a(199),A=a(425),D=a(184),W=a.n(D),z=a(105),U=a.n(z),q=Object(i.a)((function(e){return{root:{backgroundColor:e.palette.primary.main,display:"flex",alignItems:"center",width:"100%",boxShadow:"0px 0px 0px 0px"},input:{flex:1}}})),K=function(e){var t=q();return r.a.createElement(M.a,{className:t.root},r.a.createElement(g.a,{className:t.iconButton,"aria-label":"menu",onClick:e.onToggle},r.a.createElement(W.a,null)),r.a.createElement(A.a,{className:t.input,placeholder:"Search...",inputProps:{"aria-label":"search threads"},value:e.value,onChange:e.onChange}),r.a.createElement(g.a,{"aria-label":"search",onClick:e.onSearchQueryClick,disabled:!e.value||e.value.length<1},r.a.createElement(U.a,null)))},P=a(411),J=a(53),G=a(426),Y=a(185),Q=Object(i.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},orange:{color:e.palette.primary.dark,backgroundColor:Object(Y.fade)(e.palette.primary.light,.5)},small:{fontSize:e.spacing(2),width:e.spacing(4),height:e.spacing(4)},medium:{fontSize:e.spacing(5),width:e.spacing(7),height:e.spacing(7)},large:{width:e.spacing(14),height:e.spacing(14),fontSize:e.spacing(8)}}})),X=function(e){var t,a=Q();switch(e.size){case"small":t=a.small;break;case"medium":t=a.medium;break;case"large":default:t=a.large}var n=e.firstName[0].toUpperCase()+""+e.lastName[0].toUpperCase();return r.a.createElement("div",{className:a.root},r.a.createElement(G.a,{className:"".concat(a.orange," ").concat(t)},n))},_=a(398),$=a(197),V=a(400),Z=a(186),ee=a.n(Z);function te(e){var t=r.a.useState(null),a=Object(l.a)(t,2),c=a[0],o=a[1],i=r.a.useState(""),s=Object(l.a)(i,2),u=s[0],d=s[1],m=e.threadStatuses,p=e.threadStatusesStatus;Object(n.useEffect)((function(){"success"===p&&m.length>0&&d(m[0])}),[m,p]);var h=function(e){e.currentTarget.textContent?d(e.currentTarget.textContent):"success"===p&&m.length>0&&d(m[0]),o(null)};return r.a.createElement(r.a.Fragment,null,"success"===p?r.a.createElement("div",null,r.a.createElement(_.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},endIcon:r.a.createElement(ee.a,null)},u),r.a.createElement($.a,{id:"simple-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:h},m&&m.map((function(t){return r.a.createElement(V.a,{key:t,onClick:function(a){h(a),e.onMenuChange("".concat(t))}},t)})))):r.a.createElement(S.a,{color:"secondary"}))}var ae=a(404),ne=a(406),re=a(410),ce=a(417),oe=a(409);function le(e){return ie.apply(this,arguments)}function ie(){return(ie=Object(L.a)(H.a.mark((function e(t){var a,n,r,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("TOKEN"),e.prev=1,(n=new Headers).append("x-auth-token",a),r={method:"GET",headers:n,redirect:"follow"},e.next=7,fetch("https://app.rerumapp.uk/test/unified-inbox/"+t,r);case 7:return c=e.sent,e.next=10,c.json();case 10:return c=(c=e.sent).totalCount?{data:c.results,totalCount:c.totalCount}:c.results,e.abrupt("return",c);case 15:throw e.prev=15,e.t0=e.catch(1),console.log(e.t0),e.t0;case 19:case"end":return e.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)}function se(e,t){return ue.apply(this,arguments)}function ue(){return(ue=Object(L.a)(H.a.mark((function e(t,a){var n,r,c,o;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("TOKEN"),e.prev=1,(r=new Headers).append("x-auth-token",n),r.append("Content-Type","application/json"),c={method:"POST",headers:r,redirect:"follow",body:JSON.stringify(a)},e.next=8,fetch("https://app.rerumapp.uk/test/unified-inbox/"+t,c);case 8:return o=e.sent,e.abrupt("return",o);case 12:throw e.prev=12,e.t0=e.catch(1),console.log(e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}var de=a(44),me=Object(i.a)((function(e){return{refreshRoot:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},refreshButton:{minWidth:"150px"}}}));function pe(e){var t=new Date(e);return"Invalid Date"===t?e:t.toLocaleString()}var he=function(e){var t=me();return r.a.createElement("div",{className:t.refreshRoot},r.a.createElement("h3",null,"Something went Wrong!"),r.a.createElement(_.a,{className:t.refreshButton,variant:"contained",color:"secondary",onClick:e.handleRefresh,endIcon:r.a.createElement(I.a,null)},"Refresh"))},fe=a(4),ge=a(401),be=a(402),Ee=a(403),ve=Object(i.a)((function(e){return{card:{width:"93%",marginLeft:"5%",marginTop:"10px",overflowY:"auto",backgroundColor:"#fafafa"},avatar:{backgroundColor:e.palette.primary.main},header:{backgroundColor:e.palette.primary,color:"white"}}}));function we(e){var t=ve(),a=document.getElementById("content-".concat(e.message.id)),c=Object(n.useState)(!!(a&&a.scrollHeight>a.clientHeight)),o=Object(l.a)(c,2),i=o[0],s=o[1];Object(n.useEffect)((function(){s(!!(a&&a.scrollHeight>a.clientHeight))}),[a]);var u=Object(n.useState)(!1),m=Object(l.a)(u,2),p=m[0],h=m[1];return r.a.createElement(ge.a,{className:t.card},r.a.createElement(be.a,{avatar:r.a.createElement(G.a,{className:t.avatar},e.message.createdBy?"".concat(e.message.createdBy.firstName.charAt(0)).concat(e.message.createdBy.lastName.charAt(0)):"?"),title:r.a.createElement(J.a,{variant:"h6",color:"primary"},e.message.createdBy?"".concat(e.message.createdBy.firstName," ").concat(e.message.createdBy.lastName):"?"),subheader:r.a.createElement(J.a,{color:"secondary"},pe(e.message.createdDate)),className:t.header}),r.a.createElement(Ee.a,null,r.a.createElement("div",{id:"container-".concat(e.message.id)},r.a.createElement("div",{id:"content-".concat(e.message.id),dangerouslySetInnerHTML:{__html:e.message.body},style:Object(d.a)(Object(d.a)({whiteSpace:"normal"},p?null:{maxHeight:"150px"}),p?null:{overflow:"hidden"})}),i&&r.a.createElement("div",{style:{marginTop:"10px",width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement(_.a,{onClick:function(){return h((function(e){return!e}))},variant:"outlined"},p?"show less":"show more")))))}var Oe=Object(i.a)((function(e){return{card:{maxWidth:"70%",marginLeft:"auto",marginRight:"auto",marginTop:"10px",overflowY:"hidden",border:"2px solid #ffeb00",borderRadius:"9px 9px 9px 9px",backgroundColor:"#fef8f0"},content:{display:"flex",alignItems:"center"},commentText:{padding:2,textAlign:"center"},avatar:{backgroundColor:e.palette.secondary.main}}}));function xe(e){var t=Oe(),a=document.getElementById("content-".concat(e.message.id)),c=Object(n.useState)(!!(a&&a.scrollHeight>a.clientHeight)),o=Object(l.a)(c,2),i=o[0],s=o[1];Object(n.useEffect)((function(){s(!!(a&&a.scrollHeight>a.clientHeight))}),[a]);var u=Object(n.useState)(!1),m=Object(l.a)(u,2),p=m[0],h=m[1];return r.a.createElement(ge.a,{className:t.card},r.a.createElement(be.a,{avatar:r.a.createElement(G.a,{className:t.avatar},e.message.createdBy?"".concat(e.message.createdBy.firstName.charAt(0)).concat(e.message.createdBy.lastName.charAt(0)):"?"),title:r.a.createElement(J.a,{variant:"h6",color:"secondary"},e.message.createdBy?"".concat(e.message.createdBy.firstName," ").concat(e.message.createdBy.lastName):"?"),subheader:r.a.createElement(J.a,{color:"primary"},pe(e.message.createdDate))}),r.a.createElement(Ee.a,{className:t.content},r.a.createElement("div",{id:"container-".concat(e.message.id)},r.a.createElement("div",{id:"content-".concat(e.message.id),dangerouslySetInnerHTML:{__html:e.message.body},style:Object(d.a)(Object(d.a)({whiteSpace:"normal"},p?null:{maxHeight:"150px"}),p?null:{overflow:"hidden"})}),i&&r.a.createElement("div",{style:{marginTop:"10px",width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement(_.a,{onClick:function(){return h((function(e){return!e}))},variant:"outlined"},p?"show less":"show more")))))}var ye=a(198),je=a(418),Ce=a(405),Se=a(187),ke=a.n(Se),Ne=(a(228),a(123)),Ie=a.n(Ne),Te=a(36),Be=a(124);a(324);function Fe(e){var t=e.children,a=e.value,n=e.index,c=Object(ye.a)(e,["children","value","index"]);return r.a.createElement(ce.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},c),a===n&&r.a.createElement(ce.a,{p:1},t))}function He(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Re=Object(i.a)((function(e){return{root:{padding:"0px",height:"100%",display:"flex",flexFlow:"column"},rootText:{"& > *":{margin:e.spacing(1)},textInput:{overflowY:"hidden"}},editor:{padding:"0px 5px",maxHeight:"30vh",overflow:"auto",maxWidth:"100%",whiteSpace:"prewrap",overflowWrap:"break-word",wordBreak:"break-word"},tab:{minHeight:"160px",maxWidth:"100%"},replyTab:{backgroundColor:"#fafafa"},commentTab:{backgroundColor:"#fef8f0"},appBarSection:{display:"flex",flexDirection:"row",alignItems:"center"},sendButton:{marginLeft:"auto",minWidth:"100px",marginRight:"10px"}}}));function Le(e){var t=Re(),a=Object(n.useState)(0),c=Object(l.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)(Te.EditorState.createEmpty()),u=Object(l.a)(s,2),d=u[0],p=u[1],h=Object(n.useState)(Te.EditorState.createEmpty()),f=Object(l.a)(h,2),g=f[0],b=f[1];return r.a.createElement("div",{className:t.root},r.a.createElement(ae.a,{position:"static",className:t.appBarSection},r.a.createElement(je.a,{value:o,onChange:function(e,t){i(t)},"aria-label":"simple tabs example"},r.a.createElement(Ce.a,Object.assign({label:"Reply"},He(0))),r.a.createElement(Ce.a,Object.assign({label:"Comment"},He(1)))),r.a.createElement(_.a,{variant:"contained",endIcon:r.a.createElement(ke.a,null),className:t.sendButton,disabled:0===o&&d&&d.getCurrentContent()&&Object(Te.convertToRaw)(d.getCurrentContent()).blocks[0].text<1||1===o&&g&&g.getCurrentContent()&&Object(Te.convertToRaw)(g.getCurrentContent()).blocks[0].text<1,onClick:Object(L.a)(H.a.mark((function t(){var a;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={body:0===o?Ie()(Object(Te.convertToRaw)(d.getCurrentContent())):Ie()(Object(Te.convertToRaw)(g.getCurrentContent())),type:0===o?"EMAIL":"COMMENT",visibility:"PUBLIC"},t.prev=1,e.onIsSendingMessage(!0),t.next=5,se("threads/".concat(e.threadId,"/messages"),a);case 5:e.messagesRefresh(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:p(Te.EditorState.createEmpty()),b(Te.EditorState.createEmpty()),e.onIsSendingMessage(!1);case 14:case"end":return t.stop()}}),t,null,[[1,8]])})))},"Send")),r.a.createElement(Fe,{id:"reply-input-section",value:o,index:0,className:Object(m.a)(t.tab,t.replyTab)},r.a.createElement(Be.Editor,{editorState:d,onEditorStateChange:function(e){p(e)},editorClassName:t.editor,toolbar:{options:["inline","link","list"],inline:{inDropdown:!1,className:void 0,component:void 0,dropdownClassName:void 0,options:["bold","italic","underline"]}}})),r.a.createElement(Fe,{id:"comment-input-section",value:o,index:1,className:Object(m.a)(t.tab,t.commentTab)},r.a.createElement(Be.Editor,{editorState:g,onEditorStateChange:function(e){b(e)},editorClassName:t.editor,toolbar:{options:["inline","link","list"],inline:{inDropdown:!1,className:void 0,component:void 0,dropdownClassName:void 0,options:["bold","italic","underline"]}}})))}var Me=a(126),Ae=a.n(Me),De=a(416),We=a(188),ze=a(122),Ue=(a(180),Object(i.a)((function(e){return{root:{height:"100vh",display:"flex",flexFlow:"column"},grow:{flexGrow:1,overflow:"auto"},input:{width:"100%",overflow:"auto"},messagesSection:{flex:"1",overflow:"auto",paddingBottom:"5px"},main:{flex:"1",display:"flex",flexFlow:"column",overflow:"auto"},cardRoot:{backgroundColor:"rgba(255, 255, 255, 0)",boxShadow:"0px 0px 0px 0px",height:"64px"}}})));function qe(e){var t=e.threadRefetch,a=e.selectedThread,c=e.onChangeStatus,o=e.isChangingThreadStatus,i=Ue(),s=Object(n.useState)(null),u=Object(l.a)(s,2),d=u[0],m=u[1],p=Object(n.useState)(null),h=Object(l.a)(p,2),f=h[0],g=h[1],b=Object(n.useState)(""),E=Object(l.a)(b,2),v=E[0],w=E[1],O=Object(n.useState)([]),x=Object(l.a)(O,2),y=x[0],j=x[1],C=Object(n.useState)(""),k=Object(l.a)(C,2),N=k[0],I=k[1],T=Object(n.useState)(0),B=Object(l.a)(T,2),F=B[0],R=B[1],M=Object(n.useState)(!1),A=Object(l.a)(M,2),D=A[0],W=A[1];function z(){return(z=Object(L.a)(H.a.mark((function e(t){var n,r,c=arguments;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:0,e.next=3,le("threads/".concat(null===a||void 0===a?void 0:a.id,"/messages?page=").concat(n,"&pageSize=").concat(5));case 3:return r=e.sent,R(r.totalCount),e.abrupt("return",{data:r.data,page:n});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=Object(de.a)({queryKey:"threads/".concat(null===a||void 0===a?void 0:a.id,"/messages"),queryFn:function(e){return z.apply(this,arguments)},config:{getFetchMore:function(e,t){return!(5*e.page>=F)&&e.page+1},refetchOnWindowFocus:!1,enabled:!!a}}),q=U.data,K=U.status,P=U.refetch,G=U.fetchMore,Y=U.canFetchMore,Q=U.isFetchingMore,X=Object(de.b)({queryKey:"threads/status",queryFn:le,config:{refetchOnWindowFocus:!1,staleTime:5e4}}),_=X.data,Z=X.status,ee=Object(n.useState)(),te=Object(l.a)(ee,2),re=te[0],ce=te[1];Object(n.useEffect)((function(){ce(a&&a.assignee&&a.assignee.firstName?"".concat(a.assignee.firstName," ").concat(a.assignee.lastName):"Unassigned")}),[a]);var oe=function(){m(null)},ie=Object(de.b)({queryKey:"users",queryFn:le,config:{refetchOnWindowFocus:!1}}),ue=ie.data,me=ie.status;function pe(){return(pe=Object(L.a)(H.a.mark((function e(n,r){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I("loading"),e.prev=1,e.next=4,se("reassign?assigneeId=".concat(n,"&threadId=").concat(a.id));case 4:I("success"),ce(r),t(),e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(1),I("error"),console.log(e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e;if(v.length>2&&ue&&ue.length>0){var t=v.toUpperCase();e=ue.filter((function(e){return e.firstName.toUpperCase().indexOf(t)>-1||(e.lastName.toUpperCase().indexOf(t)>-1||e.email.toUpperCase().indexOf(t)>-1)})),j(e)}else j([])}),[v,ue]),r.a.createElement("div",{className:i.root},r.a.createElement(ae.a,{position:"sticky"},r.a.createElement(ne.a,null,q&&q.length>0?r.a.createElement(r.a.Fragment,null,"loading"===me||"loading"===N?r.a.createElement(S.a,{color:"secondary"}):r.a.createElement(ge.a,{className:i.cardRoot},r.a.createElement(be.a,{style:{cursor:"pointer"},avatar:r.a.createElement(Ae.a,null),title:Boolean(d)?null:"Assignee",subheader:Boolean(d)?null:re,onClick:function(e){m(e.currentTarget)}})),r.a.createElement("div",{className:i.grow}),"success"===Z&&_.length>0?r.a.createElement(J.a,{noWrap:!0,style:{cursor:"pointer"},onClick:function(e){return g(e.currentTarget)}},a.status):r.a.createElement(S.a,{color:"secondary"}),r.a.createElement($.a,{id:"status-menu",anchorEl:f,keepMounted:!1,open:Boolean(f),onClose:function(){return g(null)}},_.map((function(e){return e===a.status?null:r.a.createElement(V.a,{key:e,onClick:function(){c(e),g(null)}},"Mark as ".concat(e))}))),r.a.createElement(Ke,{id:"simple-menu",anchorEl:d,keepMounted:!1,open:Boolean(d),onClose:oe,style:{marginLeft:"45px",marginTop:"-10px"}},r.a.createElement("div",{style:{padding:"2px"}},r.a.createElement(De.a,{placeholder:"User",value:v,onChange:function(e){return w(e.target.value)},fullWidth:!0})),"loading"===me?r.a.createElement(S.a,null):y&&y.length>0?y.map((function(e){return r.a.createElement("div",{key:e.id,style:{backgroundColor:"white",border:"1px solid #ffc107"}},r.a.createElement(V.a,{onClick:function(t){!function(e,t){pe.apply(this,arguments)}(e.id,"".concat(e.firstName," ").concat(e.lastName)),oe()}},r.a.createElement(ge.a,{style:{boxShadow:"none",width:"100%"}},r.a.createElement(be.a,{avatar:r.a.createElement(Ae.a,null),title:"".concat(e.firstName," ").concat(e.lastName),subheader:e.email}))))})):null)):null)),o?r.a.createElement("div",{style:{margin:"auto"}},r.a.createElement(S.a,null)):q&&q.length>0?r.a.createElement("div",{className:i.main},r.a.createElement("div",{className:i.messagesSection},q.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},e.data&&e.data.map((function(e){switch(e.type){case"EMAIL":return r.a.createElement(we,{key:e.id,message:e});case"COMMENT":default:return r.a.createElement(xe,{key:e.id,message:e})}})))})),!Q&&5*Y<F?r.a.createElement(We.a,{onEnter:function(){return G()}}):Q?r.a.createElement("div",{style:{margin:"10px 0px",display:"flex",justifyContent:"center"}},r.a.createElement(S.a,null)):r.a.createElement("h4",{style:{textAlign:"center",color:"grey"}},"end of the list")),r.a.createElement("div",{className:i.input},r.a.createElement(Le,{threadId:a.id,messagesRefresh:P,onIsSendingMessage:function(e){return W(e)}}))):"loading"===K||D?r.a.createElement("div",{style:{margin:"auto"}},r.a.createElement(S.a,null)):"error"===K?r.a.createElement(he,{handleRefresh:P}):r.a.createElement("h2",{style:{textAlign:"center"}},"Select a thread to see messages"))}var Ke=Object(fe.a)({paper:{backgroundColor:"#ffffff00"}})((function(e){return r.a.createElement($.a,Object.assign({elevation:0,getContentAnchorEl:null},e))})),Pe=a(191),Je=a.n(Pe),Ge=a(190),Ye=a.n(Ge),Qe=a(391),Xe=Object(i.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",verticalAlign:"middle",width:"100%"},avatar:{height:"85px",width:"85px",backgroundColor:e.palette.primary.main,fontSize:"40px"}}})),_e=function(e){var t=Xe(),a=e.selectedContact,n=a.contactFirstName,c=a.contactLastName,o=a.email;return e.selectedContact?r.a.createElement("div",{className:t.root},n&&c?r.a.createElement(G.a,{className:t.avatar},"".concat(n[0]).concat(c[0])):null,r.a.createElement(J.a,{variant:"h6"},"".concat(n," ").concat(c)),r.a.createElement(J.a,{variant:"subtitle1"},o)):null},$e=a(423),Ve=a(407),Ze=a(408),et=a(189),tt=a.n(et),at=Object(i.a)((function(e){return{root:{width:"100%",flex:"1",overflow:"auto"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},scroll:{display:"flex",flexDirection:"column",maxWidth:"90%"}}}));function nt(e){var t,a=at(),n=r.a.useState("panel1"),c=Object(l.a)(n,2),o=c[0],i=c[1],s=e.selectedContact;return r.a.createElement("div",{className:a.root},r.a.createElement($e.a,{expanded:"panel1"===o,onChange:(t="panel1",function(e,a){i(!!a&&t)})},r.a.createElement(Ve.a,{expandIcon:r.a.createElement(tt.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header",style:{backgroundColor:"#d4d4d4"}},r.a.createElement(J.a,{className:a.heading},"About this contact")),r.a.createElement(Ze.a,null,r.a.createElement("div",null,r.a.createElement(J.a,{variant:"subtitle1"},"First Name:"),r.a.createElement(J.a,{variant:"subtitle2"},s&&s.contactFirstName?s.contactFirstName:"Unknown"),r.a.createElement("br",null),r.a.createElement(J.a,{variant:"subtitle1"},"Last Name:"),r.a.createElement(J.a,{variant:"subtitle2"},s&&s.contactLastName?s.contactLastName:"Unknown"),r.a.createElement("br",null),r.a.createElement(J.a,{variant:"subtitle1"},"Email:"),r.a.createElement(J.a,{variant:"subtitle2"},s&&s.email?s.email:"No Email Address"),r.a.createElement("br",null),r.a.createElement(J.a,{variant:"subtitle1"},"Phone number:"),r.a.createElement(J.a,{variant:"subtitle2"},s&&s.telephone?s.telephone:"No Phone Number"),r.a.createElement("br",null),r.a.createElement(J.a,{variant:"subtitle1"},"Company name:"),r.a.createElement(J.a,{variant:"subtitle2"},s&&s.companyName?s.companyName:"No Company Name")))))}var rt=a(421),ct=a(419);function ot(e){return r.a.createElement(ct.a,Object.assign({elevation:6,variant:"filled"},e))}var lt=Object(i.a)((function(e){var t;return{root:{display:"flex"},appbarHieght:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-start",backgroundColor:e.palette.primary.main},e.mixins.toolbar),menuButton:{width:42,height:42},hide:{display:"none"},drawer:{height:"100vh",display:"flex",flexFlow:"column",width:"20%",flexShrink:0,whiteSpace:"nowrap"},drawerOpen:(t={width:"20%"},Object(u.a)(t,e.breakpoints.down("md"),{width:"50vh"}),Object(u.a)(t,"transition",e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})),Object(u.a)(t,"transitionTimingFunction","cubic-bezier(0.6, -0.28, 0.74, 0.05)"),Object(u.a)(t,"transitionDuration","500ms"),t),drawerClose:Object(u.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(4)+1},e.breakpoints.up("sm"),{width:e.spacing(5)+1}),content:{flexGrow:1,padding:e.spacing(0)},customerInfoSection:{paddingTop:"5px",flex:"1",overflow:"auto",display:"flex",flexFlow:"column"}}})),it=function(e){var t,a,c=e.Contacts,o=lt(),i=r.a.useState(!1),s=Object(l.a)(i,2),d=s[0],h=s[1],b=r.a.useState(!1),E=Object(l.a)(b,2),v=E[0],w=E[1],O=c&&c[0];Object(n.useEffect)((function(){h(!!O)}),[O]);return r.a.createElement(p.a,{variant:"permanent",anchor:"right",className:Object(m.a)(o.drawer,(t={},Object(u.a)(t,o.drawerOpen,d),Object(u.a)(t,o.drawerClose,!d),t)),classes:{paper:Object(m.a)((a={},Object(u.a)(a,o.drawerOpen,d),Object(u.a)(a,o.drawerClose,!d),a))}},r.a.createElement("div",{className:o.appbarHieght},r.a.createElement(g.a,{color:"inherit","aria-label":"open drawer",onClick:function(){O?h(!0):w(!0)},className:Object(m.a)(o.menuButton,Object(u.a)({},o.hide,d)),disabled:!O||O.length<1},r.a.createElement(Ye.a,null)),r.a.createElement(g.a,{className:Object(m.a)(o.menuButton,Object(u.a)({},o.hide,!d)),onClick:function(){h(!1)}},r.a.createElement(Je.a,null))),r.a.createElement(Qe.a,{in:d,timeout:{enter:1e3,exit:500},className:Object(m.a)(Object(u.a)({},o.hide,!d))},r.a.createElement("div",{style:{flex:"1",overflow:"auto",display:"flex",flexFlow:"column"}},r.a.createElement("div",{className:Object(m.a)(o.customerInfoSection,Object(u.a)({},o.hide,!d))},r.a.createElement(_e,{selectedContact:O||"Unknown"}),r.a.createElement(f.a,null),r.a.createElement(nt,{selectedContact:O||"Unknown"})))),r.a.createElement(rt.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:v,autoHideDuration:4e3,onClose:function(e,t){"clickaway"!==t&&w(!1)}},r.a.createElement(ot,{severity:"error"},"Contact not selected")))},st=Object(i.a)((function(e){return{root:{width:"100%",height:"100vh",display:"flex"},list:{width:"100%",backgroundColor:e.palette.background.paper,position:"relative",overflow:"auto",height:"calc(100vh - 66px)"},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0},inline:{display:"inline"},searchInputOpen:{width:"80%",overflow:"hidden",backgroundColor:"#cecece",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},searchInputClose:Object(u.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(5)+1},e.breakpoints.up("sm"),{width:e.spacing(5)+1}),hide:{display:"none"},tools:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",backgroundColor:e.palette.primary.main,boxShadow:"0px 0px 0px 0px"},toolbar:{width:"100%"},space:{flexGrow:10},threads:Object(u.a)({height:"100vh"},e.breakpoints.down("sm"),{height:"35vh",overflow:"auto"}),messageInfo:Object(u.a)({height:"100vh"},e.breakpoints.down("sm"),{height:"55vh",overflow:"auto"}),content:{width:"100%"}}})),ut=function(e){var t,a,c=e.channelID,o=st(),i=Object(n.useState)(""),s=Object(l.a)(i,2),d=s[0],p=s[1],b=Object(n.useState)(!1),E=Object(l.a)(b,2),v=E[0],w=E[1],x=Object(n.useState)(!1),j=Object(l.a)(x,2),C=j[0],S=j[1],k=Object(n.useState)(""),N=Object(l.a)(k,2),I=N[0],T=N[1],B=Object(n.useState)(!1),F=Object(l.a)(B,2),A=F[0],D=F[1],W=Object(n.useState)(window.innerHeight),z=Object(l.a)(W,2),q=z[0],G=z[1];Object(n.useEffect)((function(){window.addEventListener("resize",(function(){return G(window.innerHeight)}))}),[]);var Y=Object(de.b)({queryKey:"threads/status",queryFn:le,config:{refetchOnWindowFocus:!1,staleTime:5e4}}),Q=Y.data,_=Y.status;Object(n.useEffect)((function(){"success"===_&&Q.length>0&&p(Q[0])}),[Q,_]);var $=Object(de.b)({queryKey:"".concat(C?C&&A?"channels/".concat(c,"/threads/search?searchQuery=").concat(I):null:"channels/".concat(c,"/threads?page=0&pageSize=10&status=").concat(d)),queryFn:le,config:{refetchOnWindowFocus:!1,enabled:!!c}}),V=$.data,Z=$.status,ee=$.refetch,ie=function(){S(!C)},ue=Object(n.useState)(),me=Object(l.a)(ue,2),pe=me[0],fe=me[1];function ge(){return(ge=Object(L.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,se("threads/".concat(pe.id,"/status?status=").concat(t));case 4:ee(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:w(!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){"success"===Z&&V&&V.data&&V.data.length>0?fe(V.data[0]):fe()}),[V,Z]),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:o.content},r.a.createElement("div",{className:o.root},r.a.createElement(ze.ResizableBox,{className:"box",height:q,width:300,axis:"x",resizeHandles:["e"]},r.a.createElement("div",null,r.a.createElement(ae.a,{position:"sticky"},r.a.createElement(ne.a,{className:o.toolbar},r.a.createElement(oe.a,{in:!C},r.a.createElement(M.a,{className:Object(m.a)((t={},Object(u.a)(t,o.tools,!C),Object(u.a)(t,o.hide,C),t))},r.a.createElement(te,{onMenuChange:function(e){p(e)},threadStatuses:Q,threadStatusesStatus:_}),r.a.createElement(g.a,{"aria-label":"delete",onClick:ie,size:"small"},r.a.createElement(U.a,null)))),r.a.createElement(oe.a,{in:C},r.a.createElement(M.a,{className:Object(m.a)((a={},Object(u.a)(a,o.tools,C),Object(u.a)(a,o.hide,!C),a))},r.a.createElement(K,{value:I,onToggle:ie,show:C,onChange:function(e){D(!1),T(e.target.value)},onSearchQueryClick:function(){return D(!0)}}))))),r.a.createElement(M.a,{variant:"outlined"},r.a.createElement(h.a,{className:o.list},"loading"===Z?Object(R.a)(Array(20)).map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(O.a,{alignItems:"flex-start",key:t},r.a.createElement(ce.a,{width:"100%"},r.a.createElement(re.a,null),r.a.createElement(re.a,{width:"60%"}))),r.a.createElement(f.a,{variant:"middle",component:"li"}))})):"success"===Z&&V&&V.data&&V.data.length<1?r.a.createElement("h2",{style:{textAlign:"center",color:"#5b5b5b"}},"No Thread"):"success"===Z&&V&&V.data?V.data.map((function(e){var t=e.subject.split(" ");return t.length<2&&t.push(e.subject[2]),r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(O.a,{button:!0,alignItems:"flex-start",selected:(null===pe||void 0===pe?void 0:pe.id)===e.id,onClick:function(){return fe(e)}},r.a.createElement(P.a,null,r.a.createElement(X,{size:"small",firstName:t[0],lastName:t[1]})),r.a.createElement(y.a,{primary:e.subject,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{component:"span",variant:"body2",className:o.inline,color:"textPrimary"},e.tag," - "),e.status)})),r.a.createElement(f.a,{component:"li"}))})):"error"===Z?r.a.createElement(he,{handleRefresh:ee}):null)))),r.a.createElement("div",{style:{flex:"1"}},r.a.createElement(qe,{threadRefetch:ee,selectedThread:pe,onChangeStatus:function(e){return ge.apply(this,arguments)},isChangingThreadStatus:v})))),r.a.createElement(it,{Contacts:null===pe||void 0===pe?void 0:pe.contacts}))},dt=a(192),mt=a(412),pt=Object(i.a)((function(e){return{smallScreenSection:{backgroundColor:"#f1f1f1",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20%",textAlign:"center"},root:{display:"flex"},menuButton:{width:42,height:42},hide:{display:"none"},drawer:{width:"15%",flexShrink:0,whiteSpace:"nowrap"},content:{flexGrow:1,padding:e.spacing(0),height:"100vh"},backdropRoot:{display:"flex","& > * + *":{marginLeft:e.spacing(1),alignItems:"center",justify:"center",height:"100vh"}},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),ht=function(){var e=pt(),t=Object(mt.a)("(min-width:700px)"),a=Object(n.useState)(),c=Object(l.a)(a,2),o=c[0],i=c[1],u=Object(de.b)({queryKey:"channels",queryFn:le,config:{refetchOnWindowFocus:!1}}),d=u.data,m=u.status,p=u.refetch;return Object(n.useEffect)((function(){"success"===m&&d.length>0&&i(d[0].id)}),[m,d]),Object(n.useEffect)((function(){(new Headers).append("Content-Type","application/x-www-form-urlencoded");var e=new FormData;e.append("username","ashkala"),e.append("password","block-monitored-policebox"),fetch("https://app.rerumapp.uk/test/authenticate",{method:"POST",body:e,redirect:"follow"}).then((function(e){return e.text()})).then((function(e){return localStorage.setItem("TOKEN",JSON.parse(e).token)})).catch((function(e){return console.log("error in token",e)}))}),[]),t?r.a.createElement("div",{className:e.root},r.a.createElement(dt.ReactQueryDevtools,null),r.a.createElement(s.a,null),r.a.createElement(B,{status:m,refetch:p,channels:d,onSelectedChannelChange:function(e){i(e)},selectedChannelId:o}),r.a.createElement(ut,{channelID:o})):r.a.createElement("div",{className:e.smallScreenSection},r.a.createElement("h3",null,"The page cannot be displayed on this screen"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(332),a(333);var ft=a(414),gt=a(195),bt=a(415),Et=a(127),vt=a(193),wt=a(194);Object(Et.setDefaultTranslations)({en:vt,fr:wt}),Object(Et.setDefaultLanguage)("en");var Ot=Object(gt.a)({palette:{primary:{dark:"#d67200",main:"#f69321",light:"#ffb560"},secondary:{main:ft.a[500]}}});o.a.render(r.a.createElement(bt.a,{theme:Ot},r.a.createElement(ht,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[218,1,2]]]);
//# sourceMappingURL=main.a52d585f.chunk.js.map