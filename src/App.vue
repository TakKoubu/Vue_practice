<!-- App.vue -->
    <template>
      <v-app id="inspire">
        <v-app-bar
          app
          color="white"
          flat
        >

          <v-tabs
            centered
            class="ml-n9"
            color="grey darken-1"
          >
            <v-tab
              v-for="link in links"
              :key="link"
            >
              {{ link }}
            </v-tab>
          </v-tabs>
        </v-app-bar>

        <v-main class="grey lighten-3">
          <v-container>

          </v-container>
        </v-main>
      </v-app>
    </template>

<script>
export default {
  data: () => ({
    links: [
      '<router-link to="/home">HOME</router-link>',
      'PROFILE',
      'SKILL',
      'WORK',
      'CONTACT'
    ]
  })
}
</script>
