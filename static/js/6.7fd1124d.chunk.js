(this["webpackJsonpwalker-admin"]=this["webpackJsonpwalker-admin"]||[]).push([[6],{115:function(t,e,n){"use strict";n.r(e);var a=n(6),o=n(5),c=n(9),i=n(10),l=n(11),s=n(2),r=n(0),u=n.n(r),m=n(3),h=n(73),f=n(1);function p(){var t=Object(s.a)(["\n    position:relative;\n"]);return p=function(){return t},t}var b=Object(m.a)(f.a)(p()),d=function(t){function e(){return Object(a.a)(this,e),Object(c.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return u.a.createElement(b,null,u.a.createElement(h.a,null),u.a.createElement("h3",{className:"long-content"},"notifications"),u.a.createElement("h3",{className:"long-content"},"notifications"),u.a.createElement("h3",{className:"long-content"},"notifications"),u.a.createElement("h3",{className:"long-content"},"notifications"),u.a.createElement("h3",{className:"long-content"},"notifications"),u.a.createElement("h3",{className:"long-content"},"notifications"),u.a.createElement("h3",{className:"long-content"},"notifications"))}}]),e}(u.a.Component);e.default=d},73:function(t,e,n){"use strict";var a=n(6),o=n(5),c=n(9),i=n(10),l=n(11),s=n(0),r=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(c.a)(this,Object(i.a)(e).call(this,t))).d=document.documentElement,n.b=document.body,n.timer=null,n}return Object(l.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.timer=setInterval((function(){t.moveToTop()}),10)}},{key:"moveToTop",value:function(){this.d.scrollTop-=Math.ceil(.1*(this.d.scrollTop+this.b.scrollTop)),this.b.scrollTop-=Math.ceil(.1*(this.d.scrollTop+this.b.scrollTop)),this.d.scrollTop+this.b.scrollTop===0&&clearInterval(this.timer)}},{key:"render",value:function(){return null}}]),e}(n.n(s).a.Component);e.a=r}}]);