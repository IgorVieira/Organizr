<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/pages/Home'
import Navbar from './components/shared/navbar/Navbar'

export default {
  name: 'app',
  components: {
    Home,
    Navbar
  }
}
</script>

<style>
</style>
