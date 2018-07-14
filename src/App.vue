<template>
  <div id="app">
    <!-- keep alive 表示路由内容被加载过后，会被放入存储当中，不需要重新加载 ，引入这keepalive ,就会多一个钩子activated -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
