<template>
  <div class="experienceSection p-2">
    <div class="card">
      <h4 class="position">
        {{ experienceItem.position }}
        <span class="type">({{ experienceItem.type }})</span>
      </h4>
      <h3 class="institution">{{ experienceItem.institution }}</h3>
      <div class="date">{{ experienceItem.start }} - {{ experienceItem.end }}</div>
      <div class="description">
        <div class="avenir-black">Description:</div>
        <div class="pl-3">{{ experienceItem.description }}</div>
      </div>
      <div class="responsabilities">
        <div class="avenir-black">Responsabilities:</div>
        <li
          class="pl-3"
          v-for="(resp,index) in experienceItem.responsabilities"
          :key="index"
        >{{ resp }}</li>
      </div>
      <div class="technologies">
        <div class="avenir-black">Technologies:</div>
        <li class="pl-3" v-for="(tech,index) in experienceItem.technologies" :key="index">{{ tech }}</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceSection",
  props: {
    experienceItem: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang='sass'>
$secondary-color: #42b983
$light-secondary: #d9f1e6
.experienceSection
  text-align: left
  .card
    background-color: $light-secondary
    padding: 25px 18px
  .type
    font-size: 1rem
  .institution
    color: $secondary-color
    font-family: AvenirBlack
</style>
