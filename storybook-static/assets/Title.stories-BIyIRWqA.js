import{b as p,t as u,n as m,o as x}from"./vue.esm-bundler-DwvLZdam.js";import{_ as d}from"./_plugin-vue_export-helper-DlAUqK2U.js";const _={name:"Title",props:{text:{type:String,required:!0},color:{type:String,default:"black"},size:{type:String,default:"2xl"}},computed:{classes(){return[`text-${this.color}`,`text-${this.size}`]}}};function g(z,S,n,k,y,i){return x(),p("h1",{class:m(i.classes)},u(n.text),3)}const f=d(_,[["render",g],["__scopeId","data-v-9eed0a04"]]),C={title:"Example/Title",component:f,tags:["autodocs"],argTypes:{text:{control:"text"},color:{control:"text"},size:{control:"text"}}},e={args:{text:"Hello Storybook",color:"black",size:"2xl"}},t={args:{text:"Custom Title",color:"purple-500",size:"4xl"}};var o,r,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'Hello Storybook',
    color: 'black',
    size: '2xl'
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var a,c,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    text: 'Custom Title',
    color: 'purple-500',
    size: '4xl'
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const h=["Default","Custom"];export{t as Custom,e as Default,h as __namedExportsOrder,C as default};
