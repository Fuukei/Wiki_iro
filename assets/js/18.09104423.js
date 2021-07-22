(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{472:function(t,s,n){"use strict";n.r(s);var a=n(47),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"webp优化随机图说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webp优化随机图说明"}},[t._v("#")]),t._v(" Webp优化随机图说明")]),t._v(" "),n("p",[t._v("主题内置manifest生成工具，使用python3实现，可生成封面图所需文件，详见这里")]),t._v(" "),n("h2",{attrs:{id:"目录及文件说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录及文件说明"}},[t._v("#")]),t._v(" 目录及文件说明")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(".\n├── manifest\n│   ├── gallary           // 存放原图片\n│   ├── jpeg              // 存放生成的缩略图\n│   ├── webp              // 存放转换后的封面图\n│   ├── manifest.json     // 生成的manifest数据\n│   ├── manifest.py       // manifest主程序\n│   ├── qt.py             // manifest GUI程序（开发中）\n│   ├─── __init__.py      // GUI程序初始化文件\n│   └── icon.*            // GUI素材文件\n")])])]),n("h2",{attrs:{id:"食用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#食用方法"}},[t._v("#")]),t._v(" 食用方法：")]),t._v(" "),n("p",[t._v("安装依赖")]),t._v(" "),n("p",[t._v("安装 Python： "),n("a",{attrs:{href:"https://docs.python.org/zh-cn/3.7/using/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.python.org/zh-cn/3.7/using/index.html"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("安装 PIL：")]),t._v(" "),n("div",{staticClass:"language-Sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Linux/Mac Terminal")]),t._v("\npip "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" Pillow\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果也安装了 Python 2，需要指定 pip 版本：")]),t._v("\npip3 "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" Pillow\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Windows Powershell 或者 CMD")]),t._v("\npip "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" Pillow\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果也安装了 Python 2，需要指定 pip 版本：")]),t._v("\npip3 "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" Pillow\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果提示权限不足（[WinError 5] Access is denied），请运行：")]),t._v("\npip "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" Pillow --user\n")])])]),n("h3",{attrs:{id:"运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[t._v("#")]),t._v(" 运行")]),t._v(" "),n("p",[t._v("把图片文件放到 gallary 目录，Windows 可直接双击 manifest.py，或者和其他操作系统一样，在 Terminal、Powershell、CMD 中运行：")]),t._v(" "),n("div",{staticClass:"language-Sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到 manifest.py 所在目录：")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/manifest/\npython manifest.py\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果也安装了 Python 2，需要指定 Python 版本：")]),t._v("\npython3 manifest.py\n")])])]),n("p",[t._v("之后根据提示操作即可，程序会生成封面图，本主题为后端获取"),n("code",[t._v("manifest.json")]),t._v("，在"),n("code",[t._v("iro主题设置")]),t._v("中的"),n("code",[t._v("主页设置-封面随机图片选项")]),t._v("中 处填写url并保存好后，点击更新会将"),n("code",[t._v("manifest.json")]),t._v(" 存入WordPress数据库")]),t._v(" "),n("p",[t._v("将 "),n("code",[t._v("manifest")]),t._v(" 整个文件夹上传至你的cdn，并 在"),n("code",[t._v("iro主题设置")]),t._v("中的"),n("code",[t._v("主页设置-封面随机图片选项")]),t._v("中 处填写url并保存，最后"),n("strong",[t._v("不用")]),t._v("加斜杠（注：留空则使用本地的manifest路径）")]),t._v(" "),n("p",[t._v("eg. manifest的地址是"),n("code",[t._v("https://cdn.jsdelivr.net/gh/mashirozx/sakura@3.3.3/manifest/")]),t._v(" 只需在后台填写 "),n("code",[t._v("https://cdn.jsdelivr.net/gh/mashirozx/sakura@3.3.3")]),t._v(" 如需使用本地图片库，将url填写处留空即可")]),t._v(" "),n("p",[t._v("现代浏览器基本都支持Webp，如遇不支持的浏览器，api会自动返回压缩后的普通图片")])])}),[],!1,null,null,null);s.default=e.exports}}]);