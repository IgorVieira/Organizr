<template>
  <div>
    <md-layout md-gutter>
      <md-dialog-prompt
        class="modal-size"
        :md-ok-text="prompt.ok"
        :md-title="prompt.title"
        :md-cancel-text="prompt.cancel"
        :md-input-maxlength="prompt.maxlength"
        :md-input-placeholder="prompt.placeholder"
        @open="onOpen"
        @close="onClose"
        v-model="prompt.value"
        ref="createCard">
      </md-dialog-prompt>

      <md-button class="md-primary md-raised" @click="openDialog('createCard')">ADD PROJECT</md-button>
    </md-layout>
  </div>
</template>

<script>
export default {
  name: 'create-project',
  props: {
    projectsList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      list: this.projectsList,
      prompt: {
        ok: 'Save',
        title: 'Project Name',
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
      this.list = [...this.list, {id: Math.random(), name: this.prompt.value}]
      this.$emit('added', this.list)
    },
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    onOpen () {
      this.prompt.value = ''
    },
    onClose (type) {
      if (type === 'ok' && this.prompt.value.length > 0) {
        this.createCard()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.modal-size .md-dialog {
  min-width: 30rem;
}

@media (max-width: 30rem) {
.modal-size .md-dialog {
  min-width: 80%;
  }
}
</style>
