<template>

    <v-main style="display:flex; align-items:center; height: 100%; width: 100%">
      <div class="text-center">
        <v-img src="./caldo/1.gif" class="mb-5" height="360px" width="100%" contain />
        <h1 v-if="error.statusCode === 404">
          {{ pageNotFound }}
        </h1>
        <h1 v-else>
          {{ otherError }}
        </h1>

        <v-btn outlined class="mt-3" to="/">Voltar para a superfície</v-btn>

      </div>
    </v-main>

</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 - Essa página tomou um caldo!',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
