<template>
  <v-app>
    <loading />
    <div>
      <v-navigation-drawer app v-model="menu" color="white" temporary>
        <v-list dense nav>
          <v-list-item :to="item[1]" :nuxt="true" v-for="item in links" :key="item.title" link>
            <v-list-item-content >
              <v-list-item-title>{{ item[0] }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        app
        color="#1D4FAA"
        flat
        :height="$vuetify.breakpoint.mobile ? '75px' : '100px'"
        elevate-on-scroll
        :class="
          $vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? '' : 'line-bottom'
        "
      >
        <v-container style="height: 100%" class="d-flex align-center">
          <NuxtLink to="/" style="height: 100%">
            <img
              :style="`min-height: 100%; width: auto; max-width: ${
                $vuetify.breakpoint.xs ? 70 : 100
              }%`"
              contain
              :src="
                $vuetify.breakpoint.sm || $vuetify.breakpoint.xs
                  ? '/logo.svg'
                  : '/logovert.svg'
              "
            />
          </NuxtLink>

          <v-spacer />
          <div v-if="!$vuetify.breakpoint.mobile" class="d-flex align-center">
            <v-btn :to="i[1]" dark text v-for="(i, key) in links" :key="key">
              {{ i[0] }}
            </v-btn>
          </div>
          <v-btn dark v-if="$vuetify.breakpoint.mobile" @click="menu = !menu" text fab>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-container>
      </v-app-bar>

      <v-main>
        <Nuxt />
      </v-main>

      <v-footer color="white" app>
      <!-- -->
      </v-footer>
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      links: [
        ["Home", "/"],
        ["Quem Somos", "/quem-somos"],
        ["Portfolio", "/portfolio"],
        ["Contato", "/contato"],
        ["Gráfica", "/grafica"]
      ],
      menu: false
    };
  },
  head() {
    return {
      script: [
        { hid: 'hs-script-loader', src: '//js.hs-scripts.com/7236089.js', defer: true, async: true, }
      ]
    }
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
