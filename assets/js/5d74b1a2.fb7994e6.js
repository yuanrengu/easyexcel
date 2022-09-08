"use strict";(self.webpackChunkeasyexcel=self.webpackChunkeasyexcel||[]).push([[474],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7350:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),i=["components"],o={title:"\u5199Excel",sidebar_position:3},u=void 0,c={unversionedId:"write",id:"write",title:"\u5199Excel",description:"\u5e38\u89c1\u95ee\u9898",source:"@site/qa/write.md",sourceDirName:".",slug:"/write",permalink:"/qa/write",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u5199Excel",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u8bfbExcel",permalink:"/qa/read"},next:{title:"\u586b\u5145Excel",permalink:"/qa/fill"}},p={},s=[{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"The workbook already contains a sheet named",id:"the-workbook-already-contains-a-sheet-named",level:3},{value:"\u5982\u4f55\u8bbe\u7f6e\u5355\u5143\u683c\u683c\u5f0f",id:"\u5982\u4f55\u8bbe\u7f6e\u5355\u5143\u683c\u683c\u5f0f",level:3},{value:"\u5bfc\u51fa\u7684excel\u6253\u4e0d\u5f00",id:"\u5bfc\u51fa\u7684excel\u6253\u4e0d\u5f00",level:3},{value:"\u89e3\u51b3\u65b9\u6848\uff1a",id:"\u89e3\u51b3\u65b9\u6848",level:4},{value:"\u5bfc\u51fa\u7684excel\u63d0\u793a\u9700\u8981\u4fee\u590d",id:"\u5bfc\u51fa\u7684excel\u63d0\u793a\u9700\u8981\u4fee\u590d",level:3},{value:"\u89e3\u51b3\u65b9\u6848\uff1a",id:"\u89e3\u51b3\u65b9\u6848-1",level:4}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.kt)("h3",{id:"the-workbook-already-contains-a-sheet-named"},"The workbook already contains a sheet named"),(0,l.kt)("p",null,"\u786e\u8ba4\u81ea\u5df1\u662f\u5426\u91cd\u590d\u4e86\nsheet\uff0c\u5982\u679c\u4e0d\u662f\u5927\u6982\u7387\u662f\u627e\u4e0d\u5230\u5b57\u4f53\uff0c\u8bf7\u53c2\u7167\uff1a",(0,l.kt)("a",{parentName:"p",href:"/qa/#%E6%88%91%E5%9C%A8%E6%9C%AC%E5%9C%B0%E5%8F%AF%E4%BB%A5%E5%8F%91%E5%B8%83%E5%88%B0%E7%BA%BF%E4%B8%8A%E7%8E%AF%E5%A2%83%E6%80%8E%E4%B9%88%E4%B8%8D%E5%8F%AF%E4%BB%A5%E4%BA%86"},"\u6211\u5728\u672c\u5730\u53ef\u4ee5\uff0c\u53d1\u5e03\u5230\u7ebf\u4e0a\u73af\u5883\u600e\u4e48\u4e0d\u53ef\u4ee5\u4e86\uff1f")),(0,l.kt)("h3",{id:"\u5982\u4f55\u8bbe\u7f6e\u5355\u5143\u683c\u683c\u5f0f"},"\u5982\u4f55\u8bbe\u7f6e\u5355\u5143\u683c\u683c\u5f0f"),(0,l.kt)("p",null,"\u7b80\u5355\u7684\u8bbe\u7f6e\u5355\u5143\u683c\u662f\u4e2a\u5982\u4e0b\uff1a \u76f4\u63a5\u5728\u5c5e\u6027\u4e0a\u9762\u4f7f\u7528\u6ce8\u89e3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'  @ExcelProperty("\u6570\u5b57\u6807\u9898")\n    @ContentStyle(dataFormat = 4)\n    private Double doubleData;\n')),(0,l.kt)("p",null,"\u6ce8\u89e3\u4e0a\u9762\u7684\u6570\u503c\u53c2\u7167:",(0,l.kt)("inlineCode",{parentName:"p"},"com.alibaba.excel.constant.BuiltinFormats#BUILTIN_FORMATS_CN")),(0,l.kt)("h3",{id:"\u5bfc\u51fa\u7684excel\u6253\u4e0d\u5f00"},"\u5bfc\u51fa\u7684excel\u6253\u4e0d\u5f00"),(0,l.kt)("p",null,"\u5927\u6982\u7387\u7531\u4ee5\u4e0b2\u4e2a\u539f\u56e0\u5bfc\u81f4\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u524d\u7aef\u7528\u5404\u79cd\u6846\u67b6\u6765\u5bfc\u51fa\uff0c\u7136\u540e\u628a\u6587\u4ef6\u6d41\u6539\u4e86"),(0,l.kt)("li",{parentName:"ul"},"\u540e\u7aef\u5404\u79cd\u62e6\u622a\u5668\uff0c\u628a\u6587\u4ef6\u6d41\u6539\u4e86")),(0,l.kt)("h4",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5148\u6d4b\u8bd5\u628a\u6587\u4ef6\u5bfc\u51fa\u5230\u672c\u5730\uff0c\u800c\u4e0d\u662f\u901a\u8fc7\u6d4f\u89c8\u5668",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a\u6838\u5fc3\u5b9a\u4f4d\u662f\u4e0d\u662f\u81ea\u5df1\u4ee3\u7801\u5199\u9519\u4e86\uff0c\u901a\u8fc7\u4ee3\u8868\u4ee3\u7801\u6ca1\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u901a\u8fc7\u81ea\u5df1\u53c2\u7167\u4e0b\u6700\u7b80\u5355\u7684\u5199\u8bd5\u8bd5"))),(0,l.kt)("li",{parentName:"ul"},"\u518d\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee\u7684\u65b9\u6848\u53bb\u5bfc\u51fa",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a\u6838\u5fc3\u786e\u8ba4\u662f\u5426\u88ab\u540e\u7aef\u7684\u5404\u79cd\u62e6\u622a\u5668\u6216\u8005nginx\u628a\u6d41\u7ed9\u6539\u574f\u4e86\uff0c\u901a\u8fc7\u4ee3\u8868\u540e\u7aef+\u7f51\u7edc\u6ca1\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u901a\u8fc7\u81ea\u5df1\u8bd5\u4e0b\u4e0d\u7528nginx\u7b49\u81ea\u5df1\u8bbf\u95ee\u884c\u4e0d\u884c\uff0c\u5982\u679c\u8fd8\u4e0d\u884c\u90a3\u5c31\u662f\u540e\u7aef\u7684\u5404\u79cd\u62e6\u622a\u5668\u5bfc\u81f4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u6ce8\u610f\u4e0b\u6ce8\u89e3\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"@Controller")," \uff0c\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"RestController")),(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u662fvoid,\u7136\u540e\u786e\u4fdd\u540e\u9762\u6240\u6709\u7684\u62e6\u622a\u5668\u4e4b\u7c7b\u7684\u4e0d\u80fd\u518d\u4fee\u6539\u6d41"))))),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u4e0b\u6765\u5c31\u662f\u7529\u9505\u7ed9\u524d\u7aef",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u540e\u7aef\u53ea\u8981\u786e\u4fdd\u6d4f\u89c8\u5668\u76f4\u63a5\u8bbf\u95ee\u80fd\u4e0b\u8f7d\u5c31\u884c\uff0c\u63a5\u4e0b\u6765\u524d\u7aef\u5404\u79cd\u6846\u67b6\u5904\u7406\u7684\u65b9\u6848\u90fd\u4e0d\u4e00\u6837")))),(0,l.kt)("h3",{id:"\u5bfc\u51fa\u7684excel\u63d0\u793a\u9700\u8981\u4fee\u590d"},"\u5bfc\u51fa\u7684excel\u63d0\u793a\u9700\u8981\u4fee\u590d"),(0,l.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u662f\u81ea\u5df1\u5404\u79cd\u62e6\u622a\u5668\uff0c\u6bd4\u5982\u6539\u6837\u5f0f\uff0c\u5408\u5e76\u5355\u5143\u683c\u7b49\u628a\u6587\u4ef6\u641e\u574f\u4e86\u3002"),(0,l.kt)("h4",{id:"\u89e3\u51b3\u65b9\u6848-1"},"\u89e3\u51b3\u65b9\u6848\uff1a"),(0,l.kt)("p",null,"\u53c2\u7167\u4e0b\u6700\u7b80\u5355\u7684\u5199\uff0c\u8bd5\u8bd5\uff0c\u5199\u522b\u641e\u90a3\u4e48\u590d\u6742\uff0c\u53ef\u4ee5\u4e86\u518d\u6162\u6162\u7684\u52a0\u62e6\u622a\u5668\uff0c\u7136\u540e\u62e6\u622a\u5668\u4e5f\u6162\u6162\u7684\u52a0\u5404\u79cd\u82b1\u91cc\u80e1\u54e8\u7684\u4ee3\u7801\u3002"))}d.isMDXComponent=!0}}]);