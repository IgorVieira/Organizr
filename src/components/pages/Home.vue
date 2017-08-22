<template>
  <div>
    <ul v-for="project in listProjects" :key="project.id">
      <li>
        {{project.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      listProjects: [{id: 1, name: 'Hey'}]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
