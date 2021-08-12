<template>
  <v-app>
    <loading />
    <div>
      <v-app-bar
        app
        color="#1D4FAA"
        flat
        height="125px"
        elevate-on-scroll
        :class="
          $vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? '' : 'line-bottom'
        "
      >
        <v-container class="fill-height d-flex">
          <v-col xs="12" md="2" align-self="center">
            <NuxtLink to="/">
            <v-img
              max-height="60px"
              max-width="160px"
              contain
              :src="
                $vuetify.breakpoint.sm || $vuetify.breakpoint.xs
                  ? '/logo.svg'
                  : '/logovert.svg'
              "
          />
            </NuxtLink>
          </v-col>
          
          <v-col xs="12" lg="10" align-self="center" class="d-flex">
            <v-spacer></v-spacer>
            <div>{{links}}</div>
              <v-btn v-for="(l, key) in links" :key="key" to="/" text>
                <b>Home</b>
              </v-btn>
            </v-col
          >
        </v-container>
      </v-app-bar>

      <v-main>
        <Nuxt />
      </v-main>
    </div>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  computed:{
    links() { 
      console.log(this.$store.state)
      return this.$store.state.links }
  }
};
</script>

<style lang="scss">
.line-bottom {
  border-bottom: 1px solid #436094 !important;
}
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;300;500;800&display=swap");

$font-family: "Ubuntu";

.v-application {
  font-family: "Montserrat Alternates", sans-serif !important;
  .title {
    // To pin point specific classes of some components
    font-family: "Montserrat Alternates", sans-serif !important;
  }
}
</style>
