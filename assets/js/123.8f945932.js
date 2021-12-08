(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{578:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"rebase分支合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase分支合并"}},[s._v("#")]),s._v(" rebase分支合并")]),s._v(" "),a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),a("p",[s._v("以下 "),a("code",[s._v("v2")]),s._v(" 是某个需求的开发分支， "),a("code",[s._v("dev")]),s._v("是总的开发分支，"),a("code",[s._v("v2")]),s._v(" 是基于"),a("code",[s._v("dev")]),s._v("分支签出的。")]),s._v(" "),a("p",[s._v("当完成"),a("code",[s._v("v2")]),s._v("的开发后，需要把代码合并到"),a("code",[s._v("dev")]),s._v("，我们可以使用"),a("code",[s._v("rebase")]),s._v("进行合并：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首先将 v2 push到远程仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin v2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 dev 拉取最新代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout dev\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin dev\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 v2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout v2\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 v2 的所有[commit] 变基到(应用到) dev")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 dev")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout dev\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge v2  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 dev分支 快进合并 （此时 (HEAD -> dev, v2) [commit] 两个分支指向同一个提交）")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 原v2的[commit]记录 是否在dev分支的最前面（变基成功会把v2的提交记录应用到dev分支的最前面）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果到这一步发现有问题，尝试使用 git --abort中止变基，如果还是有问题的可以在dev分支上使用《后悔药》操作， 再到v2分支上使用《后悔药》操作，即可使两个分支都回退到 rebase变基 之前的状态")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 试运行项目是否有问题")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" start\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态是否有问题")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送到远程仓库的 dev")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h3",{attrs:{id:"变基要遵守的准则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变基要遵守的准则"}},[s._v("#")]),s._v(" 变基要遵守的准则")]),s._v(" "),a("p",[a("strong",[s._v("几个人同时在一个分支上进行开发和提交时，你不要中途执行变基，只有在大家都完成工作之后才可以执行变基。")])]),s._v(" "),a("h3",{attrs:{id:"变基的实质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变基的实质"}},[s._v("#")]),s._v(" 变基的实质")]),s._v(" "),a("p",[s._v("变基操作的实质是丢弃一些现有的提交，然后相应地新建一些内容一样但实际上不同的提交。\n因此，"),a("strong",[s._v("变基操作过后的分支将不要再使用")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"后悔药"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后悔药"}},[s._v("#")]),s._v(" 后悔药")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看HEAD指针变动记录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 记录示例(当前分支是v2):")]),s._v("\n07c398f "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v2, master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": checkout: moving from master to v2\n07c398f "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v2, master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("finish"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": returning to refs/heads/master\n07c398f "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v2, master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": checkout v2\n15a97d8 HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": reset: moving to 15a97d8\n07c398f "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v2, master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": merge v2: Fast-forward\n15a97d8 HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": checkout: moving from v2 to master\n07c398f "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v2, master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("finish"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": returning to refs/heads/v2\n07c398f "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v2, master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": C\n15a97d8 HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": checkout master "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首次rebase")]),s._v("\nd278ecd HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": checkout: moving from master to v2 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rebase前的状态")]),s._v("\n15a97d8 HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": commit: D\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可见，示例中最初的 rebase 操作是 HEAD@{8}，想回退到变基前的状态需让指针指向 HEAD@{9}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard d278ecd  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重置当前分支的HEAD为指定[commit]，同时重置暂存区和工作区，与指定[commit]一致")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此时打印 log 查看是否回到之前的状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[a("strong",[s._v("注意：此操作只能回退当前的分支，如其他分支也要回退，需要切换到该分支并执行上面操作。")])]),s._v(" "),a("h2",{attrs:{id:"开发期间的rebase操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发期间的rebase操作"}},[s._v("#")]),s._v(" 开发期间的rebase操作")]),s._v(" "),a("h3",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),a("p",[s._v("有两个分支：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("dev\n*v2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("code",[s._v("2.4-dev")]),s._v(" 是基于"),a("code",[s._v("dev")]),s._v("切出来的。")]),s._v(" "),a("p",[s._v("提交记录如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\t\tdev\na - b - c\n\t\tv2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("开发期间，两个分支同时有新的commit ：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\t\t\t\tdev\na - b - c - d - e\n\t\t\\ - f - g\n\t\t\t\tv2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("当前你正在"),a("code",[s._v("v2")]),s._v("进行开发，"),a("code",[s._v("dev")]),s._v("也同时进行开发，并有重大的改变，你需要把"),a("code",[s._v("dev")]),s._v("的提交同步到"),a("code",[s._v("v2")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("需求： 把"),a("code",[s._v("dev")]),s._v("中新的提交同步到"),a("code",[s._v("v2")]),s._v("，且不能影响"),a("code",[s._v("dev")]),s._v("分支。")])]),s._v(" "),a("h3",{attrs:{id:"操作步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[s._v("#")]),s._v(" 操作步骤")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("基于最新的 "),a("code",[s._v("dev")]),s._v(" 切一个新的分支 "),a("code",[s._v("dev-copy")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("dev-copy")]),s._v(" 和 "),a("code",[s._v("dev")]),s._v("  两者的 commit ID 一致。")])])]),s._v(" "),a("li",[a("p",[s._v("在"),a("code",[s._v("dev-copy")]),s._v("中执行rebase，将 "),a("code",[s._v("dev-copy")]),s._v(" 的提交变基到 "),a("code",[s._v("v2")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase v2 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 dev-copy 的提交[commit] 变基到(应用到) v2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("删除原"),a("code",[s._v("v2")]),s._v("分支，将"),a("code",[s._v("dev-copy")]),s._v("分支名改为"),a("code",[s._v("v2")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前在 dev-copy 分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d v2 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -m dev-copy v2 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重命名")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"git-cherry-pick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-cherry-pick"}},[s._v("#")]),s._v(" git cherry-pick")]),s._v(" "),a("p",[s._v("来源："),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("《git cherry-pick 教程》"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("用于将单个或几个"),a("code",[s._v("[commit]")]),s._v("复制到另一个分支。")]),s._v(" "),a("h4",{attrs:{id:"基本应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本应用"}},[s._v("#")]),s._v(" 基本应用")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commitHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将commitHash应用于当前分支")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面命令就会将指定的提交"),a("code",[s._v("commitHash")]),s._v("，应用于当前分支。这会在当前分支产生一个新的提交，当然它们的"),a("strong",[s._v("哈希值会不一样")]),s._v("。")]),s._v(" "),a("p",[s._v("git cherry-pick命令的参数，不一定是提交的哈希值，分支名也是可以的，表示转移该分支的最新提交。")]),s._v(" "),a("h4",{attrs:{id:"转移多个提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转移多个提交"}},[s._v("#")]),s._v(" 转移多个提交")]),s._v(" "),a("p",[s._v("Cherry pick 支持一次转移多个提交。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("HashA"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("HashB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A和B提交")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面的命令将 A 和 B 两个提交应用到当前分支。这会在当前分支生成两个对应的新提交。")]),s._v(" "),a("p",[s._v("如果想要转移一系列的连续提交，可以使用下面的简便语法。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("B "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A到B提交，不包含A")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上面的命令可以转移从 A 到 B 的所有提交。它们必须按照正确的顺序放置：提交 A 必须早于提交 B，否则命令将失败，但不会报错。")]),s._v(" "),a("p",[a("strong",[s._v("注意，使用上面的命令，提交 A 将不会包含在 Cherry pick 中。如果要包含提交 A，可以使用下面的语法。")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick A^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("B "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# A到B提交，包含A")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);