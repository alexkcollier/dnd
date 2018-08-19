<template>
  <div class="content content-wrapper">
    <div class="hero is-fullheight">
      <div class="hero-body">
        <h1 class="title is-size-1">{{ message }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'], // eslint-disable-line

  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || '<%= messages.client_error %>'
    }
  }
}
</script>
