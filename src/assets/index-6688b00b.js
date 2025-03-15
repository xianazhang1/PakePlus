import{u as e,r as a,j as r,e as s,B as t,S as o,m as i}from"./index-efa3a32c.js";import{C as l}from"./index-0373e759.js";import{F as n}from"./index-ae2d5997.js";import{I as d}from"./index-8c8b720f.js";/* empty css              *//* empty css              */import{I as c}from"./index-06b8a89d.js";import{u as m}from"./user-66ba9e41.js";import{t as u}from"./teacher-ae538df4.js";import{u as p}from"./useLocation-f9597f4e.js";import{S as h}from"./index-1c1deade.js";import{U as j}from"./index-dff1ae8b.js";import{U as x}from"./UploadOutlined-030aecab.js";import"./index-0a1440ec.js";import"./context-cb88fb1e.js";import"./responsiveObserve-b13564d4.js";import"./index-177532f7.js";import"./statusUtils-b010cbea.js";import"./EyeOutlined-319494bf.js";import"./SearchOutlined-03c63d28.js";import"./pickAttrs-1cd23dfa.js";import"./CheckOutlined-f0d55485.js";import"./useForceUpdate-9ad39bdf.js";import"./DeleteOutlined-6b999003.js";function f(){const f=p(),g=e(),{model:v}=f.state;document.title="add"===v?"新增教练":"编辑教练";const[b]=n.useForm(),[w]=n.useForm(),[y,I]=a.useState([]),C=e=>new Promise(((a,r)=>{const s=new FileReader;s.onload=e=>{const s=new Image;s.onload=function(){const{width:e,height:r}=this;a(e/r==3/4)},s.onerror=r,s.src=e.target.result},s.onerror=r,s.readAsDataURL(e)})),[S,F]=a.useState([]),[N,L]=a.useState([]);a.useEffect((()=>{(async()=>{const e=(await m.getAgents()).data.map((e=>({label:e.providername,value:e.uuid})));F(e)})()}),[]);const[O,U]=a.useState();return r.jsx("div",{className:"field-edit-box",children:r.jsxs(n,{labelCol:{span:4},wrapperCol:{span:16},form:b,name:"control-hooks",onFinish:e=>{},style:{maxWidth:600},children:[r.jsx(n.Item,{name:"proxy",label:"所属代理",rules:[{required:!0}],children:r.jsx(h,{placeholder:"请选择代理",allowClear:!0,onChange:async e=>{const a=(await m.getStores({agenuuid:e})).data.map((e=>({label:e.providername,value:e.uuid})));L(a)},options:S})}),r.jsx(n.Item,{name:"store",label:"所属门店",rules:[{required:!0}],children:r.jsx(h,{placeholder:"请选择门店",onChange:e=>{},options:N,allowClear:!0})}),r.jsx(n.Item,{name:"teacherName",label:"教练名称",rules:[{required:!0}],children:r.jsx(d,{maxLength:5,placeholder:"请输入"})}),r.jsx(n.Item,{name:"StoreImg",label:"教练图片",rules:[{required:!0}],children:r.jsx(j,{action:`${s}/service_api/file_upload`,accept:"image/*",fileList:y,maxCount:1,beforeUpload:async e=>{if(e.size>5242880)return i.error("图片不符合要求，请重新上传"),j.LIST_IGNORE;const a=await C(e);a||i.error("图片尺寸不符合要求，请重新上传");const r="image/png"===e.type||"image/jpg"===e.type;return a||j.LIST_IGNORE||r},onChange:({file:e,fileList:a})=>{if("uploading"!==e.status){const e=null==a?void 0:a.map((e=>{var a;return e.response?null==(a=null==e?void 0:e.response)?void 0:a.data[0]:e.url})).join(",");w.setFieldsValue({imageShow:e})}I(a)},onPreview:async e=>{let a=e.url;a||(a=await new Promise((a=>{const r=new FileReader;r.readAsDataURL(e.originFileObj),r.onload=()=>a(r.result)})));const r=new Image;r.src=a;const s=window.open(a);null==s||s.document.write(r.outerHTML)},children:r.jsxs("div",{className:"uploadBox",children:[r.jsx(t,{icon:r.jsx(x,{}),children:"上传照片"}),r.jsx("span",{className:"tips",children:"最多可上传1份，大小不超过5M，尺寸竖版3：4，格式：jpg/png"})]})})}),r.jsx(n.Item,{name:"teacherPrice",label:"教练价格",rules:[{required:!0}],children:r.jsx(c,{style:{width:"100%"},placeholder:"请输入",addonAfter:"元/小时",min:0,value:O,onChange:e=>{U(e)},formatter:e=>{if(!isNaN(e)){const a=e.toString();if(a.includes(".")){if(a.split(".")[1].length>1)return parseFloat(e).toFixed(1)}}return e},parser:e=>parseFloat(e)})}),r.jsx(n.Item,{name:"teacherDesc",label:"教练介绍",rules:[{required:!0}],children:r.jsx(d,{maxLength:30,placeholder:"请输入"})}),r.jsx(n.Item,{name:"teacherTime",label:"工作时间",rules:[{required:!0}],children:r.jsx(l.Group,{options:[{label:"周一",value:"1"},{label:"周二",value:"2"},{label:"周三",value:"3"},{label:"周四",value:"4"},{label:"周五",value:"5"},{label:"周六",value:"6"},{label:"周日",value:"7"}],onChange:e=>{}})}),r.jsxs(o,{className:"bottom-btn",children:[r.jsx(t,{type:"primary",className:"submit",onClick:async()=>{try{const e=await b.validateFields(),a={provideruuid:e.proxy,storeuuid:e.store,coachname:e.teacherName,coachintro:e.teacherDesc,coachpic:null==y?void 0:y.map((e=>{var a;return e.response?null==(a=null==e?void 0:e.response)?void 0:a.data[0]:e.url})).join(","),coachprice:e.teacherPrice,workingday:e.teacherTime.join(",")},r=await u.addTeacher(a);r&&200===r.code?(i.success("创建成功"),g("/store/teacher/list")):i.error((null==r?void 0:r.message)??"操作失败")}catch(e){}},children:"提交"}),r.jsx(t,{htmlType:"button",onClick:()=>{g(-1)},children:"返回"})]})]})})}export{f as default};
