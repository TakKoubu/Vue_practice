<template>
  <section class='profile'>
    <div class="row justify-center mt-5">
      <div class="col-md-6 col-12">
        <v-avatar size="350" width="85%">
          <img
            src="../assets/img/cat.jpg"
            alt="John"
          >
        </v-avatar>
      </div>
      <div class="col-md-6 col-12">
        <v-card
          class="mx-auto pa-4"
          height="100%"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 pb-3">
                <div>こくぶ</div>
              </v-list-item-title>
              <v-divider></v-divider>
              <v-card-text>
                <div class="body-1 mb-1">
                  IT技術に関心を持ち、プログラミングを学ぶ。学ぶ過程でイメージが形になる瞬間が自分自身の大きなモチベーションになることに気付き、WEB系エンジニアを目指すようになる。
                  現在は税務関係の組織で働きながら、学習を継続中。
                </div>
              </v-card-text>
              <v-divider></v-divider>
            </v-list-item-content>
          </v-list-item>
           <v-card-actions>
            <v-btn to=skill>保有スキル</v-btn>
            <v-btn to=work>実績・制作物</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </section>
</template>
