<template>
  <div class=" min-h-screen bg-orange-400 flex-wrap text-copy-primary flex flex-wrap ">
    <div class="chart w-full flex justify-center">
      <div class="bg-red-500 rounded-lg  w-3/12 flex  justify-center ">
        <div class="align-middle">
          <div class="bg-black mt-20 border h border-black bg-white p-2 rounded-lg ">
            <select v-model="selected" class="bg-white border-gray-600 border-b">
              <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>
          </div>
          <div class="justify-end flex my-4">
            <button class="border-2 rounded-lg border-gray-700  px-4 p-2 h-12 flex hover:bg-blue-200"
                    v-on:click="DataAction">
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

<!--       consol debug ici-->
        <div class="m-16 rounded-lg bg-black  h-auto w-auto  text-green-500 font-hairline text-xl p-2 ">
          <div class="m-2 ">
          <span>Selected: {{ selected }}</span>
          </div>
          <div class="m-2">
          <span>Selected: {{ options }}</span>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

  import ReactiveExample from '../components/chart/ReactiveExample'


  export default {
    head() {
      return {
        title: "Chart page"
      };
    },
    components: {ReactiveExample,},
    data() {
      return {
        selected: 'A',
        options: [
          {text: 'Production global annuelle', value: 'A', data:'test'},
          {text: 'Répartition produit', value: 'B', data:'test'},
          {text: 'Changes horaire par produit', value: 'C',data:'test'}
        ],
      };
    },
    methods: {
      DataAction: function (event) {
        // alert('a' + this.selected + '!')

        if (this.selected === 'A') {
          alert('a' + this.selected + '!')
        }
        if (this.selected === 'B') {
          alert('b' + this.selected + '!')
        }
        if (this.selected === 'C') {
          alert('c' + this.selected + '!')
        }
        }


    },
    // computed: {
    //   DataAction () {
    //     lol = 13;
    //     console.log(lol);
    //     return lol;
    //   },
    // },
  };
</script>

<style scoped>

</style>


<!--<template>-->
<!--  <div class=" min-h-screen bg-orange-400 flex-wrap text-copy-primary flex flex-wrap ">-->

<!--    <div class="chart w-full flex justify-center">-->
<!--      <div class="bg-red-500 rounded-lg  w-3/12 flex  justify-center ">-->
<!--        <div class="align-middle">-->

<!--          <div class="bg-black mt-20 border h border-black bg-white p-2 rounded-lg ">-->
<!--            <select v-model="selected" class="bg-white border-gray-600 border-b">-->
<!--              &lt;!&ndash;              <option disabled value="">Please select one</option>&ndash;&gt;-->
<!--              <option>Production global annuelle</option>-->
<!--              <option>Répartition produit</option>-->
<!--              <option>Changes horaire par produit</option>-->
<!--            </select>-->

<!--          </div>-->
<!--          <span>Selected: {{ selected }}</span>-->
<!--          <div class="justify-end flex ">-->

<!--            <button class="border-2 rounded-lg border-gray-700  px-4 p-2 h-12 flex hover:bg-blue-200">-->
<!--              Valider-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="bg-gray-500  h-full w-full justify-center ">-->

<!--        <p class="text-2xl m-6 flex text-center font-light">> Fabrication fibre</p>-->
<!--        <div class="w-9/12 justify-center bg-red-100 rounded-lg">-->
<!--          <div>-->
<!--            <reactive-example/>-->
<!--          </div>-->
<!--        </div>-->

<!--      </div>-->

<!--    </div>-->

<!--  </div>-->
<!--</template>-->

<!--<script>-->

<!--  import ReactiveExample from '../components/chart/ReactiveExample'-->


<!--  export default {-->
<!--    head() {-->
<!--      return {-->
<!--        title: "Chart page"-->
<!--      };-->
<!--    },-->
<!--    components: {ReactiveExample,}-->

<!--  };-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
