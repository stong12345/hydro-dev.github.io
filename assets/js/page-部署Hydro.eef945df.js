(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{533:function(t,r,s){"use strict";s.r(r);var e=s(1),n=Object(e.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"部署-hydro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署-hydro"}},[t._v("#")]),t._v(" 部署 Hydro")]),t._v(" "),s("p",[t._v("本页面将指导您部署 Hydro。"),s("br"),t._v("\n这里提供了几套方案帮助您建立自己的站点，请选择适合您的方案并继续。"),s("br"),t._v("\n搭建过程中如果遇到问题欢迎 "),s("RouterLink",{attrs:{to:"/#联系我们"}},[t._v("联系我们")]),t._v(" 提问。")],1),t._v(" "),s("h2",{attrs:{id:"服务器选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器选择"}},[t._v("#")]),t._v(" 服务器选择")]),t._v(" "),s("p",[t._v("不同服务商提供的 CPU 主频不同，下方数据仅供参考。"),s("br"),t._v("\n最低服务器配置： CPU: 1核 内存: 1G 硬盘: 20G。（约可允许 50 人同时使用）"),s("br"),t._v("\n推荐服务器配置： CPU: 1核 内存: 2G 硬盘: 30G。（约可允许 150 人同时使用）"),s("br"),t._v(" "),s("strong",[t._v("请尽量不要使用突发性能实例或共享型实例，这可能会导致评测时间计量不准确")])]),t._v(" "),s("h2",{attrs:{id:"部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),s("h3",{attrs:{id:"自动安装脚本部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动安装脚本部署"}},[t._v("#")]),t._v(" 自动安装脚本部署")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("我们将会保证在用户网络良好的情况下自动安装脚本能够正常完成部署工作，我们不会帮助解决由用户网络造成的部署问题。"),s("br"),t._v("\n自动安装脚本将会在您的机器上安装\n"),s("a",{attrs:{href:"https://www.mongodb.com/try/download/community",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB"),s("OutboundLink")],1),t._v("、\n"),s("a",{attrs:{href:"https://min.io/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("MinIO"),s("OutboundLink")],1),t._v("、\n"),s("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeJS"),s("OutboundLink")],1),t._v("。\n如果您的机器上已经安装过上述软件，建议您重置该系统或是参考安装脚本内容自行完成 Hydro 安装。"),s("br"),t._v(" "),s("strong",[t._v("请不熟悉 Hydro 架构的用户使用自动安装脚本部署")]),t._v("，否则出现问题请用户自行解决。")])]),t._v(" "),s("p",[s("strong",[t._v("安装和安装后的所有操作均需要在 root 权限下进行！（"),s("code",[t._v("sudo su")]),t._v("）")]),t._v("。")]),t._v(" "),s("p",[t._v("Hydro 主进程可以在 Windows、MacOS、Linux（需要内核版本 4.4+）上运行，不支持 WSL。"),s("br"),t._v("\n评测组件 "),s("a",{attrs:{href:"https://hydro.js.org/plugins/hydrojudge/",target:"_blank",rel:"noopener noreferrer"}},[t._v("hydrojudge"),s("OutboundLink")],1),t._v(" 无法在非 Linux 系统上运行。")]),t._v(" "),s("p",[t._v("自动安装脚本目前支持 "),s("code",[t._v("Ubuntu 16.04")]),t._v("、"),s("code",[t._v("Ubuntu 18.04")]),t._v("、"),s("code",[t._v("Ubuntu 20.04")]),t._v("、"),s("code",[t._v("Arch Linux")]),t._v("。"),s("br"),t._v("\n推荐使用 "),s("code",[t._v("Ubuntu 20.04")]),t._v("。"),s("br"),t._v("\n如果需要在其他操作系统上安装 Hydro，请尝试手动安装。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Tips")]),t._v(" "),s("p",[t._v("由于自动安装脚本完成后网站将会监听 8888 端口，若您已安装宝塔面板或是其他占用 8888 端口的应用，请先卸载或将其切换至其他端口。"),s("br"),t._v(" "),s("strong",[t._v("不建议您在生产环境使用宝塔面板。")]),s("br"),t._v("\n如果安装过程中出现安装慢的情况，可以尝试更换国内源（如 "),s("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("清华源"),s("OutboundLink")],1),t._v("）。")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[s("strong",[t._v("请注意！ 由于 Let's Encrypt 根证书更新，可能会出现证书校验失败的问题，请先使用 "),s("code",[t._v("apt-get upgrade openssl -y")]),t._v(" 更新 "),s("code",[t._v("openssl")]),t._v(" 版本后继续操作！若更新中出现弹框，全部按照默认选择回车确认即可")])])]),t._v(" "),s("p",[t._v("运行下面的脚本，等待几分钟即可：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://s3.undefined.moe/public/install "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ./install\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"使用-docker-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-安装"}},[t._v("#")]),t._v(" 使用 Docker 安装")]),t._v(" "),s("p",[t._v("仅推荐熟悉 Docker 及 docker-compose 的用户使用。"),s("br"),t._v("\n参照 https://github.com/hydro-dev/Hydro/blob/master/install/docker/README.md。")]),t._v(" "),s("h3",{attrs:{id:"开发环境部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发环境部署"}},[t._v("#")]),t._v(" 开发环境部署")]),t._v(" "),s("p",[t._v("参考 "),s("RouterLink",{attrs:{to:"/dev/"}},[t._v("开发环境部署")]),t._v("。")],1)])}),[],!1,null,null,null);r.default=n.exports}}]);