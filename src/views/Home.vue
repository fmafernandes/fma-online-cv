<template>
  <div class="home p-2">
    <div class="card">
      <h1 class="name">{{info.name}}</h1>
      <h3 class="position">{{info.position}}</h3>
      <div>Social</div>
      <a class="social" :href="'mailto:'+info.social.email" target="_blank">{{info.social.email}}</a>
      <a class="social" :href="'//'+info.social.linkedin" target="_blank">{{info.social.linkedin}}</a>
      <a class="social" :href="'//'+info.social.github" target="_blank">{{info.social.github}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: function() {
    return {
      info: {
        name: "Francisco Fernandes",
        position: "Front-end Developer",
        social: {
          email: "fmaf.fernandes@gmail.com",
          linkedin: "linkedin.com/in/francisco-fernandes-3093b1198/",
          github: "github.com/fmafernandes"
        }
      }
    };
  }
};
</script>

<style lang="sass">
$secondary-color: #42b983
$light-secondary: #d9f1e6
.home
  .card
    background-color: $light-secondary
    padding: 25px 18px
    .position
      color: $secondary-color
      font-family: AvenirBlack
</style>
