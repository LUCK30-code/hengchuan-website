/* ============================================================
   衡川智能 · 单页官网交互
   只用课程里学过的：JS 基础语法 / DOM 操作 / 事件监听 / 流程控制
   没有用框架、没有用第三方库
   ============================================================ */

/* ------------------------------------------------------------
   功能一：表格隔行换色
   对应课程「02-JS 事件监听 → 2.3 隔行换色案例」
   思路：拿到所有数据行 → 判断行号是奇数还是偶数 → 加不同的 class
   ------------------------------------------------------------ */
function stripeTable() {
  // 1. 拿到表格里所有的数据行（tbody 下的 tr）
  var rows = document.querySelectorAll("#specTable tbody tr");

  // 2. 循环每一行，用下标判断奇偶
  for (var i = 0; i < rows.length; i++) {
    if (i % 2 === 1) {
      // 下标 1、3、5… 的行加 odd 类，样式里给它浅灰背景
      rows[i].classList.add("odd");
    }
  }
}

/* ------------------------------------------------------------
   功能二：表单校验
   对应课程「02 → 1.2.6 JS DOM」+「2.2 事件监听语法」
   三个关键点：
   ① 阻止表单默认提交（不然页面会刷新）
   ② 一个个字段检查，把错误提示写进对应的 p 标签
   ③ 全部通过才显示成功提示
   ------------------------------------------------------------ */
function checkForm() {
  var form = document.getElementById("contactForm");

  // 给表单绑定「提交」事件
  form.addEventListener("submit", function (event) {
    // 阻止默认行为：不做这一步，点提交页面就刷新了，提示也看不到
    event.preventDefault();

    // 先假设全部填对了，后面一旦发现错误就改成 false
    var isOk = true;

    // ---- 校验 1：称呼，至少 2 个字 ----
    var name = document.getElementById("name").value;
    var nameTip = document.getElementById("nameTip");
    if (name.trim().length < 2) {
      nameTip.textContent = "请填写至少 2 个字的称呼";
      document.getElementById("name").parentNode.classList.add("error");
      isOk = false;
    } else {
      nameTip.textContent = "";
      document.getElementById("name").parentNode.classList.remove("error");
    }

    // ---- 校验 2：手机号，必须是 1 开头的 11 位数字 ----
    var phone = document.getElementById("phone").value;
    var phoneTip = document.getElementById("phoneTip");
    // 正则：^1 表示以 1 开头，[3-9] 表示第二位 3~9，\d{9} 表示后面 9 位数字
    var phoneReg = /^1[3-9]\d{9}$/;
    if (!phoneReg.test(phone)) {
      phoneTip.textContent = "请填写正确的 11 位手机号";
      document.getElementById("phone").parentNode.classList.add("error");
      isOk = false;
    } else {
      phoneTip.textContent = "";
      document.getElementById("phone").parentNode.classList.remove("error");
    }

    // ---- 校验 3：需求描述，至少 10 个字 ----
    var message = document.getElementById("message").value;
    var messageTip = document.getElementById("messageTip");
    if (message.trim().length < 10) {
      messageTip.textContent = "请简单描述需求，不少于 10 个字";
      document.getElementById("message").parentNode.classList.add("error");
      isOk = false;
    } else {
      messageTip.textContent = "";
      document.getElementById("message").parentNode.classList.remove("error");
    }

    // ---- 全部通过，显示成功提示 ----
    if (isOk) {
      document.getElementById("formSuccess").style.display = "block";
      form.reset(); // 清空表单
    }
  });
}

/* ------------------------------------------------------------
   功能三：回到顶部按钮
   对应课程「2.4 常见事件」里的滚动事件 scroll
   思路：监听页面滚动 → 滚过 400px 就显示按钮，否则隐藏
   ------------------------------------------------------------ */
function backToTop() {
  var toTop = document.getElementById("toTop");

  window.addEventListener("scroll", function () {
    // 不同浏览器的滚动高度取值方式不一样，两个都取一下
    var top = document.documentElement.scrollTop || document.body.scrollTop;

    if (top > 400) {
      toTop.style.display = "block";
    } else {
      toTop.style.display = "none";
    }
  });

  // 点击按钮回到顶部
  toTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
}

/* ------------------------------------------------------------
   页面加载完成后执行
   DOMContentLoaded：DOM 结构解析完就触发，比 load 更早
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", function () {
  stripeTable();
  checkForm();
  backToTop();
});
