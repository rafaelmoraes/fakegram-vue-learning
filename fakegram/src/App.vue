<template>
  <div>
    <h1>
      <img class="logo" src="./assets/logo.png" alt="Logo">
      <router-link :to="{name: 'home'}">
        {{ title }}
      </router-link>
    </h1>
    <nav-menu/>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavMenu from "./components/shared/nav-menu/NavMenu.vue";

export default {
  components: {
    "nav-menu": NavMenu
  },
  data() {
    return {
      title: "Fakegram"
    };
  }
};
</script>

<style>
h1 {
  text-transform: uppercase;
  text-align: center;
  font-size: 3em;
}
h1 .logo {
  width: 50px;
  margin-bottom: -0.07em;
}
main {
  font-family: Helvetica, sans-serif;
}

input,
textarea {
  border: solid 1px;
  border-radius: 3px;
}
body {
  margin: 1em;
  color: #35495e;
}

a {
  text-decoration: none;
  color: #41b883;
}

a:hover,
a:active {
  color: #35495e;
  text-shadow: 1px 1px 2px #35495e, 0 0 1em #41b883, 0 0 0.3em #41b883;
}
</style>
