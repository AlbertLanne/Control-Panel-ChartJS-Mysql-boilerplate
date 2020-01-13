<template>
  <div class=" min-h-screen bg-orange-400 flex-wrap text-copy-primary flex flex-wrap ">
    <div class="chart w-full flex justify-center">
      <div class="bg-red-500 rounded-lg  w-3/12 flex  justify-center ">
        <div class="align-middle">
          <div class="bg-black mt-20 border h border-black bg-white p-2 rounded-lg ">

            <select v-model="selected" class="bg-white border-gray-600 border-b">
              <option v-for="val in val" v-bind:value="val.value">
                {{ val.text }}
              </option>
            </select>
          </div>
          <div class="justify-end flex my-4">
            <button class="border rounded-lg border-gray-700  px-4 p-2 h-12 flex hover:bg-blue-200"
                    v-on:click="DataAction">
              Valider
            </button>
          </div>
        </div>

      </div>

      <div class="bg-gray-500  h-full w-full justify-center mx-auto items-center">

        <p class="text-2xl ml-8 m-6 w-1/3 text-center font-light "> > Fabrication fibre</p>
        <div class="w-9/12 justify-center bg-red-100 rounded-lg mx-auto">

          <div>
            <reactive-example/>
          </div>
        </div>

        <!--       consol debug ici-->
        <div class="m-16  h-auto w-8/12  text-green-500 font-hairline text-xl p-2  mx-auto ">
          <div class="w-full p-2 bg-blue-800">
            <p class="text-xl font-medium text-white">Debugging consol</p>
          </div>

          <div class=" w-full p-2 bg-black ">
            <div class="m-2 ">
              <span>Selected: {{ selected }}</span>
            </div>
            <div class="m-2">
              <span>Selected: {{ val }}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import ReactiveExample from '../components/chart/ReactiveExample'
  import {Bar} from "../components/chart/BaseCharts";

  export default {
    extends: Bar,
    head() {
      return {
        title: "Chart page"
      };
    },
    components: {ReactiveExample,},
    data: () => ({
      chartData: '',
      selected: 'A',
      val: [
        {text: 'Production global annuelle', value: 'A', data: '10'},
        {text: 'Répartition produit', value: 'B', data: '20'},
        {text: 'Changes horaire par produit', value: 'C', data: '30'}
      ],
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }),

    // created() {
    //   this.fillData()
    // },
    mounted() {
      // this.renderChart(this.chartData, this.options)
      // setInterval(() => {
      //   this.fillData()
      // }, 5000)
    },
    methods: {
      DataAction: function (event) {
        // alert('a' + this.selected + '!')
        if (this.selected === 'A') {
        }
        if (this.selected === 'B') {
        }
        if (this.selected === 'C') {
        }
      },
      // fillData() {
      //   this.chartData = {
      //     labels: ['January' + this.getRandomInt(), 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      //     datasets: [
      //       {
      //         label: 'Data One',
      //         backgroundColor: '#f87979',
      //         data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
      //       }
      //     ]
      //   }
      // },
      // getRandomInt() {
      //   return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      // }
    },

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
