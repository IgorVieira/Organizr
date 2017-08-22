<template>
  <div>
    <md-layout md-gutter>
      <md-dialog-prompt
        class="prompt"
        :md-title="prompt.title"
        :md-content="prompt.content"
        :md-ok-text="prompt.ok"
        :md-cancel-text="prompt.cancel"
        :md-input-maxlength="prompt.maxlength"
        :md-input-placeholder="prompt.placeholder"
        @open="onOpen"
        @close="onClose"
        v-model="prompt.value"
        ref="dialog6">
      </md-dialog-prompt>

      <md-button class="md-primary md-raised" @click="openDialog('dialog6')">ADD CARD</md-button>
    </md-layout>
    <md-layout md-flex="100">
      <md-layout
        md-row
        md-flex="25"
        md-align="center"
        :key="project.id"
        v-for="project in listProjects">
        <md-card md-inset class="md-primary cards">
          <md-card-header>
            <div class="md-title">{{ project.name | truncate }}</div>
            <div class="md-subhead">Subtitle here</div>
          </md-card-header>
        </md-card>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      listProjects: [{id: 1, name: 'Hey'}],
      prompt: {
        title: 'Project Name',
        ok: 'Save',
        cancel: 'Cancel',
        id: 'name',
        name: 'name',
        placeholder: 'Your awesome project name goes here...',
        maxlength: 80,
        value: ''
      }
    }
  },
  methods: {
    createCard () {
      this.listProjects = [...this.listProjects, {id: 2, name: this.prompt.value}]
    },
    editCard () {
      this.listProjects = [...this.listProjects, {id: 2, name: this.prompt.value}]
    },
    deleteCard () {
      this.listProjects = [...this.listProjects, {id: 2, name: this.prompt.value}]
    },
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    onOpen () {

    },
    onClose (type) {
      if (type === 'ok' && this.prompt.value.length > 0) {
        this.createCard()
      }
      this.prompt.value = ''
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
.cards {
  width: 80%;
  height: 9.375em;
  margin-top: 3.125rem;
  box-shadow: .1875rem .1875rem .625rem grey;
}
.prompt {
  /* width: 100%; */
  /* height: 50em; */
}
</style>
