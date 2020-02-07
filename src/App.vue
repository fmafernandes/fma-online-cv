<template>
  <div id="app">
    <div class="nav-bg">
      <nav class="navbar navbar-expand-sm justify-content-sm-center wrapper-width">
        <a class="navbar-brand">
          <img src="/img/images/fmaf-logo.png" width="30" height="30" alt />
        </a>
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
            <router-link to="/">About me</router-link>
            <router-link to="/about">Experience</router-link>
          </div>
        </div>
      </nav>
    </div>
    <div class="wrapper-width py-5">
      <router-view />
    </div>
  </div>
</template>

<style lang='scss'>
@import "./styles.scss";
</style>