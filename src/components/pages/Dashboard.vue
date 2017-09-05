<template>
  <div class="container">
    <div>
        <form @submit.prevent="createCard()">
          <input type="text" name="" v-model="project.name" id="">
          <input type="submit" value="add">
        </form>
    </div>
    <div class="flex-container">
        <div
        class="flex-item"
        :key="project.id"
        v-for="project in projectsList">
        <router-link :to="{ name: 'project', params: { id : project._id }}">
          <div class="project-title">{{ project.name | truncate }}</div>
        </router-link> 
        <div class="project-subtitle">Subtitle here</div>  
      </div> 
    </div>
  </div>
</template>

<script>

export default {
  name: 'dashboard',
  data () {
    return {
      projectsList: [],
      project: {
        name: ''
      }
    }
  },
  methods: {
    createCard () {
      this.projectsList = [...this.projectsList, {id: Math.random(), name: this.project.name}]
    },
    updateList (newList) {
      this.projectsList = newList
    },
    editCard () {

    },
    deleteCard () {

    }
  },
  filters: {
    truncate (value) {
      return value.length < 24 ? value : value.substring(0, 24) + '...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>

.container {
  padding-left: 5em;
}

.flex-container {
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.flex-item {
  background: #aaaaaa;
  margin-top: 2em;
  margin-left: 2em;
  padding: 1em;
  width: 150px;
  height: 75px;
}

.project-title {
  padding-top:1em;
}

.project-title,
.project-subtitle {
  padding-left: 0.5em;
}





</style>
