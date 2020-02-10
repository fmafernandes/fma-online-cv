<template>
  <div class="aboutSection p-2">
    <div class="card">
      <h2 class="title">{{ dataItem.title }}</h2>
      <div v-for="(text,index) in dataItem.text" :key="index">
        <h4 class="subtitle">{{ text.subtitle }}</h4>
        <div>{{ text.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
  props: {
    dataItem: {
      type: Object,
      required: true
    }
  }
};
</script>


<style lang="sass" scoped>
$secondary-color: #42b983
$light-secondary: #d9f1e6
.aboutSection
  text-align: left
  .card
    background-color: $light-secondary
    padding: 25px 18px
    .title
      color: $secondary-color
    .subtitle, .title
      font-family: AvenirBlack
</style>
