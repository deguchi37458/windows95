<template>
  <div class="taskbar">
    <div class="start" v-on:click="onStart">
      <img src="@/assets/start-button.png" alt="">
    </div>
    <div class="end">
      11:20
    </div>
    <div id="menu" class="menu">
      <div class="windows95">

      </div>
      <ul class="menu-list">
        <li>
          <img src="@/assets/file.png" alt="">ﾌﾟﾛｸﾞﾗﾑ(P)
          <ul class="sub-menu-list">
            <li>ﾌﾟﾛｸﾞﾗﾑ</li>
            <li>ﾌﾟﾛｸﾞﾗﾑ</li>
            <li>ﾌﾟﾛｸﾞﾗﾑ</li>
          </ul>
        </li>
        <li>
          <img src="@/assets/file.png" alt="">最近使ったﾌｧｲﾙ(D)
          <ul class="sub-menu-list">
            <li>最近使ったﾌｧｲﾙ</li>
            <li>最近使ったﾌｧｲﾙ</li>
            <li>最近使ったﾌｧｲﾙ</li>
          </ul>
        </li>
        <li><img src="@/assets/setting.png" alt="">設定(S)</li>
        <li><img src="@/assets/search.png" alt="">検索(F)</li>
        <li><img src="@/assets/help.png" alt="">ﾍﾙﾌﾟ(H)</li>
        <li><img src="@/assets/run.png" alt="">ﾌｧｲﾙを検索して実行(R)...</li>
        <li class="shut-down"><img src="@/assets/shut-down.png" alt="">Windows の終了(U)...</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onStart: function(){
      var menu = document.getElementById("menu");
      menu.classList.toggle("open");
    }
  }
}
</script>

<style scoped>
.taskbar {
  background-color: silver;
  padding: 2px;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #4e4e4e;
  box-shadow: inset 1px 0 #fff;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  height: 33px;
}
.start,
.end{
  font-size: 14px;
  background-color: silver;
  display: inline-block;
  line-height: 1.8rem;
  padding: 2px 6px 3px;
  margin: 0 6px 2px 2px;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  box-shadow: inset 1px 1px #dfdfdf, 1px 0 #000, 0 1px #000, 1px 1px #000;
}
.start {
  position: absolute;
  left: 0;
}
.end {
  position: absolute;
  right: 0;
}
.menu {
  display: none;
  position: absolute;
  background-color: silver;
  left: 5px;
  bottom: 32px;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  box-shadow: inset 1px 1px #dfdfdf, 1px 0 #000, 0 1px #000, 1px 1px #000;
}
.menu.open {
  display: flex;
}
.menu .menu-list li {
  position: relative;
  width: 250px;
  display: flex;
  align-items: center;
}
.menu .menu-list li:hover {
  background-color: navy;
  color: #fff;
}
.menu .menu-list li img{
  width: 48px;
}
.windows95 {
  background-color: #84878C;
  width: 35px;
}
.sub-menu-list {
  position: absolute;
  top: 0;
  right: -250px;
}
</style>
