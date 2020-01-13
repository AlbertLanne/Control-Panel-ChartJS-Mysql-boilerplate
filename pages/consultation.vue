<template>
<div>
  <p class="my-6 text-4xl font-serif text-center">
    Ordre de fabrication n°1</p>
<div>
  <line-example/>
</div>

</div>
</template>

<script>
  import LineExample from '../components/chart/LineExample'


  export default {
    // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-metav
    head() {
      return {
        title: "Consultation page"
      };
    },
    components: {LineExample,}

  };
</script>

<style scoped>
</style>
