<template>
  <div class=" min-h-screen bg-orange-400 flex-wrap text-copy-primary flex flex-wrap ">

    <div class="chart w-full flex justify-center">
      <div class="bg-red-500 rounded-lg  w-3/12 flex  justify-center ">
        <div class="align-middle">

          <div class="bg-black mt-20 border h border-black bg-white p-2 rounded-lg">

            <select v-model="selected" class="bg-white">
              <option disabled value="">Please select one</option>
              <option>Production global annuelle</option>
              <option>Répartition produit</option>
              <option>Changes horaire par produit</option>
            </select>

          </div>
          <span>Selected: {{ selected }}</span>
          <div class="justify-end flex">

            <button class="border-2 rounded-lg border-gray-700  px-4 p-2 h-12 flex hover:bg-blue-200">
              Valider
            </button>
          </div>
        </div>
      </div>

      <div class="bg-gray-500  h-full w-full justify-center ">

        <p class="text-2xl m-6 flex text-center font-light">> Fabrication fibre</p>
        <div class="w-9/12 justify-center bg-red-100 rounded-lg">
          <div>
            <reactive-example/>
          </div>
        </div>

      </div>


    </div>

  </div>
</template>

<script>

  import ReactiveExample from '../components/chart/ReactiveExample'


  export default {
    // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-metav
    head() {
      return {
        title: "Chart page"
      };
    },
    components: {ReactiveExample,}

  };
</script>

<style scoped>

</style>
