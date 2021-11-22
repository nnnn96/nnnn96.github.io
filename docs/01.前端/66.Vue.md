---
title: Vue
date: 2021-11-18 22:58:32
permalink: /pages/ff60ed/
categories:
  - 前端
tags:
  - 
---
# Vue

Vue是一套用于构建用户界面的渐进式框架。与其他大型框架不同的是，Vue被设计为可以自底向上逐层应用。Vue的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue也完全能够为复杂的单页应用提供驱动。

## 🎐MVVM思想



## ✨指令

### ◾ 插值表达式

#### ▪ 花括号

格式：{{表达式}}

说明：该表达式支持JS语法，可以调用JS内置函数（必须有返回值）。表达式必须有返回结果。例如1+1，没有结果的表达式不允许使用。可以直接获取Vue实例中定义的数据或函数。

#### ▪ 插值闪烁

使用{{}}方式在网速较慢时会出现问题。在数据未加载完成时，页面会显示出原始的 “ {{}} ” 加载完毕后才显示正确数据，我们称为插值闪烁。

#### ▪ v-text和v-html

```javascript
    <div id="app">
		// v-html不会对html内容进行转义
        <span v-html="msg"></span>
		// v-text会对html内容进行转义
        <span v-text="msg"></span>
    </div>
    
    <script>
        // vue声明式渲染
        let vm = new Vue({
            el: "#app",
            data: {
                msg:"<h1> hahhaha~ </h1>"
            }
        })
    </script>
```

### ◾ v-bind

