<template>
  <div id="app">
    <div class="nav-bg">
      <nav class="navbar navbar-expand-sm justify-content-sm-center wrapper-width">
        <div class="navbar-brand">
          <router-link to="/">
            <img :src="logo" width="30" height="30" alt />
          </router-link>
        </div>
        <div class="cross-btn-container">
          <button
            class="navbar-toggler navbar-toggler-right collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapsableNavbar"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="collapsableNavbar">
          <div class="navbar-nav text-center">
            <router-link to="/about">About me</router-link>
            <router-link to="/experience">Experience</router-link>
            <router-link to="/projects">Projects</router-link>
          </div>
        </div>
      </nav>
    </div>
    <div class="wrapper-width py-3">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require("./assets/fmaf-logo.png")
    };
  }
};
</script>

<style lang='scss'>
@import "./styles.scss";
</style>