<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="container bg-dark">
      <nav class="navbar navbar-expand-sm justify-content-sm-center">
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
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
          </div>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style lang='scss'>
@import "./styles.scss";
</style>