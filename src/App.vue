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

        <v-main class="grey lighten-3 home-content pb-20">
          <v-container>
            <router-view></router-view>
          </v-container>
        </v-main>
      </v-app>
    </template>

    <style  lang="scss" scoped>
      .home-content {
        background: url(./assets/img/home.jpg) repeat;
        background-size: cover;
        background-position: center center;
        background-repeat: repeat-y;
        width: 100%;
        height: 100%;

        &-text {
          color: white;
          text-align: center;
          font-size: 28px;
          font-weight: bold;

        }
      }
      </style>

<script>
export default {
  data: () => ({

  })
}
</script>
