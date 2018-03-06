<template>
    <nav>
      <ul>
        <li v-for="route in routes" :key="route.path">
          <router-link :to="route.path">
            {{ route.label }}
          </router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
import { routes } from "../../../routes";
export default {
  data() {
    return {
      routes: routes.filter(r => r.label)
    };
  }
};
</script>

<style scoped>
nav {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 1em;
  margin-bottom: 1em;
}
ul {
  display: flex;
  font-size: 1.2em;
}

li {
  margin: 0.5em;
}
</style>
