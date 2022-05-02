<template>
  <div class="back" @rightclick.capture="rightClick">
    <taskbar></taskbar>
    {{name}}
  </div>
</template>

<script>
import taskbar from './components/taskbar'

export default {
  components: {
    taskbar
  },
  data: function() {
    return {
      name: "deguchi"
    }
  },
  methods:{
    rightClick: function(){
      console.log("Right Click");
    }
  }
}

</script>

<style scoped>
.back{
  min-height: 100vh;
  background-color: #008080;
}
</style>