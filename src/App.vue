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
            <v-tab to="/">HOME</v-tab>
            <v-tab to="/profile">PROFILE</v-tab>
            <v-tab to="/skill">SKILL</v-tab>
            <v-tab to="/work">WORK</v-tab>
            <v-tab to="/contact">CONTACT</v-tab>
          </v-tabs>

        </v-app-bar>

        <v-main class="grey lighten-3">
          <v-container>
            <router-view></router-view>
          </v-container>
        </v-main>
      </v-app>
    </template>

<script>
export default {
  data: () => ({

  })
}
</script>
