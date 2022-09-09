<template>
  <HeaderPart />

  <div class="page-content-wrapper">
    <!-- start page content-->
    <div class="page-content">
      <div class="container" style="padding-top: 2rem">
        <h2 style="margin-bottom: 25px">বিভাগঃ {{ results.division_name }}</h2>

        <div class="row">
          <div class="col-md-4">
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
                <div class="row">
                  <div class="col-md-8">
                    <label for="ason1">মোট ভোটার</label>
                  </div>
                  <div class="col-md-4 text-right">
                    <h6 id="ason1">
                      {{ results.total_voter }}
                    </h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    <label for="ason2">প্রদানক্রিত ভোট</label>
                  </div>
                  <div class="col-md-4 text-right">
                    <h6 id="ason2" >
                      {{ results.valid_vote }}
                    </h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    <label for="ason3" style="">আওয়ামীলীগ</label>
                  </div>
                  <div class="col-md-4 text-right">
                    <h6 id="ason3" >
                      ৭৪৫৬
                    </h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    <label for="ason4" style="">বিএনপি</label>
                  </div>
                  <div class="col-md-4 text-right">
                    <h6 id="ason4">
                      ৭৪৫৬
                    </h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    <label for="ason5" style="">জাতীয় পার্টি</label>
                  </div>
                  <div class="col-md-4 text-right">
                    <h6 id="ason5">
                      ৫৪৫৬
                    </h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    <label for="ason6">অন্যান্য</label>
                  </div>
                  <div class="col-md-4 text-right">
                    <h6 id="ason6">
                      ৬৪৫৬
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
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
                কেন্দ্রের অবস্থান
              </h5>
              <div style="padding: 20px">
                <div class="row">
                  <div class="col-md-6">
                    <label for="inputason11">সর্বমোট কেন্দ্র</label>
                  </div>
                  <div class="col-md-6 text-right">
                    <h6 id="inputason11">
                      {{ results.total_center }}
                    </h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="inputason12">আওয়ামীলীগ</label>
                  </div>
                  <div class="col-md-6 text-right">
                    <h6 id="inputason12">
                      ৭৪৬৪৫৬
                    </h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="inputason14">বিএনপি</label>
                  </div>
                  <div class="col-md-6 text-right">
                    <h6 id="inputason14">
                      ৭৪৬৪৫৬
                    </h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="inputason14">জাতীয় পার্টি</label>
                  </div>
                  <div class="col-md-6 text-right">
                    <h6 id="inputason14"> ৭৪৬৪৫৬ </h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="inputason15">অন্যান্য</label>
                  </div>
                  <div class="col-md-6 text-right">
                    <h6 id="inputason15"> ৭৪৬৪৫৬ </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <!--                <h4 style="text-align: center;font-weight: bold">আসন/<br>কেন্দ্র ভিত্তিক ম্যাপ</h4>-->
            <!--svg map-->

          </div>
        </div>

        <h3 style="padding: 2rem 0 1rem 0">কেন্দ্রের সর্বশেষ প্রকাশিত ফলাফল</h3>
        <div class="row">
          <div class="col-md-4">
            <div class="card" style="margin-top: 3px; height: 230px">
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
                <span class="glyphicon glyphicon-info-sign"></span>কেন্দ্রের
                হালনাগাদ
              </h5>
              <div style="padding: 20px; font-size: 12px">
                <div class="row">
                  <div class="col-md-8">
                    <label for="inputason21">মোট কেন্দ্র</label>
                  </div>
                  <div class="col-md-4 text-right">
                    <h6 id="inputason21">
                      {{ results.total_center }}
                    </h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    <label for="inputason22">প্রাপ্ত কেন্দ্র</label>
                  </div>
                  <div class="col-md-4 text-right">
                    <h6 id="inputason22">
                      {{ results.published_center }}
                    </h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    <label for="inputason23">অপ্রকাশিত কেন্দ্র</label>
                  </div>
                  <div class="col-md-4 text-right">
                    <h6 id="inputason23">
                      {{ results.unpublished_center }}
                    </h6>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    <label for="inputason24">স্থাপিত কেন্দ্র</label>
                  </div>
                  <div class="col-md-4 text-right">
                    <h6 id="inputason24">
                      {{ results.postponed_center }}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <!--pie chart-->
            <apexchart
                type="pie"
                width="380"
                :options="chartOptions"
                :series="series"
            ></apexchart>
          </div>
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
      series: [],
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
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        legend: {
          position: "bottom",
        },
        labels: ["প্রকাশিত কেন্দ্র", "স্থাপিত কেন্দ্র", "অপ্রকাশিত কেন্দ্র"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 350,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
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
      test: {
        new: 20,
        // code: 0,
      },
    };
  },
  name: "DivisionResultPage",
  components: {
    apexchart: VueApexCharts,
    HeaderPart,
  },

  mounted() {},
  methods: {
    async allResults() {
      // let users = JSON.parse(localStorage.getItem("users"));
      // axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      let division = this.$route.query.division;
      await axios
          .get(
              process.env.VUE_APP_BASE_URL +
              `/api/v1/pera/public/division-result/${division}/`
          )
          .then(
              ({ data }) => (
                  (this.results =  data.data),
                      (this.series = [
                         data.data.percentage_of_published_constitution,
                         data.data.percentage_of_postponed_constitution,
                         data.data.percentage_of_unpublished_constitution,
                      ])
              )
          )
          .catch();
    },
  },
  created() {
    this.allResults();
  },
};
</script>