import{d as e,r as s,j as a,B as i,m as t,T as o}from"./index-efa3a32c.js";import{F as l}from"./index-ae2d5997.js";import{I as r}from"./index-8c8b720f.js";import{a as n}from"./index-639ffc53.js";import"./index-0373e759.js";/* empty css              */import"./index-9b480cfe.js";import"./index-9b8a3313.js";import{D as d}from"./index-65748fb5.js";import{s as p}from"./store-7211fed8.js";import{u}from"./useSetState-78ffd672.js";import{S as c}from"./index-1c1deade.js";import{M as m}from"./index-46e73bcd.js";import{S as j}from"./SearchOutlined-24304577.js";import{P as x}from"./PlusCircleOutlined-176a31dc.js";import{E as h}from"./EditOutlined-e081177a.js";import"./context-cb88fb1e.js";import"./responsiveObserve-b13564d4.js";import"./index-177532f7.js";import"./statusUtils-b010cbea.js";import"./EyeOutlined-319494bf.js";import"./SearchOutlined-03c63d28.js";import"./pickAttrs-1cd23dfa.js";import"./index-40784afc.js";import"./getScrollBarSize-c6833c2b.js";import"./isEqual-8ee5b3ce.js";import"./useForceUpdate-9ad39bdf.js";import"./index-0a1440ec.js";import"./CheckOutlined-f0d55485.js";import"./ActionButton-e012fb99.js";import"./Portal-08554165.js";const{Option:v}=c,y={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:19}}};function g(){document.title="版本管理";const g=e((e=>e.app.powersCode)),[f]=l.useForm(),[S,w]=s.useState([]),[b,k]=s.useState(!1),[N,C]=u({pageNum:1,pageSize:10,total:0}),[T,L]=u({operateType:"add",nowData:null,modalShow:!1,modalLoading:!1}),[I,z]=u({puuid:void 0,status:void 0}),O=async e=>{if(!g.includes("version:query"))return;const s={page:e.pageNum,limit:e.pageSize,puuid:I.puuid,status:I.status};k(!0);try{const a=await p.getVersionList(s);a&&200===a.code?(w(a.data),C({total:a.cont,pageNum:e.pageNum,pageSize:e.pageSize})):t.error((null==a?void 0:a.message)??"获取失败")}finally{k(!1)}};s.useState();s.useState();const E=(e,s)=>{L({modalShow:!0,nowData:e,operateType:s}),e&&f.setFieldsValue({puuid:e.puuid,versioncode:e.version,versionurl:e.url,status:e.state})},F=()=>{f.setFieldsValue({puuid:"",versioncode:"",versionurl:"",status:""}),L({modalShow:!1,modalLoading:!1})},V=[{title:"编号",dataIndex:"serial",key:"serial"},{title:"产品名称",dataIndex:"name",key:"name"},{title:"版本号",dataIndex:"version",key:"version"},{title:"URL",dataIndex:"url",key:"url"},{title:"状态",dataIndex:"state",key:"state",render:(e,s)=>a.jsx("span",{children:0===e?"内测":1===e?"上架":"下架"})},{title:"创建时间",dataIndex:"time",key:"time"},{title:"操作",key:"control",width:200,render:(e,s)=>{const i=[];g.includes("version:edit")?i.push(a.jsx("span",{className:"control-btn blue",onClick:()=>E(s,"up"),children:a.jsx(o,{placement:"top",title:"编辑版本",children:a.jsx(h,{})})},"1")):i.push("-");const t=[];return i.forEach(((e,s)=>{s&&t.push(a.jsx(d,{type:"vertical"},`line${s}`)),t.push(e)})),t}}],[U,B]=s.useState([]),[D,P]=s.useState(""),A=e=>{P(e)},R=s.useMemo((()=>S.map(((e,s)=>({key:e.id,uuid:e.uuid,serial:s+1+(N.pageNum-1)*N.pageSize,name:e.prodname,version:e.versioncode,url:e.versionurl,state:e.status,time:e.addtime,puuid:e.puuid})))),[N,S]);return s.useEffect((()=>{O(N),(async()=>{const e=await p.getProduct();if(200===e.code){const s=e.data.map((e=>({label:e.prodname,value:e.uuid})));B(s)}else t.error(e.msg)})()}),[]),a.jsxs("div",{className:"role-box",children:[a.jsxs("div",{className:"g-search",children:[a.jsxs("div",{className:"btnBoxItem",children:[a.jsxs("div",{children:[a.jsxs("span",{className:"item-lable",style:{width:"60px"},children:["选择产品:"," "]}),a.jsx(c,{disabled:"see"===T.operateType,options:U,allowClear:!0,onSelect:A,placeholder:"请选择产品",style:{width:"150px"},onChange:e=>{z({puuid:e})}})]}),a.jsxs("div",{style:{marginLeft:30},children:[a.jsxs("span",{className:"item-lable",style:{width:"60px"},children:["选择状态:"," "]}),a.jsxs(c,{disabled:"see"===T.operateType,placeholder:"请选择状态",style:{width:"150px"},allowClear:!0,onChange:e=>{z({status:e})},children:[a.jsx(v,{value:0,children:"内测"},0),a.jsx(v,{value:1,children:"上架"},1),a.jsx(v,{value:2,children:"下架"},2)]})]})]}),a.jsxs("ul",{className:"search-func",children:[g.includes("version:search")&&a.jsx(i,{type:"primary",icon:a.jsx(j,{}),onClick:()=>{O(N)},className:"btn",children:"搜索"}),g.includes("version:add")&&a.jsx("li",{children:a.jsx(i,{type:"primary",icon:a.jsx(x,{}),disabled:!g.includes("version:add"),onClick:()=>E(null,"add"),className:"btn",children:"新增版本"})})]})]}),a.jsx("div",{className:"diy-table",children:a.jsx(n,{columns:V,loading:b,dataSource:R,pagination:{total:N.total,current:N.pageNum,pageSize:N.pageSize,showQuickJumper:!1,showTotal:e=>`共 ${e} 条数据`,onChange:(e,s)=>((e,s)=>{O({pageNum:e,pageSize:s||N.pageSize})})(e,s)}})}),a.jsx(m,{title:{add:"新增版本",up:"编辑版本"}[T.operateType],open:T.modalShow,cancelText:"取消",okText:"确认",onOk:()=>(async()=>{if("see"!==T.operateType)try{const s=await f.validateFields();if(L({modalLoading:!0}),"add"===T.operateType)try{const e=await p.addVersion(s);200===(null==e?void 0:e.code)?(t.success("新增成功"),F()):(L({modalLoading:!1}),t.error((null==e?void 0:e.message)??"新增失败"))}catch(e){}finally{L({modalLoading:!1})}else try{const e={versionuuid:T.nowData.uuid,...s},a=await p.updateVersion(e);200===(null==a?void 0:a.code)?(t.success("修改成功"),F()):t.error((null==a?void 0:a.message)??"修改失败")}finally{L({modalLoading:!1})}O(N)}catch{}else F()})(),onCancel:()=>F(),confirmLoading:T.modalLoading,children:a.jsxs(l,{form:f,initialValues:{formConditions:1},children:[a.jsx(l.Item,{label:"产品名称",name:"puuid",...y,children:a.jsx(c,{disabled:"see"===T.operateType,options:U,onSelect:A,placeholder:"请选择产品名称"})}),a.jsx(l.Item,{label:"版本号",name:"versioncode",...y,children:a.jsx(r,{placeholder:"请输入版本号",disabled:"see"===T.operateType})}),a.jsx(l.Item,{label:"URL",name:"versionurl",...y,children:a.jsx(r,{placeholder:"请输入URL",disabled:"see"===T.operateType})}),a.jsx(l.Item,{label:"状态",name:"status",...y,children:a.jsxs(c,{disabled:"see"===T.operateType,children:[a.jsx(v,{value:0,children:"内测"},0),a.jsx(v,{value:1,children:"上线"},1),a.jsx(v,{value:2,children:"下架"},2)]})})]})})]})}export{g as default};
