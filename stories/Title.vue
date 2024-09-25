<template>
  <h1 :class="classes">{{ text }}</h1>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'black', // Expect Tailwind-compatible color names (e.g., 'black', 'blue-500')
    },
    size: {
      type: String,
      default: '2xl', // Expect valid Tailwind sizes ('sm', 'lg', '2xl', etc.)
    },
  },
  computed: {
    classes() {
      return [`text-${this.color}`, `text-${this.size}`]; // Make sure this resolves to valid Tailwind classes
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 0;
}
</style>
