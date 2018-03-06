<template>
  <button :class="clazz" :type="type" @click="onClick()">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    clazz: {
      type: String,
      default: "primary"
    },
    type: {
      type: String,
      default: "button"
    },
    confirm: {
      type: [String, Boolean],
      default: false
    }
  },

  methods: {
    onClick() {
      if (!this.confirm || this.confirm === "false") return this.$emit("click");

      if (confirm("Confirmar operação?")) return this.$emit("click");
    }
  }
};
</script>

<style scoped lang="scss">
$shadow-color: #35495e;
$btn-font-color: #fff;

button {
  display: inline-block;
  padding: 5px;
  border-radius: 3px;
  margin: 5px;
  font-size: 1em;
  font-weight: bold;
}

button:hover,
button:focus {
  box-shadow: 0 0 3px 1px $shadow-color;
}

button:active {
  box-shadow: 0 0 5px 1px $shadow-color;
}

.danger {
  background: #d34040f3;
  border-color: #aa3333f3;
  color: $btn-font-color;
}

.primary {
  background: #1da769;
  border-color: #248057;
  color: $btn-font-color;
}

.secondary {
  background: #35495e;
  border-color: #314357;
  color: $btn-font-color;
}
</style>
