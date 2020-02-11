<template>
  <div class="projectsSection p-2">
    <div class="card">
      <h2 class="title">{{ projectsItem.title }}</h2>
      <div>
        <img alt class="img-fluid" :src="projectsItem.image" />
      </div>
      <div>{{ projectsItem.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectSection",
  props: {
    projectsItem: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang='sass'>
$secondary-color: #42b983
$light-secondary: #d9f1e6
.projectsSection
  /* text-align: left */
  .card
    background-color: $light-secondary
    padding: 25px 18px
  .title
    color: $secondary-color
    font-family: AvenirBlack
</style>
