<template>
  <div>
    <input type="text" :value="msg" @input="changeMessage" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: ["msg"],
  data() {
    return {
      message: ``,
    };
  },
  methods: {
    changeMessage(event) {
      this.message = event.target.valuel;
      this.$emit(`messageChanged`, this.message);
    },
  },
};
</script>
