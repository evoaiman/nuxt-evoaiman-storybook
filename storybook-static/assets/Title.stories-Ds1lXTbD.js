import{b as p,t as m,n as u,o as d}from"./vue.esm-bundler-DwvLZdam.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";const _={name:"Title",props:{text:{type:String,required:!0},color:{type:String,default:"black"},size:{type:String,default:"2xl"}},computed:{classes(){return[`text-${this.color}`,`text-${this.size}`]}}};function g(z,S,n,k,y,i){return d(),p("h1",{class:u(i.classes)},m(n.text),3)}const f=x(_,[["render",g],["__scopeId","data-v-9eed0a04"]]),C={title:"Example/Title",component:f,tags:["autodocs"],argTypes:{text:{control:"text"},color:{control:"text"},size:{control:"text"}}},t={args:{text:"Hello Storybook",color:"black",size:"2xl"}},e={args:{text:"Custom Title",color:"[#95d600]",size:"4xl"}};var o,s,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'Hello Storybook',
    color: 'black',
    size: '2xl'
  }
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var a,c,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    text: 'Custom Title',
    color: '[#95d600]',
    size: '4xl'
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const h=["Default","Custom"];export{e as Custom,t as Default,h as __namedExportsOrder,C as default};
