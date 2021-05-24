# vue-mind-map
#### markedjs
marked.defaults -> Lexer.lex 词法解析得到 tokens -> Parser.parse 解析对应 tokens

拼接字符串时遍历叶节点，自底向上

```
<ul>
  <li>a
    <ul>
      <li>b</li>
      <li>c</li>
    </ul>
  </li>
</ul>

out = "a<ul>\n{title:b},\n{title:c},\n</ul>\n", body = "{title:b},\n{title:c},\n"



{
  children: [
    {
      title: {
        children: [
          { title: 'b' },
          { title: 'c' }
        ]
      }
    }
  ]
}

<ul>
<li>a<ul>
<li>b</li>
<li>c</li>
</ul>
</li>
</ul>

{
title: a,
children: [
{
title: b
children: []
},
{
title: c
children: []
},
]
}

{title:a
{title:b}, {title:c},
},
```

### 思路

- AST 提炼 js 结构（token.json => mindMap.js）
- **词法解析** 用户输入，解析函数，正则提取（markedjs）
- **渲染层** 绘制图，边界问题（2D绘制属性图）

### 节点特性

- 样式、坐标位置
- 贝塞尔曲线
- canvas 绘制或者 SVG
