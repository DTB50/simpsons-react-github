(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/dance.ca1465b1.gif"},function(e,t,a){e.exports=a.p+"static/media/doh.9d763e4d.jpg"},function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),s=a.n(o),c=(a(17),a(2)),u=a(3),i=a(6),l=a(4),h=a(5),m=a(1);a(18);var p=function(e){return e.replace("becuase","because").replace("wierd","weird").replace("gigggling","giggling").replace("sandwhiches","sandwiches").replace("specter","spectre").replace("Edinburg","Edinburgh").replace("stuffs","stuff's").replace("I.. ","I... ").replace("store bought","store-bought")},g=(a(19),function(e){return n.a.createElement("div",{className:"App-header"},n.a.createElement("h1",null,"The Simpsons Quote-o-matic"),n.a.createElement("p",null,e.topQuote))}),f=(a(20),function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(l.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){if(1==this.props.state.numberOfQuotes){var e={transform:"none"};return"Right"==this.props.state.currentCharDirection&&(e={transform:"scaleX(-1)"}),n.a.createElement("section",{className:"quoteBox"},n.a.createElement("img",{className:"charImage",style:e,src:this.props.state.currentPic}),n.a.createElement("div",{className:"textBox"},n.a.createElement("h1",{className:"charQuote"},this.props.state.currentQuote),n.a.createElement("p",{className:"charName"},this.props.state.currentChar)))}if(2==this.props.state.numberOfQuotes){var t={transform:"none"};return console.log(this.props.state.currentCharDirection),"Right"==this.props.state.currentCharDirection&&(t={transform:"scaleX(-1)"}),n.a.createElement("section",{className:"quoteBox"},n.a.createElement("img",{className:"charImage",style:t,src:this.props.state.currentPic}),n.a.createElement("div",{className:"textBox"},n.a.createElement("h1",{className:"charQuote"},this.props.state.currentQuote),n.a.createElement("p",{className:"charName"},this.props.state.currentChar)))}}}]),t}(n.a.Component)),d=a(9),Q=a.n(d),E=a(10),b=a.n(E),v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(l.a)(t).call(this))).state={topQuote:null,numberOfQuotes:1,currentQuotes:null,currentQuote:null,currentChar:null,currentCharDirection:null,currentPic:null,errorMessage:null},fetch("https://thesimpsonsquoteapi.glitch.me/quotes").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({currentQuotes:t}),e.setState({currentQuote:p(t[0].quote)}),e.setState({currentChar:t[0].character}),e.setState({currentCharDirection:t[0].characterDirection}),e.setState({currentPic:t[0].image})}).catch(function(t){return e.setState({errorMessage:"D'oh! Something went wrong..."})}),e.getQuote=e.getQuote.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=["That's not the Monsterometer! That's the Quote Exaggerator!","So it's come to this. A Simpsons quote generator.","An Alan Smithee quote generator.","Quote my shorts!","Don't quote a cow, man!","I call it 'Billy and the Quote-o-saurus'."];var t,a,r=(t=0,a=e.length,t=Math.ceil(t),a=Math.floor(a),Math.floor(Math.random()*(a-t))+t);console.log(r),this.setState({topQuote:e[r]})}},{key:"getQuote",value:function(){var e=this;this.setState({currentQuotes:null}),this.setState({currentQuote:null}),this.setState({currentChar:null}),this.setState({currentCharDirection:null}),this.setState({currentPic:null}),this.setState({errorMessage:null}),fetch("https://thesimpsonsquoteapi.glitch.me/quotes").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({currentQuotes:t}),e.setState({currentQuote:p(t[0].quote)}),e.setState({currentChar:t[0].character}),e.setState({currentCharDirection:t[0].characterDirection}),e.setState({currentPic:t[0].image})}).catch(function(t){return e.setState({errorMessage:"D'oh! Something went wrong..."})})}},{key:"render",value:function(){return null!==this.state.errorMessage?n.a.createElement("div",{className:"App"},n.a.createElement(g,{topQuote:this.state.topQuote}),n.a.createElement("img",{src:b.a,alt:"Loading failed image",className:"loading-image"}),n.a.createElement("p",null,this.state.errorMessage),n.a.createElement("div",{className:"Buttons"},n.a.createElement("button",{onClick:this.getQuote},"Quote"),n.a.createElement("button",null,"Quote-off"))):this.state.currentQuote&&this.state.currentChar&&this.state.currentPic?n.a.createElement("div",{className:"App"},n.a.createElement(g,{topQuote:this.state.topQuote}),n.a.createElement(f,{state:this.state}),n.a.createElement("div",{className:"Buttons"},n.a.createElement("button",{onClick:this.getQuote},"Quote"),n.a.createElement("button",null,"Quote-off"))):n.a.createElement("div",{className:"App"},n.a.createElement(g,{topQuote:this.state.topQuote}),n.a.createElement("img",{src:Q.a,alt:"Loading as fast as I can...",className:"loading-image"}),n.a.createElement("p",null,"Loading..."),n.a.createElement("div",{className:"Buttons"},n.a.createElement("button",{onClick:this.getQuote},"Quote"),n.a.createElement("button",null,"Quote-off")))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.46b71d3d.chunk.js.map