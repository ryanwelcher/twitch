(()=>{"use strict";const e=window.wp.element,t=window.wp.plugins,n=window.wp.editPost,o=window.wp.data,s=window.wp.components;(0,t.registerPlugin)("ryan-test",{render:()=>{const t=(0,o.useSelect)((e=>e("core/notices").getNotices("context")));return(0,e.createElement)(n.PluginDocumentSettingPanel,{name:"custom-panel",title:"Custom Panel",className:"custom-panel"},(0,e.createElement)(s.Button,{onClick:()=>alert(t)},"Notices!"))}})})();