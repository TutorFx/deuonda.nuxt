<template>
  <v-container>
    <v-row class="py-5">
      <v-col>
        <v-stepper outlined v-model="e1">
          <v-stepper-header outlined class="elevation-0">
            <v-stepper-step :complete="e1 > 1" step="1">
              Tipos de Impressão
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">
              Design
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3"> Visualização </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              
              <v-card class="mb-2" color="rgb(247, 247, 248)" flat>
                <v-radio-group v-model="designOp0" dense>
                  <v-row class="pa-3 pb-0" :justify="!$vuetify.breakpoint.mobile?'start':'center'">
                    <v-col v-for="(op, k) in designActOpt0" :key="k" :value="k" cols="12" xl="2" lg="3" md="5" sm="6">
                      <v-card width="300px" height="300px" border="3" flat v-ripple="{class: `primary--text`}" @click="designOp0 = k">
                        <v-img
                          :src="op[1]"
                          height="230px"
                        >
                        </v-img>
                        <v-card
                          flat
                          height="70px"
                          class="pa-3 d-flex align-center"
                          style="border-top-right-radius:0; border-top-left-radius:0"
                          :color="designOp0 == k? 'primary':undefined"
                        >
                          <v-radio :dark="designOp0 == k" class="mb-0 mx-2"></v-radio>
                          <span :class="designOp0 == k ? 'white--text':undefined">{{op[0]}}</span>
                        </v-card>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-radio-group>
              </v-card>

              <v-btn color="primary" @click="e1 += 1" :disabled="designOp0 == null"> Continue </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-2" color="rgb(247, 247, 248)" flat>
                <v-radio-group v-model="designOp1" dense>
                  <v-row class="pa-3 pb-0" :justify="!$vuetify.breakpoint.mobile?'start':'center'">
                    <v-col v-for="(op, n) in designActOpt1" :key="n" :value="n" cols="12" xl="2" lg="3" md="5" sm="6">
                      <v-card width="300px" height="300px" border="3" flat v-ripple="{class: `primary--text`}" @click="designOp1 = n">
                        <v-img
                          :src="op[1]"
                          height="230px"
                        >
                        </v-img>
                        <v-card
                          flat
                          height="70px"
                          class="pa-3 d-flex align-center"
                          style="border-top-right-radius:0; border-top-left-radius:0"
                          :color="designOp1 == n? 'primary':undefined"
                        >
                          <v-radio :dark="designOp1 == n" class="mb-0 mx-2"></v-radio>
                          <span :class="designOp1 == n ? 'white--text':undefined">{{op[0]}}</span>
                        </v-card>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-radio-group>
              </v-card>

              <v-btn color="primary" @click="e1 += 1" :disabled="designOp1 == null"> Continue </v-btn>
              <v-btn text @click="e1 -= 1"> Voltar </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              
              <!--  -->
              

              <v-btn color="primary"> Finalizar </v-btn>

              <v-btn text @click="e1 -= 1"> Voltar </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col></v-row
    >
    <viewport />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
      designOp0: null,
      designActOpt0: [
        ['Xícara estampada', 'https://mir-s3-cdn-cf.behance.net/projects/404/c9216a101724647.Y3JvcCwyNTAwLDE5NTUsMCwyNA.jpg'],
        ['Embalagem Açaí', 'https://mir-s3-cdn-cf.behance.net/projects/404/1092cf123769791.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg'],
        ['Sachê', 'https://mir-s3-cdn-cf.behance.net/projects/404/782432114405275.Y3JvcCwxMTk0LDkzNCwxMjEsMA.jpg'],
      ],
      designOp1: null,
      designActOpt1: [
        ['Quero a ajuda de um designer', 'https://mir-s3-cdn-cf.behance.net/projects/404/1092cf123769791.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg'],
        ['Ver alguns designs prontos', 'https://mir-s3-cdn-cf.behance.net/projects/404/782432114405275.Y3JvcCwxMTk0LDkzNCwxMjEsMA.jpg'],
      ]
    };
  },
};
</script>

<style>
</style>