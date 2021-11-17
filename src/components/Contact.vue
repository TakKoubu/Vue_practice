<template>
  <section class="contact">
    <div class="row mt-5">
      <div class="col-12">
        <v-card
          class="mx-auto pa-4"
          height="100%"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-card-text>
                <div class="body-1 mb-1 justify-center">
                  個人開発で得た知見や、学習したことについて発信していきます。<br>
                  フォローしていただけると励みになります。
                </div>
              </v-card-text>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <font-awesome-icon :icon="['fab', 'github']" size="2x" color="black"/>
            <font-awesome-icon icon="fa-github-square" />
            <v-btn to=skill class="pa-6"><font-awesome-icon icon="github-square" />GITHUB</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </section>
</template>
