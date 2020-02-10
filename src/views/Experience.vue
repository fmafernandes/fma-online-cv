<template>
  <div class="experience">
    <h1>Experience</h1>
    <ExperienceSection v-for="(data,index) in experienceData" :key="index" :experienceItem="data" />
  </div>
</template>

<script>
import ExperienceSection from "@/components/ExperienceSection.vue";

export default {
  name: "Experience",
  components: {
    ExperienceSection
  },
  data: function() {
    return {
      experienceData: [
        {
          position: "Front-end Developer",
          type: "Internship",
          institution: "Google",
          start: "01/01/2010",
          end: "31/12/2010",
          description: "Did a lot of fun stuff",
          responsabilities: ["Front-end", "Serving coffee"],
          technologies: ["Angular", "Nespresso"]
        },
        {
          position: "Quality Assurance",
          type: "Part-time",
          institution: "Amazon",
          start: "01/01/2012",
          end: "31/12/2014",
          description: "Neverendless effort towards a goal",
          responsabilities: ["Network", "Quality Assurance"],
          technologies: ["AWS", "ElasticSearch"]
        },
        {
          position: "Back-end Developer",
          type: "Full-time",
          institution: "Microsoft",
          start: "01/01/2015",
          end: "31/12/2019",
          description: "Built some cool code",
          responsabilities: ["Back-end", "Testing"],
          technologies: ["IIS"]
        }
      ]
    };
  }
};
</script>
