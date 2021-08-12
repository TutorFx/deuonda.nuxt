<template>
<div v-if="loading" class="loading-container">
  <div ref="loading" id="loading" />
</div>
</template>

<script>
import loading from "lottie-web";
export default {
  mounted() {
    this.another = loading.loadAnimation({
      container: this.$refs.loading, // the dom element that will contain the animation
      name: "loading",
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/json/loading.json", // the path to the animation json
    });
    this.another.addEventListener('loopComplete', (e) => {
        this.loading = false
    });
  },
  methods: {
  },
  watch: {
  },
  data(){
      return{
          loading: true
      }
  }
};
</script>

<style lang="css"> 
        .loading-container{
            display: flex;
            position: fixed;
            z-index: 100;
            background-color: #1D4FAA;
            height: 100%;
            width: 100%;
            justify-content: center;
            align-items: center;
        }
        #loading{
        max-width: 400px;}
</style>