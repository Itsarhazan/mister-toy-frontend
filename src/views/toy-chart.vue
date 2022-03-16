<template>
  <div class="small" v-if="toys">
    <DoughnutChart :chart-data="dataLabels" />
      </div>
</template>

<script>
import { defineComponent } from "vue";
import { DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

  export default defineComponent({
    components: {
      DoughnutChart
    },
    data () {
      return {
        dataLabels: null,
        toys: []
      }
    },
    mounted () {
      this.fillData()
    },
    created(){
      this.toys = this.$store.getters.getToys
      console.log( this.toys );
    },
    methods: {
      fillData () {
        this.dataLabels = {
           labels: ['Baby','Battery Powered', 'Doll', 'Outdoor', 'Puzzle'],
          datasets: [
            {
              backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
              data: this.toysLabelsCount
            }
          ]
        }
      },

      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    },
    computed: {
      toysLabelsCount(){
        const toysLabels= this.toys.map(toy=>toy.labels)
        console.log('toysLabels',toysLabels);
        const labelCountMap = toysLabels.reduce((acc, labels)=>{
          labels.forEach(label=>{
            if(!acc[label])acc[label]=0
          acc[label]++
          })
          return acc
        },{})
        console.log('labelCountMap',labelCountMap);
        return Object.values(labelCountMap)
      }
    }
  })
</script>

<style>
  .small {
    max-width: 600px;
    margin:  50px auto;
  }
</style>