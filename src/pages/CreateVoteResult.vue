<template>
  <WrapperPart>
    <template v-slot:sidebar>
      <SidebarPart />
    </template>
    <template v-slot:header>
      <HeaderPart />
    </template>
    <template v-slot:content>
      <div class="container" style="padding-top: 2rem">
        <div class="row">
          <div class="col-md-12" style="margin: 0 auto">
            <div class="card">
              <div class="card-body">
                <div class="border p-3 rounded">
                  <h3 class="mb-0 text-uppercase">ভোটের ফলাফল তৈরী করুন</h3>
                  <hr />
                  <form class="row g-3" @submit.prevent="storeCenter">
                    <div class="col-12">
                      <label class="form-label">বিভাগ</label>
                      <div class="input-group">
                        <button class="btn btn-outline-secondary" type="button"><i class='bx bx-search'></i>
                        </button>
                        <select
                            class="form-select single-select"
                            id="inputGroupSelect06"
                            v-model="form.division"
                        >
                          <option selected>বাছাই করুন</option>
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
                    <div class="col-12">
                      <label class="form-label">জেলা</label>
                      <div class="input-group">
                        <button class="btn btn-outline-secondary" type="button"><i class='bx bx-search'></i>
                        </button>
                        <select
                            class="form-select single-select"
                            id="inputGroupSelect02"
                            v-model="form.district"
                        >
                          <option selected>বাছাই করুন</option>
                          <option
                              :value="district.id"
                              v-for="district in constituencies"
                              :key="district.id"
                          >
                            {{ district.district_name }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12">
                      <label class="form-label">আসন</label>
                      <div class="input-group">
                        <button class="btn btn-outline-secondary" type="button"><i class='bx bx-search'></i>
                        </button>
                        <select
                            class="form-select single-select"
                            id="inputGroupSelect05"
                            v-model="form.constituency"
                        >
                          <option selected>বাছাই করুন</option>
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

                    <div class="col-12">
                      <label class="form-label">কেন্দ্র</label>
                      <div class="input-group">
                        <button class="btn btn-outline-secondary" type="button"><i class='bx bx-search'></i>
                        </button>
                        <select
                            class="form-select single-select"
                            id="inputGroupSelect04"
                            v-model="form.center"
                        >
                          <option selected>বাছাই করুন</option>
                          <option
                              :value="center.id"
                              v-for="center in centers"
                              :key="center.id"
                          >
                            {{center.center }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12">
                      <label class="form-label">মোট বৈধ ভোট </label>
                      <input
                          type="text"
                          class="form-control"
                          id="code"
                          placeholder="মোট ভোট"
                          v-model="form.valid_vote"
                      />
                    </div>
                    <div class="col-12">
                      <label class="form-label">মোট বাতিল ভোট</label>
                      <input
                          type="text"
                          class="form-control"
                          id="code"
                          placeholder="সেন্টারের কোড"
                          v-model="form.disqualify_vote"
                      />
                    </div>
                    <div class="col-12">
                      <label class="form-label">প্রদত্ত ভোট</label>
                      <input
                          type="text"
                          class="form-control"
                          id="code"
                          placeholder="সেন্টারের কোড"
                          v-model="form.casted_vote"
                      />
                    </div>
                    <div class="col-12">
                      <label class="form-label">শতকরা ভোট</label>
                      <input
                          type="text"
                          class="form-control"
                          id="code"
                          placeholder="সেন্টারের কোড"
                          v-model="form.vote_percentage"
                      />
                    </div>
                    <div class="col-12">
                      <div class="d-grid">
                        <button type="submit" class="btn btn-primary">
                          জমা করুন
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </WrapperPart>
</template>


<script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import HeaderPart from "@/partials/HeaderPart";
import WrapperPart from "@/partials/WrapperPart";
import SidebarPart from "@/partials/SidebarPart";
import sideb from "@/assets/main";
import axios from "axios";
// import authHeader from "../auth";

export default {
  name: "CreateVote",
  mounted() {
    // $("#example2").DataTable();
    sideb();
  },
  data() {
    return {
      centers: [],
      constituencies: [],
      form: {
        center: null,
        constituency: 0,
        code: 0,
      },
      errors: {},
    };
  },
  props: {
    msg: String,
  },
  components: {
    HeaderPart,
    WrapperPart,
    SidebarPart,
  },
  methods: {
    async respond(status, id) {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      return axios
          .patch(
              process.env.VUE_APP_BASE_URL +
              "/api/v1/pera/region-admin/center/" +
              id +
              "/",
              { status: status }
          )
          .then((response) => {
            if (response) {
              this.allConstituency();
              this.allCenters();
            }
            return true;
          })
          .catch((error) => {
            console.error(error);
          });
    },
    async allConstituency() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      await axios
          .get(
              process.env.VUE_APP_BASE_URL +
              "/api/v1/pera/region-admin/constituency/"
          )
          .then(({ data }) => (this.constituencies = data.data.results))
          .catch();
    },
    async allCenters() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      await axios
          .get(process.env.VUE_APP_BASE_URL + "/api/v1/pera/region-admin/center/")
          .then(({ data }) => (this.centers = data.data.results))
          .catch();
    },
    async storeCenter() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      return axios
          .post(
              process.env.VUE_APP_BASE_URL + "/api/v1/pera/region-admin/center/",
              this.form
          )
          .then((response) => {
            if (response) {
              this.allConstituency();
              this.allCenters();
              alert(response)
            }
            return true;
          })
          .catch((error) => {
            console.error(error);
          });
    },
  },
  created() {
    this.allConstituency();
    this.allCenters();
  },
};
</script>

