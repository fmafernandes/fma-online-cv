<template>
  <div class="projects">
    <h1>Personal Projects</h1>
    <ProjectSection v-for="(data,index) in projectsData" :key="index" :projectsItem="data" />
  </div>
</template>

<script>
import ProjectSection from "@/components/ProjectSection.vue";

export default {
  name: "Projects",
  components: {
    ProjectSection
  },
  data: function() {
    return {
      projectsData: [
        {
          title: "Super Cool Project",
          image: "/img/images/logo.png",
          description:
            "This super cool project was projected to be very cool and awesome"
        },
        {
          title: "Amazing Project",
          image: "/img/images/logo.png",
          description:
            "This amazing project was projected to be amazingly awesome"
        },
        {
          title: "Incredible Project",
          image: "/img/images/logo.png",
          description:
            "This incredible project was projected to be incredibly awesome"
        }
      ]
    };
  }
};
</script>
