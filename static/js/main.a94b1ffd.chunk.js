(this["webpackJsonpmock-post-generator"]=this["webpackJsonpmock-post-generator"]||[]).push([[0],{101:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),o=t(36),i=t(37),s=t(46),m=t(45),u=t(54),g=t(114),f=t(55),h="/",C="/twitter/tweet";function d(){return r.a.createElement(g.a,{bg:"light",expand:"lg"},r.a.createElement(g.a.Brand,{href:h},"Fake Screenshot Generator"),r.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(f.a,{className:"mr-auto"},r.a.createElement(f.a.Link,{href:h},"Home"),r.a.createElement(u.a,{title:"Twitter",id:"basic-nav-dropdown"},r.a.createElement(u.a.Item,{href:C},"Tweet")))))}var p=t(73),A=t.n(p);function b(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"),r.a.createElement("a",{href:C},"Twitter Feed"))}var E=t(70),v=t(18),k=t(32),w=t.n(k),x=t(51),I=t(113),J=t(6),y=Object(I.a)({root:{border:"1px solid",padding:15}});function N(e){var a=y(),t=e.name,n=e.nameConfigCallback,l=e.verifiedConfigCallback,c=e.userName,o=e.userNameConfigCallback,i=e.age,s=e.ageConfigCallback,m=e.description,u=e.descriptionConfigCallback,g=e.comments,f=e.commentsConfigCallback,h=e.retweets,C=e.retweetsConfigCallback,d=e.likes,p=e.likesConfigCallback,A=e.profilePicConfigCallback;return r.a.createElement("div",{className:a.root},r.a.createElement(J.a,null,r.a.createElement(J.a.Group,{controlId:"formUploader"},r.a.createElement(J.a.File,{label:"Profile Picture",onChange:A})),r.a.createElement(J.a.Group,{controlId:"formBasicInfo"},r.a.createElement(J.a.Label,null,"Display Name"),r.a.createElement(J.a.Control,{type:"text",placeholder:"Display Name",value:t,onChange:n}),r.a.createElement(J.a.Label,null,"User Name"),r.a.createElement(J.a.Control,{type:"text",placeholder:"User Name",value:c,onChange:o}),r.a.createElement(J.a.Label,null,"Tweet Age"),r.a.createElement(J.a.Control,{type:"text",placeholder:"Tweet Age",value:i,onChange:s})),r.a.createElement(J.a.Group,{controlId:"formCheckboxes"},r.a.createElement(J.a.Check,{type:"checkbox",label:"Verified?",onChange:l})),r.a.createElement(J.a.Group,{controlId:"formDescription"},r.a.createElement(J.a.Label,null,"Example textarea"),r.a.createElement(J.a.Control,{as:"textarea",rows:"4",value:m,onChange:u})),r.a.createElement(J.a.Group,{controlId:"formFooter"},r.a.createElement(J.a.Label,null,"Comments"),r.a.createElement(J.a.Control,{type:"number",value:g,placeholder:"Comments",onChange:f}),r.a.createElement(J.a.Label,null,"Retweets"),r.a.createElement(J.a.Control,{type:"number",value:h,placeholder:"Retweets",onChange:C}),r.a.createElement(J.a.Label,null,"Like"),r.a.createElement(J.a.Control,{type:"number",value:d,placeholder:"Likes",onChange:p}))))}var q=t(68),M=t(69),B=t(30),V=Object(I.a)({cardRoot:{fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif",border:"0px solid",padding:15,lineHeight:1.3125,display:"flex"},cardProfileRoot:{margin:5,flexBasis:49},cardContentRoot:{maxWidth:509,minWidth:509,margin:5},cardFooterRoot:{display:"flex",maxWidth:425,margin:"10px 0",color:"rgb(101, 119, 134)",fontSize:13},name:{fontWeight:700},userName:{fontWeight:400,color:"rgb(101, 119, 134)"},verifiedIcon:{height:15,color:"rgb(29, 161, 242)",fill:"rgb(29, 161, 242)"},footerIcon:{height:"1.25em",color:"rgb(101, 119, 134)",fill:"rgb(101, 119, 134)",fontWeight:400,fontSize:15,marginRight:5},profilePic:{borderRadius:9999,height:49,width:49},cardFooterItem:{flexGrow:1}});function F(e){var a=V(),t=e.name,n=e.verified,l=e.userName,c=e.age,o=e.description,i=e.profilePic,s=e.comments,m=e.retweets,u=e.likes;return r.a.createElement("div",{className:a.cardRoot,id:"twitter-tweet-node"},r.a.createElement("div",{className:a.cardProfileRoot},r.a.createElement("img",{className:a.profilePic,src:i,alt:"profilePic"})),r.a.createElement("div",{className:a.cardContentRoot},r.a.createElement("div",null,r.a.createElement("span",{className:a.name},t," ",n&&r.a.createElement("svg",{className:a.verifiedIcon,viewBox:"0 0 24 24","aria-label":"Verified account"},r.a.createElement("g",null,r.a.createElement("path",{d:"M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"})))),r.a.createElement("span",{className:a.userName}," @",l," \xb7 ",c)),r.a.createElement("div",null,o),r.a.createElement("div",{className:a.cardFooterRoot},r.a.createElement("div",{className:a.cardFooterItem},r.a.createElement("svg",{className:a.footerIcon,viewBox:"0 0 24 24"},r.a.createElement("g",null,r.a.createElement("path",{d:"M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"}))),r.a.createElement("span",null," ",s)),r.a.createElement("div",{className:a.cardFooterItem},r.a.createElement("svg",{className:a.footerIcon,viewBox:"0 0 24 24"},r.a.createElement("g",null,r.a.createElement("path",{d:"M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"}))),r.a.createElement("span",null," ",m)),r.a.createElement("div",{className:a.cardFooterItem},r.a.createElement("svg",{className:a.footerIcon,viewBox:"0 0 24 24"},r.a.createElement("g",null,r.a.createElement("path",{d:"M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"}))),r.a.createElement("span",null," ",u)),r.a.createElement("div",{className:a.cardFooterItem},r.a.createElement("svg",{className:a.footerIcon,viewBox:"0 0 24 24"},r.a.createElement("g",null,r.a.createElement("path",{d:"M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"}),r.a.createElement("path",{d:"M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"})))))))}var W=t(44),G=t(66),L=t(67),S=t.n(L),j=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).nameConfigCallback=function(e){n.setState({name:e.target.value})},n.verifiedConfigCallback=function(e){n.setState({verified:e.target.checked})},n.userNameConfigCallback=function(e){n.setState({userName:e.target.value})},n.ageConfigCallback=function(e){n.setState({age:e.target.value})},n.descriptionConfigCallback=function(e){n.setState({description:e.target.value})},n.profilePicConfigCallback=function(){var e=Object(x.a)(w.a.mark((function e(a){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.toBase64(a.target.files[0]);case 2:t=e.sent,n.setState({profilePic:t});case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n.commentsConfigCallback=function(e){n.setState({comments:e.target.value})},n.retweetsConfigCallback=function(e){n.setState({retweets:e.target.value})},n.likesConfigCallback=function(e){n.setState({likes:e.target.value})},n.toBase64=function(e){return new Promise((function(a,t){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return a(n.result)},n.onerror=function(e){return t(e)}}))},n.generateNDownload=Object(x.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.toPng)(document.getElementById("twitter-tweet-node"));case 2:a=e.sent,S()(a,"fake-tweet.png");case 4:case"end":return e.stop()}}),e)}))),n.state={name:"John Citizen",userName:"MyUserName",verified:!1,age:"10h",description:"Create your own tweet!~",comments:5,retweets:5,likes:5,profilePic:"data:image/png;base64,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"},n}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(q.a,null,r.a.createElement("h1",null,"Twitter Tweet Generator"),r.a.createElement(M.a,null,r.a.createElement(B.a,{sm:4},r.a.createElement(N,{name:this.state.name,nameConfigCallback:this.nameConfigCallback,verifiedConfigCallback:this.verifiedConfigCallback,userName:this.state.userName,userNameConfigCallback:this.userNameConfigCallback,age:this.state.age,ageConfigCallback:this.ageConfigCallback,description:this.state.description,descriptionConfigCallback:this.descriptionConfigCallback,comments:this.state.comments,commentsConfigCallback:this.commentsConfigCallback,retweets:this.state.retweets,retweetsConfigCallback:this.retweetsConfigCallback,likes:this.state.likes,likesConfigCallback:this.likesConfigCallback,profilePicConfigCallback:this.profilePicConfigCallback})),r.a.createElement(B.a,{sm:8},r.a.createElement("h3",null,"Preview"),r.a.createElement("hr",null),r.a.createElement(F,{name:this.state.name,userName:this.state.userName,verified:this.state.verified,age:this.state.age,description:this.state.description,profilePic:this.state.profilePic,comments:this.state.comments,retweets:this.state.retweets,likes:this.state.likes}),r.a.createElement("hr",null),r.a.createElement(W.a,{variant:"primary",onClick:this.generateNDownload},"Generate & Download Tweet"))))}}]),t}(n.Component),U=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(d,null),r.a.createElement(A.a,null,r.a.createElement(v.a,{exact:!0,path:h},r.a.createElement(b,null)),r.a.createElement(v.a,{exact:!0,path:C},r.a.createElement(j,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(100);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,a,t){e.exports=t(101)}},[[76,1,2]]]);
//# sourceMappingURL=main.a94b1ffd.chunk.js.map