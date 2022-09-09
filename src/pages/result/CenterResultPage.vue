<template>


  <HeaderPart/>

  <div class="container" style="padding-top: 5rem">
    <h5 style="margin-bottom: 25px">
      বিভাগঃ {{ results.division }} , জেলাঃ {{ results.district }} , আসনঃ
      {{ results.constituency }} ,কেন্দ্রঃ {{ results.center }} এর ফলাফলঃ
    </h5>
    <div class="card">
      <div class="card-body">
        <div class="table-responsive">
          <table id="example2" class="table table-striped table-bordered">
            <thead>
            <tr>
              <td>কেন্দ্র</td>
              <!--              <td>শেখ মোঃ হাবিবুর রহমান<br />নৌকা</td>-->
              <!--              <td>আল রাশেদ<br />ধানের শিষ</td>-->
              <!--              <td>মোঃ সুমন রানা<br />লাঙ্গল</td>-->
              <!--              <td>ব্যারিস্টার নওশাদ<br />নৌকা</td>-->
              <!--              <td>মোঃ আব্দুল্লাহ<br />ধানের শিষ</td>-->
              <!--              <td>মোঃ মাজহারুল<br />লাঙ্গল</td>-->
              <!--              <td>মোঃ আবু সালেক<br />ধানের শিষ</td>-->
              <!--              <td>মোট ভোটার</td>-->
              <td>মোট বৈধ</td>
              <td>মোট বাতিল</td>
              <td>প্রদত্ত ভোট</td>
              <td>শতকরা হার</td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{{ results.center }}</td>
              <!--              <td>১৯৫৭</td>-->
              <!--              <td>৬৯৩</td>-->
              <!--              <td>০২</td>-->
              <!--              <td>১৮১</td>-->
              <!--              <td>০৫</td>-->
              <!--              <td>২৫০</td>-->
              <!--              <td>০৪</td>-->
              <!--              <td>৩১৮০</td>-->
              <td> {{ results.valid_vote }}</td>
              <td> {{ results.disqualify_vote }}</td>
              <td>{{ results.casted_vote }}</td>
              <td> {{ results.vote_percentage }}%</td>
            </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>



</template>


<script>
// import VueApexCharts from "vue3-apexcharts";
import HeaderPart from "@/partials/HeaderPart";
import axios from "axios";
export default {
  data: function () {
    return {
      // series: [],
      // colors: [
      //   // this array contains different color code for each data
      //   "#33b2df",
      //   "#546E7A",
      //   "#d4526e",
      //   "#13d8aa",
      //   "#A5978B",
      //   "#2b908f",
      //   "#f9a3a4",
      //   "#90ee7e",
      //   "#f48024",
      //   "#69d2e7",
      // ],
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
      // series2: [
      //   {
      //     data: [2.3, 3.1, 4.0, 10.1],
      //   },
      // ],
      // chartOptions2: {
      //   chart: {
      //     height: 350,
      //     type: "bar",
      //     events: {
      //       // click: function(chart, w, e) {
      //       //   // console.log(chart, w, e)
      //       // }
      //     },
      //   },
      //   colors: this.colors,
      //   plotOptions: {
      //     bar: {
      //       columnWidth: "45%",
      //       distributed: true,
      //     },
      //   },
      //   dataLabels: {
      //     enabled: false,
      //   },
      //   legend: {
      //     show: true,
      //   },
      //   xaxis: {
      //     categories: ["আওয়ামীলীগ", "বিএনপি", "জাতীয় পার্টি", "অন্যান্য"],
      //     labels: {
      //       style: {
      //         colors: this.colors,
      //         fontSize: "12px",
      //       },
      //     },
      //   },
      // },
      results: [],
    };
  },
  name: "CenterResult",
  components: {
    // apexchart: VueApexCharts,
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