<template>
  <section class="skill">
    <v-card class="mt-13">
      <v-card-title>Languages</v-card-title>
      <v-divider></v-divider>
      <div class="row my-3">
        <div class="col-3 text-center">
          <h3>HTML5</h3>
          <font-awesome-icon :icon="['fab', 'html5']" size="3x" color="black"/>
          <v-rating
            background-color="glay"
            color="black"
            hover
            length="5"
            rating="2"
            size="20"
            value="3"
            readonly
          ></v-rating>
        </div>
        <div class="col-3 text-center">
          <h3>CSS3</h3>
          <font-awesome-icon :icon="['fab', 'css3-alt']" size="3x" color="black"/>
          <v-rating
            background-color="glay"
            color="black"
            hover
            length="5"
            rating="2"
            size="20"
            value="3"
            readonly
          ></v-rating>
        </div>
        <div class="col-3 text-center">
          <h3>Javascript</h3>
          <font-awesome-icon :icon="['fab', 'js']" size="3x" color="black"/>
          <v-rating
            background-color="glay"
            color="black"
            hover
            length="5"
            rating="2"
            size="20"
            value="2"
            readonly
          ></v-rating>
        </div>
        <div class="col-3 text-center">
          <h3>Ruby</h3>
          <img src="../assets/img/ruby.png" height="45px" width="45px">
          <v-rating
            background-color="glay"
            color="black"
            hover
            length="5"
            rating="2"
            size="20"
            value="2"
            readonly
          ></v-rating>
        </div>
      </div>

      <v-card-title>Frameworks ＆ Libraries</v-card-title>
      <v-divider></v-divider>
      <div class="row my-3">
        <div class="col-3 text-center">
          <h3>Boostrap</h3>
          <font-awesome-icon :icon="['fab', 'bootstrap']" size="3x" color="black"/>
          <v-rating
            background-color="glay"
            color="black"
            hover
            length="5"
            rating="2"
            size="20"
            value="2"
            readonly
          ></v-rating>
        </div>
        <div class="col-3 text-center">
          <h3>Vue</h3>
          <font-awesome-icon :icon="['fab', 'vuejs']" size="3x" color="black"/>
          <v-rating
            background-color="glay"
            color="black"
            hover
            length="5"
            rating="2"
            size="20"
            value="2"
            readonly
          ></v-rating>
        </div>
        <div class="col-3 text-center">
          <h3>jQuery</h3>
          <img src="../assets/img/jquery.png" height="45px" width="45px">
          <v-rating
            background-color="glay"
            color="black"
            hover
            length="5"
            rating="2"
            size="20"
            value="2"
            readonly
          ></v-rating>
        </div>
        <div class="col-3 text-center">
          <h3>Rails</h3>
          <img src="../assets/img/rails.png" height="45px" width="45px">
          <v-rating
            background-color="glay"
            color="black"
            hover
            length="5"
            rating="2"
            size="20"
            value="2"
            readonly
          ></v-rating>
        </div>
      </div>

      <v-card-title>Tools ＆ Others</v-card-title>
      <v-divider></v-divider>
      <div class="row my-3">
        <div class="col-3 text-center">
          <h3>Docker</h3>
          <font-awesome-icon :icon="['fab', 'docker']" size="3x" color="black"/>
          <v-rating
            background-color="glay"
            color="black"
            hover
            length="5"
            rating="2"
            size="20"
            value="2"
            readonly
          ></v-rating>
        </div>
        <div class="col-3 text-center">
          <h3>Heroku</h3>
          <img src="../assets/img/heroku.png" height="42px" width="42px">
          <v-rating
            background-color="glay"
            color="black"
            hover
            length="5"
            rating="2"
            size="20"
            value="3"
            readonly
          ></v-rating>
        </div>
        <div class="col-3 text-center">
          <h3>AWS</h3>
          <font-awesome-icon :icon="['fab', 'aws']" size="3x" color="black"/>
          <v-rating
            background-color="glay"
            color="black"
            hover
            length="5"
            rating="2"
            size="20"
            value="2"
            readonly
          ></v-rating>
        </div>
        <div class="col-3 text-center">
          <h3>Linux</h3>
          <font-awesome-icon :icon="['fab', 'linux']" size="3x" color="black"/>
          <v-rating
            background-color="glay"
            color="black"
            hover
            length="5"
            rating="2"
            size="20"
            value="2"
            readonly
          ></v-rating>
        </div>
      </div>
    </v-card>
  </section>
</template>

<script>
export default {}
</script>
