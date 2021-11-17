<template>
  <section class="skill">

    <v-card class="mt-13">
      <v-card-title>Languages</v-card-title>
      <v-divider></v-divider>
      <div class="row">
        <div class="col-3 text-center">
          <h3>HTML5</h3>
          <font-awesome-icon :icon="['fab', 'html5']" size="3x" color="black"/>
          <v-rating
            v-model="rating"
            background-color="glay"
            color="black"
            hover
            length="5"
            rating="2"
            size="20"
            value="2"
          ></v-rating>
        </div>
        <div class="col-3 text-center">
          <h3>CSS3</h3>
          <font-awesome-icon :icon="['fab', 'css3-alt']" size="3x" color="black"/>
        </div>
        <div class="col-3 text-center">
          <h3>Javascript</h3>
          <font-awesome-icon :icon="['fab', 'js']" size="3x" color="black"/>
        </div>
        <div class="col-3 text-center">
          <h3>Ruby</h3>
          <img src="../assets/img/ruby.png" height="10%">
        </div>
      </div>
    </v-card>
  </section>
</template>

<script>
export default {}
</script>
