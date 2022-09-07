<template>
  <HeaderPart />

  <div class="page-content-wrapper">
    <!-- start page content-->
    <div class="page-content">
      <div class="container" style="padding-top: 2rem">
        <h5 style="margin-bottom: 25px">
          বিভাগঃ {{ results.division }} , জেলাঃ {{ results.district }} , আসনঃ
          {{ results.constituency }} ,কেন্দ্রঃ {{ results.center }}
        </h5>
        <div class="row">
          <div class="col-md-6">
            <div class="card" style="height: 230px">
              <h5
                class="card-title"
                style="
                  background: #5f57c9;
                  color: white;
                  margin-top: 0px;
                  padding: 10px;
                  font-weight: bold;
                "
              >
                <span class="glyphicon glyphicon-info-sign"></span> আসনের
                হালনাগাদ
              </h5>
              <div style="padding: 15px">
                <div class="row1">
                  <label for="ason1">মোট ভোটার</label>
                  <h6 id="ason1" style="float: right">
                    {{ results.total_vote }}
                  </h6>
                </div>
                <div class="row2">
                  <label for="ason2">মোট বৈধ ভোট</label>
                  <h6 id="ason2" style="float: right">
                    {{ results.valid_vote }}
                  </h6>
                </div>
                <div class="row3">
                  <label for="ason3">প্রদানক্রিত ভোট</label>
                  <h6 id="ason3" style="float: right; margin-right: -62px">
                    {{ results.casted_vote }}
                  </h6>
                </div>
                <div class="row4">
                  <label for="ason4">বাতিলকৃত ভোট</label>
                  <h6 id="ason4" style="float: right; margin-right: -62px">
                    {{ results.disqualify_vote }}
                  </h6>
                </div>
                <div class="row5">
                  <label for="ason5">শতকরা হার</label>
                  <h6 id="ason5" style="float: right; margin-right: -62px">
                    {{ results.vote_percentage }} %
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card" style="height: 230px">
              <h5
                class="card-title"
                style="
                  background: #5f57c9;
                  color: white;
                  margin-top: 0px;
                  padding: 10px;
                  font-weight: bold;
                "
              >
                <span class="glyphicon glyphicon-info-sign"></span> দলভিত্তিক
                প্রার্থীর অবস্থান
              </h5>
              <div style="padding: 20px">
                <div
                  class="row1"
                  v-for="candidate in results.candidate"
                  :key="candidate.id"
                >
                  <label for="inputason11"> {{ candidate.candidate }}</label>
                  <h6 id="inputason11" style="float: right; margin-right: 5px">
                    {{ candidate.vote }}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-4"> -->
          <!--                <h4 style="text-align: center;font-weight: bold">আসন/<br>কেন্দ্র ভিত্তিক ম্যাপ</h4>-->
          <!--svg map-->
          <!-- </div> -->
        </div>
        <div style="padding-top: 5rem">
          <apexchart
            type="bar"
            height="350"
            :options="chartOptions2"
            :series="series2"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import HeaderPart from "@/partials/HeaderPart";
import axios from "axios";
export default {
  data: function () {
    return {
      // series: [],
      colors: [
        // this array contains different color code for each data
        "#33b2df",
        "#546E7A",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#90ee7e",
        "#f48024",
        "#69d2e7",
      ],
      // chartOptions: {
      //   chart: {
      //     width: 380,
      //     type: "pie",
      //   },
      //   legend: {
      //     position: "bottom",
      //   },
      //   labels: ["প্রকাশিত কেন্দ্র", "স্থাপিত কেন্দ্র", "অপ্রকাশিত কেন্দ্র"],
      //   responsive: [
      //     {
      //       breakpoint: 480,
      //       options: {
      //         chart: {
      //           width: 350,
      //         },
      //         legend: {
      //           position: "bottom",
      //         },
      //       },
      //     },
      //   ],
      // },
      series2: [
        {
          data: [2.3, 3.1, 4.0, 10.1],
        },
      ],
      chartOptions2: {
        chart: {
          height: 350,
          type: "bar",
          events: {
            // click: function(chart, w, e) {
            //   // console.log(chart, w, e)
            // }
          },
        },
        colors: this.colors,
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: true,
        },
        xaxis: {
          categories: ["আওয়ামীলীগ", "বিএনপি", "জাতীয় পার্টি", "অন্যান্য"],
          labels: {
            style: {
              colors: this.colors,
              fontSize: "12px",
            },
          },
        },
      },
      results: [],
    };
  },
  name: "CenterResult",
  components: {
    apexchart: VueApexCharts,
    HeaderPart,
  },

  mounted() {},
  methods: {
    async allResults() {
      let division = this.$route.query.division;
      let district = this.$route.query.district;
      let constituency = this.$route.query.constituency;
      let center = this.$route.query.center;
      await axios
        .get(
          process.env.VUE_APP_BASE_URL +
            `/api/v1/pera/public/center-result/?division=${division}&district=${district}&constituency=${constituency}&center=${center}`
        )
        .then(
          ({ data }) => (
            (this.results = data.data.results[0])
          //   (
             
          //     (data.results[0].candidate).forEach(function(candidatex) {
          //         console.log(number);
          //     }),
              
          //     this.series = [
          //     data.percentage_of_published_constitution,
          //     data.percentage_of_postponed_constitution,
          //     data.percentage_of_unpublished_constitution,
          //   ])
          // )
        ))
        .catch();
    },
  },
  created() {
    this.allResults();
  },
};
</script>