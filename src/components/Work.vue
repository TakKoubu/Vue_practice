<template>
  <section class="work">
    <div class="row">
      <div class="col-md-4 col-12">
        <v-card class="pb-13">
          <v-img
            class="white--text align-end"
            height="200px"
            src="../assets/img/portfoliopage.png"
          >
          </v-img>

          <v-card-title>ポートフォリオサイト</v-card-title>

          <v-card-text class="text--primary">
            <div>フロントエンドの学習として、Vue.jsを勉強し作成しました。
                開発環境の構築からデプロイまでを一貫して学習しました。今後も引き続き改良を重ねていきたいです。</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              rounded
              style="text-transform: none"
              color="gley"
            >
              Vue.js
            </v-btn>
            <v-btn
              rounded
              style="text-transform: none"
              color="gley"
            >
              Vuetify
            </v-btn>
            <v-btn
              rounded
              style="text-transform: none"
              color="gley"
            >
              Netlify
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div class="col-md-4 col-12">
        <v-card class="pb-1">
          <v-img
            class="white--text align-end"
            height="200px"
            src="../assets/img/sanpomiti.png"
          >
          </v-img>

          <v-card-title>さんぽみち</v-card-title>

          <v-card-text class="text--primary">
            <div>バックエンドの学習として、Railsを中心に学習を行いました。
                開発環境の構築からデプロイまでを一貫して学習。</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              rounded
              style="text-transform: none"
              color="gley"
            >
              Ruby
            </v-btn>
            <v-btn
              rounded
              style="text-transform: none"
              color="gley"
            >
              Rails
            </v-btn>
            <v-btn
              rounded
              style="text-transform: none"
              color="gley"
            >
              Rspec
            </v-btn>
            <v-btn
              rounded
              style="text-transform: none"
              color="gley"
            >
              Docker
            </v-btn>
            <v-btn
              rounded
              style="text-transform: none"
              color="gley"
            >
              AWS
            </v-btn>
          </v-card-actions>
          <v-divider></v-divider>
          <div class="my-3 text-center">
            <v-btn
              color="black"
              dark
              large
              href="https://github.com/TakKoubu/Sanpomiti_app"
            >
            <font-awesome-icon :icon="['fab', 'github-square']" size="3x" color="glay"/>
              Github
            </v-btn>
          </div>
        </v-card>
      </div>
      <div class="col-md-4 col-12">
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
