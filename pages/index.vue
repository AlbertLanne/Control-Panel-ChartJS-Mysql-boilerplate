<template>
    <div class=" min-h-screen w-full h-full  bg-purple-800 text-white text-xl font-light">

      <div class="flex text-center text-3xl w-full justify-center py-8 border-b border-white">
<p class="border-b border-white">  Page principale</p>
    </div>

      <div class="py-12  border-b border-white hover:shadow-xl text-center justify-center">
        <p>✔ Statut BDD (svg)</p>
        <p>✔ status Connection (svg)</p>
      </div>

      <div class="flex w-full justify-center align-baseline py-3 border-b border-white">

      <div class="bg-purple-200 rounded-lg mx-2">
        <LineExample/>
      </div>
        <div class="bg-purple-200 rounded-lg mx-2">
          <LineExample/>
        </div>

        <div class="bg-purple-200 rounded-lg mx-2">
          <LineExample/>
        </div>
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
