<template>
  <h1 :style="{ color: color, fontSize: size + 'px' }">{{ text }}</h1>
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
      default: '#000',
    },
    size: {
      type: Number,
      default: 24,
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
