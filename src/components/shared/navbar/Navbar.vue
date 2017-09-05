<template>
  <div>
    <ul class="navigation">
      <li>
        <a href="#">
          <router-link :to="{ name: 'dashboard'}">
            Organizer
          </router-link> 
        </a>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
  .navigation {
  list-style: none;
  margin: 0;
  background:#FF0000;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: flex-start;
}

.navigation a {
  text-decoration: none;
  display: block;
  padding: 1em;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.4em;
}



</style>


