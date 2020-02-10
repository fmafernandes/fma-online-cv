<template>
  <div class="about">
    <h1>About me</h1>
    <AboutSection v-for="(data,index) in aboutData" :key="index" :dataItem="data" />
  </div>
</template>

<script>
import AboutSection from "@/components/AboutSection.vue";

export default {
  name: "About",
  components: {
    AboutSection
  },
  data: function() {
    return {
      aboutData: [
        {
          title: "About me",
          text: [
            {
              subtitle: "Something",
              description: "I did this and that and it was quite fulfilling"
            },
            {
              subtitle: "Something",
              description: "I did this and that and it was quite fulfilling"
            }
          ]
        },
        {
          title: "Languages",
          text: [
            {
              subtitle: "English",
              description: "Fluent"
            },
            {
              subtitle: "Portuguese",
              description: "Fluent"
            }
          ]
        },
        {
          title: "Interests",
          text: [
            {
              subtitle: "Sports",
              description: "I love sports"
            },
            {
              subtitle: "Music",
              description: "I love listening to music"
            }
          ]
        },
        {
          title: "Education",
          text: [
            {
              subtitle: "Master's Degree",
              description: "FCT UNL"
            },
            {
              subtitle: "Bachelor's Degree",
              description: "FCT UNL"
            }
          ]
        }
      ]
    };
  }
};
</script>