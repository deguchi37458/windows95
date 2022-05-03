<template>
  <div class="taskbar">
    <div class="start" v-on:click="onStart">
      <img src="@/assets/start-button.png" alt="">
    </div>
    <div class="end">
      11:20
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onStart: {
      
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
  display: flex;
  align-items: center;
  justify-content: space-between;
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
</style>
