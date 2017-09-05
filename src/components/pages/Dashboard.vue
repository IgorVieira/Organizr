<template>
  <div>
    <md-layout md-flex="100">
      <md-layout
        md-row
        md-flex="25"
        md-flex-small="33"
        md-flex-xsmall="50"
        md-align="center"
        :key="project.id"
        v-for="project in projectsList">
        <md-card md-inset class="md-primary cards">
          <md-card-header>
              <router-link :to="{ name: 'project', params: { id : project._id }}">
               <div class="md-title">{{ project.name | truncate }}</div>
              </router-link> 
            <div class="md-subhead">Subtitle here</div>
          </md-card-header>
        </md-card>
      </md-layout>
      <md-layout
        md-column
        md-flex="25"
        md-flex-small="33"
        md-flex-xsmall="50"
        md-align="center"
        md-vertical-align="center">
        <create-project
          class='new-card-button'
          :projects-list=projectsList
          @added="updateList">
        </create-project>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>

import CreateProject from '../shared/actions/CreateProject'

export default {
  name: 'dashboard',
  data () {
    return {
      projectsList: [{
        _id: 1,
        name: 'Something'
      }]
    }
  },
  components: {
    CreateProject
  },
  methods: {
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
<style scoped>
a {
  text-decoration: inherit;
}
.new-card-button {
  margin-top: 3.125rem;
}
.cards {
  width: 80%;
  height: 9.375em;
  margin-top: 3.125rem;
  box-shadow: .1875rem .1875rem .625rem grey;
}
</style>
