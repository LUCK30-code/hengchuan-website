# 衡川智能 · 单页企业官网

一个纯手写的响应式单页官网，用来练习「结构 → 样式 → 交互 → 上线」的完整流程。

- **在线预览**：https://luck30-code.github.io/hengchuan-website/
- **代码仓库**：https://github.com/LUCK30-code/hengchuan-website
- **技术栈**：HTML + CSS + 原生 JavaScript，零框架、零依赖、零构建
- **作者**：陆康贤 ｜ 2026.11

---

## 页面结构

| 区块 | 内容 |
| --- | --- |
| 顶部导航 | Logo + 五个锚点导航 + 预约按钮，滚动吸顶 |
| 首屏 Banner | 主标题、副标题、两个按钮、四项数据 |
| 产品方案 | 三张等宽卡片（图片 + 标签 + 标题 + 描述） |
| 技术参数 | 六列表格，JS 隔行换色、悬停整行高亮 |
| 关于我们 | 左文右图两栏布局 |
| 联系我们 | 表单（含前端校验）+ 联系方式 |
| 底部版权 | 版权与备案信息 |

---

## 代码与知识点的对应关系

写这个项目时，我刻意让每一块都对应课上学过的内容，方便自己复盘：

| 代码位置 | 对应知识点 |
| --- | --- |
| `index.html` 的 `<link>` 与 `<script>` | CSS / JS 的引入方式 |
| `style.css` 的 `.banner-title span` | 后代选择器 |
| `.card` 的 padding / border / border-radius | 盒子模型 |
| `.header-inner`、`.card-list`、`.banner-stats` | flex 布局（对齐、等分、换行） |
| `display: flex; flex: 1` | flex 弹性分配 |
| `.spec-table` | 表格标签与 `border-collapse` |
| `.form-item input` | 表单项标签与聚焦样式 |
| `main.js` 的 `stripeTable()` | 课程里的「隔行换色案例」 |
| `main.js` 的 `checkForm()` | DOM 操作 + 事件监听 + 阻止默认提交 |
| `main.js` 的 `backToTop()` | 滚动事件 + 固定定位 |
| `style.css` 末尾的 `@media` | 响应式（课程外自学补充） |

---

## 关于响应式

课程里没有讲移动端适配，但这个岗位明确要求「响应式设计」，所以我自己补了这一节。

原理只有一句话：**屏幕窄到一定程度，就把横向排列改成竖向排列**。

```css
@media (max-width: 768px) {
  .card-list { flex-direction: column; }   /* 卡片从横排变竖排 */
  .banner-stats li { flex: 0 0 50%; }      /* 数据从四列变两列 */
  .banner-title { font-size: 32px; }       /* 标题字号降下来 */
}
```

三个断点思路：

- `768px` 以下：导航换行、卡片竖排、表单竖排、表格允许横向滚动
- 表格不硬压：内容太多时给 `overflow-x: auto` 让它横向滑动，比把字挤成一团好
- 字号不写死：小屏整体降一档，标题 56px → 32px

---

## 本地运行

```bash
# 方式一
python -m http.server 8000

# 方式二
npx serve .

# 方式三：直接双击 index.html
```

打开 `http://localhost:8000`。

---

## 已知不足

- 表单只有前端校验，没有后端接口，提交后不会真正发送数据
- 表格在手机上靠横向滚动查看，没有做卡片化的移动端表格
- 没有做暗色模式和国际化

---

## 目录结构

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── product-1.svg
│   ├── product-2.svg
│   └── product-3.svg
└── README.md
```
