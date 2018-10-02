<template>
  <div id="app">
    <Tab></Tab>
    <router-view></router-view>
    
  </div>
</template>

<script>
// import Tab from '@components/Tab';
import Tab from './components/Tab.vue'
export default {
  name: 'App',
  components:{Tab}
}
</script>

<style>

</style>
