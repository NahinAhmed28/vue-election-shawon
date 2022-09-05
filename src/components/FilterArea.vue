<template>
  <div class="col-md-4">
    <div class="card">
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
        <form class="form-inline" action="result_detail.html">
          <input
            class="form-control ml-auto mr-auto"
            id="search"
            type="search"
            placeholder="কেন্দ্রের নাম"
            aria-label="Search"
          />
        </form>
      </h5>

      <div class="card-body">
        <form action="result_detail.html">
          <div class="form-group row">
            <label for="input41" class="col-sm-3 col-form-label">বিভাগ</label>
            <div class="col-sm-9">
              <select
                class="form-control form-control"
                id="division"
                @change="clickDiv($event)"
              >
                <option value="0">বাছাই করুন</option>
                <option
                  :value="division.id"
                  v-for="division in divisions"
                  :key="division.id"
                >
                  {{ division.division_name }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="input42" class="col-sm-3 col-form-label">জেলা</label>
            <div class="col-sm-9">
              <select
                class="form-control form-control"
                id="district"
                @change="clickDis($event)"
              >
                <option value="0">বাছাই করুন</option>
                <option
                  :value="district.id"
                  v-for="district in districts"
                  :key="district.id"
                >
                  {{ district.district_name }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="input43" class="col-sm-3 col-form-label">আসন</label>
            <div class="col-sm-9">
              <select
                class="form-control form-control"
                id="constituency"
                @change="clickCons($event)"
              >
                <option value="0">বাছাই করুন</option>
                <option
                  :value="constituency.id"
                  v-for="constituency in constituencies"
                  :key="constituency.id"
                >
                  {{ constituency.seat }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="input44" class="col-sm-3 col-form-label"
              >ভোট কেন্দ্র</label
            >
            <div class="col-sm-9">
              <select class="form-control form-control" id="center">
                <option value="0">বাছাই করুন</option>
                <option
                  :value="center.id"
                  v-for="center in centers"
                  :key="center.id"
                >
                  {{ center.center }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group row" style="margin-top: -1rem">
            <label for="input44" class="col-sm-3 col-form-label"></label>
            <div class="col-sm-9">
              <button
                class="btn btn-block mb-3 mt-4"
                style="background-color: #5f7fee; color: white"
                type="button"
                @click="result"
              >
                ফলাফল দেখুন
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="card" style="margin-top: 1rem">
      <h5
        class="card-title"
        style="
          background: mediumpurple;
          color: white;
          margin-top: 0px;
          padding: 10px;
          font-weight: bold;
        "
      >
        <span class="glyphicon glyphicon-info-sign"></span>সর্বশেষ প্রকাশিত
        ফলাফল
      </h5>
      <div class="card-body">
        <ul
          class="nav nav-pills nav-stacked"
          style="height: 150px; overflow-y: scroll"
        >
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="result_detail.html"
              >ঢাকা আসন নাম্বার ১ এর ৮৩ নং কেন্দ্রের ফলাফল</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="card-body">
      <apexchart
        type="pie"
        :options="chartOptionsS1"
        :colors="colors"
        :series="series"
      ></apexchart>

      <apexchart
        type="pie"
        :options="chartOptionsS2"
        :colors="colors2"
        :series="series2"
      ></apexchart>
    </div>
  </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";
export default {
  data: function () {
    return {
      series: [2.3, 3.1, 4.0, 10.1],
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
      chartOptionsS1: {
        chart: {
          width: 280,
          type: "pie",
        },
        legend: {
          position: "bottom",
        },
        labels: ["আওয়ামীলীগ", "বিএনপি", "জাতীয় পার্টি", "অন্যান্য"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 280,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      series2: [20, 40, 40],
      colors2: ["#F44336", "#E91E63", "#9C27B0", "#69d2e7"],
      chartOptionsS2: {
        chart: {
          width: 280,
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
                width: 280,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      divisions: [],
      districts: [],
      centers: [],
      constituencies: [],
      errors: {},
    };
  },
  name: "FilterArea",
  props: {
    msg: String,
  },
  components: {
    apexchart: VueApexCharts,
  },
  methods: {
    result() {
      let division = document.getElementById("division").value;
      let district = document.getElementById("district").value;
      let constituency = document.getElementById("constituency").value;
      let center = document.getElementById("center").value;
      this.$router.push(`/center-result/?division=${division}&district=${district}&constituency=${constituency}&center=${center}`)
    },
    clickDiv(event) {
      this.constituencies = [];
      this.centers = [];
      let division = event.target.value;
      this.allDistricts(division);
    },
    clickDis(event) {
      this.centers = [];
      let district = event.target.value;
      this.allConstituency(district);
    },
    clickCons(event) {
      let constituency = event.target.value;
      this.allCenters(constituency);
    },
    async allDivisions() {
      await axios
        .get(process.env.VUE_APP_BASE_URL + "/api/v1/pera/public/division/")
        .then(({ data }) => (this.divisions = data))
        .catch();
    },
    async allDistricts(division) {
      await axios
        .get(
          process.env.VUE_APP_BASE_URL +
            "/api/v1/pera/public/district/?division=" +
            division
        )
        .then(({ data }) => (this.districts = data))
        .catch();
    },
    async allConstituency(district) {
      await axios
        .get(
          process.env.VUE_APP_BASE_URL +
            "/api/v1/pera/public/constituency/?district=" +
            district
        )
        .then(({ data }) => (this.constituencies = data))
        .catch();
    },
    async allCenters(constituency) {
      await axios
        .get(
          process.env.VUE_APP_BASE_URL +
            "/api/v1/pera/public/center/?constituency=" +
            constituency
        )
        .then(({ data }) => (this.centers = data))
        .catch();
    },
  },
  created() {
    this.allDivisions();
  },
};
</script>