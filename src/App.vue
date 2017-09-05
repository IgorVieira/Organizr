<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import DashBoard from './components/pages/Dashboard'
import Navbar from './components/shared/navbar/Navbar'

export default {
  name: 'app',
  components: {
    DashBoard,
    Navbar
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  body {
    font-family: 'Roboto', sans-serif;  
    margin:0 auto;
  }

  a {
    text-decoration: inherit;
  }

  


</style>
