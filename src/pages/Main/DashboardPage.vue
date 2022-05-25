<template>
  <div
    class="content-page-body column justify-center col-12 col-md-8 col-sm-12 bg-blue-grey-1"
  >
    <div class="chart-content flex-center q-pb-xl q-px-xl">
      <div
        class="col-12 chart q-pt-md shadow-box shadow-2"
        ref="chart"
        :style="{ flex: '1', height: '450px' }"
      ></div>
    </div>
    <div class="number-content">
      <div class="number-content-inner row items-center justify-around wrap">
        <div
          class="single-item column items-center shadow-box shadow-2 q-py-sm q-px-xl q-mb-sm q-mr-xs rounded-borders"
        >
          <div class="icon q-mb-md">
            <q-icon name="chat" size="xl" color="red" />
          </div>
          <div class="letters column items-center">
            <div class="number row justify-center">850</div>

            <div class="letter">Messages</div>
          </div>
        </div>
        <div
          class="single-item column items-center shadow-box shadow-2 q-py-sm q-px-xl q-mb-sm rounded-borders"
        >
          <div class="icon q-mb-md">
            <q-icon name="money" size="xl" color="green" />
          </div>
          <div class="letters column items-center">
            <div class="number row justify-center">$3,123</div>

            <div class="letter">TODAY REVENUE</div>
          </div>
        </div>
        <div
          class="single-item column items-center shadow-box shadow-2 q-py-sm q-px-xl q-mb-sm rounded-borders"
        >
          <div class="icon q-mb-md">
            <q-icon name="person" size="xl" color="blue" />
          </div>
          <div class="letters column items-center">
            <div class="number row justify-center">576</div>

            <div class="letter">CUSTOMERS</div>
          </div>
        </div>
        <div
          class="single-item column items-center shadow-box shadow-2 q-py-sm q-px-xl q-mb-sm q-ml-xs rounded-borders"
        >
          <div class="icon q-mb-md">
            <q-icon name="support" size="xl" color="orange-9" />
          </div>
          <div class="letters column items-center">
            <div class="number row justify-center">253</div>

            <div class="letter">SUPPORT REQUESTS</div>
          </div>
        </div>
      </div>
    </div>
    <div class="tables q-py-md">
      <div class="table q-mb-sm">
        <q-table
          class="table-inner shadow-box shadow-2"
          :grid="$q.screen.xs"
          title="Treats"
          :rows="rows"
          :columns="columns"
          row-key="name"
          :filter="filter"
          flat
        >
          <template v-slot:top-right>
            <q-input
              borderless
              dense
              debounce="300"
              v-model="filter"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
        </q-table>
      </div>
      <div class="table">
        <q-table
          class="table-inner shadow-box shadow-2"
          :grid="$q.screen.xs"
          title="Treats"
          :rows="rows"
          :columns="columns"
          row-key="name"
          :filter="filter"
          flat
        >
          <template v-slot:top-right>
            <q-input
              borderless
              dense
              debounce="300"
              v-model="filter"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
        </q-table>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import * as echarts from "echarts";
export default defineComponent({
  name: "DashboardPage",
  setup() {
    const chart = ref(null);

    const lineChartOptions = {
      title: {},
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Rainfall", "Evaporation"],
      },
      toolbox: {},
      calculable: true,
      xAxis: [
        {
          type: "category",
          // prettier-ignore
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Rainfall",
          type: "bar",
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
          ],
          markPoint: {
            data: [
              { type: "max", name: "Max" },
              { type: "min", name: "Min" },
            ],
          },
          markLine: {
            data: [{ type: "average", name: "Avg" }],
          },
          color: ["#a62828"],
        },
        {
          name: "Evaporation",
          type: "bar",
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
          ],
          markPoint: {
            data: [
              { name: "Max", value: 182.2, xAxis: 7, yAxis: 183 },
              { name: "Min", value: 2.3, xAxis: 11, yAxis: 3 },
            ],
          },
          markLine: {
            data: [{ type: "average", name: "Avg" }],
          },
          color: ["#adadad"],
        },
      ],
    };

    onMounted(() => {
      const lineChart = echarts.init(chart.value);
      lineChart.setOption(lineChartOptions);
      window.onresize = () => {
        lineChart.resize();
      };
    });

    const columns = [
      {
        name: "desc",
        required: true,
        label: "Dessert (100g serving)",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
        style: "width: 500px",
      },
      {
        name: "calories",
        align: "center",
        label: "Calories",
        field: "calories",
        sortable: true,
      },
      { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
      { name: "carbs", label: "Carbs (g)", field: "carbs" },
    ];

    const rows = [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
      },
    ];

    return { chart, filter: ref(""), columns, rows };
  },
});
</script>

<style lang="scss" scoped>
.content-page-body {
  .chart-content {
    .chart {
      background-color: #ffffff;
      border-radius: 10px;
    }
  }
  .number-content {
    background-color: #eceff1;

    .number-content-inner {
      gap: 3rem;
      padding-right: 44px;
      padding-left: 44px;

      @media screen and (max-width: 1470px) {
        justify-content: space-between;
        padding-right: 48px;
        padding-left: 48px;
      }

      @media screen and (max-width: 1073px) {
        justify-content: space-around;
      }

      .single-item {
        background: #fff;
        width: 350px;
        height: 150px;
        .number {
          font-size: 26px;
          font-weight: bold;
        }
        .letter {
          font-size: 18px;
          color: rgba($color: #333, $alpha: 0.5);
        }
      }
    }
  }

  .tables {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 6px;
    padding-right: 22px;
    padding-left: 22px;

    @media screen and (max-width: 1763px) {
      padding-right: 48px;
      padding-left: 48px;
    }

    .table {
      @media screen and (max-width: 1763px) {
        width: 100%;
      }
      .table-inner {
        @media screen and (max-width: 1870px) {
          width: 740px;
        }
        @media screen and (max-width: 1763px) {
          width: 100%;
        }
      }
    }
  }
}
</style>
