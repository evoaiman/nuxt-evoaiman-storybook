import{M as d}from"./Button-CLJTPZjv.js";import{b as m,d as r,e as v,f as u,t as p,g as l,j as a,k as g,o}from"./vue.esm-bundler-DwvLZdam.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";const y={name:"my-header",components:{MyButton:d},props:{user:{type:Object}},emits:["login","logout","createAccount"]},c={class:"storybook-header"},k={key:0,class:"welcome"};function b(s,e,t,z,B,M){const n=g("my-button");return o(),m("header",null,[r("div",c,[e[5]||(e[5]=v('<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg><h1>Acme</h1></div>',1)),r("div",null,[t.user?(o(),m("span",k,[e[3]||(e[3]=u("Welcome, ")),r("b",null,p(t.user.name),1),e[4]||(e[4]=u("!"))])):l("",!0),t.user?(o(),a(n,{key:1,size:"small",onClick:e[0]||(e[0]=i=>s.$emit("logout")),label:"Log out"})):l("",!0),t.user?l("",!0):(o(),a(n,{key:2,size:"small",onClick:e[1]||(e[1]=i=>s.$emit("login")),label:"Log in"})),t.user?l("",!0):(o(),a(n,{key:3,primary:"",size:"small",onClick:e[2]||(e[2]=i=>s.$emit("createAccount")),label:"Sign up"}))])])])}const V=f(y,[["render",b]]);export{V as M};
