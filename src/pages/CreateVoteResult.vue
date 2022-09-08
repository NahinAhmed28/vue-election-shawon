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
                  <form class="row g-3" @submit.prevent="storeVote">
                    <div class="col-12">
                      <label class="form-label">বিভাগ</label>
                      <div class="input-group">
                        <button class="btn btn-outline-secondary" type="button">
                          <i class="bx bx-search"></i>
                        </button>
                        <select
                          class="form-select single-select"
                          id="division"
                          @change="clickDiv($event)"
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
                        <button class="btn btn-outline-secondary" type="button">
                          <i class="bx bx-search"></i>
                        </button>
                        <select
                          class="form-select single-select"
                          id="district"
                          @change="clickDis($event)"
                          v-model="form.district"
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
                    <div class="col-12">
                      <label class="form-label">আসন</label>
                      <div class="input-group">
                        <button class="btn btn-outline-secondary" type="button">
                          <i class="bx bx-search"></i>
                        </button>
                        <select
                          class="form-select single-select"
                          id="constituency"
                          @change="clickCons($event)"
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
                        <button class="btn btn-outline-secondary" type="button">
                          <i class="bx bx-search"></i>
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
                            {{ center.center }}
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
                    <div class="col-md-">
                      <br /><br />
                      <a class="btn btn-success" @click="addCandidate">
                        প্রার্থী যোগ করুন
                      </a>
                      <br />
                    </div>
                    <div class="col-md-12">
                      <div
                        class="previous"
                        v-for="(candidate, counter) in form.candidates"
                        v-bind:key="counter"
                      >
                        <div class="border p-3 rounded">
                          <div class="col-12">
                            <label class="form-label" for="duration"
                              >প্রার্থী</label
                            >
                            <div class="input-group">
                              <button
                                class="btn btn-outline-secondary"
                                type="button"
                              >
                                <i class="bx bx-search"></i>
                              </button>
                              <select
                                class="form-select single-select"
                                id='"dd"{{counter++}}'
                                v-model="form.candidates[counter].candidate"
                              >
                                <option selected>বাছাই করুন</option>
                                <option
                                  :value="politicalCandidate.id"
                                  v-for="politicalCandidate in politicalCandidates"
                                  :key="politicalCandidate.id"
                                >
                                  {{ politicalCandidate.candidate_name }}
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="col-12">
                            <label class="form-label">ভোট</label>
                            <input
                              type="text"
                              class="form-control"
                              id="code"
                              placeholder="ভোট"
                              v-model="form.candidates[counter].vote"
                            />
                          </div>
                          <div class="col-md-6 mt-3">
                            <a
                              class="btn btn-danger"
                              @click="deleteCandidate(counter)"
                            >
                              প্রার্থী মুছে ফেলুন
                            </a>
                          </div>
                        </div>
                      </div>
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
      votings: [],
      divisions: [],
      districts: [],
      centers: [],
      constituencies: [],
      politicalCandidates: [],
      form: {
        division: null,
        district: null,
        constituency: null,
        center: null,
        valid_vote: 0,
        disqualify_vote: 0,
        casted_vote: 0,
        vote_percentage: 0,
        candidates: [
          {
            candidate: null,
            vote: 0,
          },
        ],
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
    addCandidate() {
      this.form.candidates.push({
        candidate: null,
        vote: 0,
      });
    },
    deleteCandidate(counter) {
      this.form.candidates.splice(counter, 1);
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
        .then(({ data }) => (this.divisions = data.data))
        .catch();
    },
    async allDistricts(division) {
      await axios
        .get(
          process.env.VUE_APP_BASE_URL +
            "/api/v1/pera/public/district/?division=" +
            division
        )
        .then(({ data }) => (this.districts = data.data))
        .catch();
    },
    async allConstituency(district) {
      await axios
        .get(
          process.env.VUE_APP_BASE_URL +
            "/api/v1/pera/public/constituency/?district=" +
            district
        )
        .then(({ data }) => (this.constituencies = data.data))
        .catch();
    },
    async allCenters(constituency) {
      await axios
        .get(
          process.env.VUE_APP_BASE_URL +
            "/api/v1/pera/public/center/?constituency=" +
            constituency
        )
        .then(({ data }) => (this.centers = data.data))
        .catch();
    },
    async allVotingInfos() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      await axios
        .get(process.env.VUE_APP_BASE_URL + "/api/v1/pera/result/voting/")
        .then(({ data }) => (this.votings = data.data.results))
        .catch();
    },
    async allPoliticalCandidates() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      await axios
        // .get(process.env.VUE_APP_BASE_URL + "/api/v1/pera/public/political-candidate/")
        .get(process.env.VUE_APP_BASE_URL + "/api/v1/pera/political/candidate/")
        .then(({ data }) => (this.politicalCandidates = data.data.results))
        .catch();
    },
    async storeVote() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      return axios
        .post(
          process.env.VUE_APP_BASE_URL + "/api/v1/pera/result/voting/",
          this.form
        )
        .then((response) => {
          if (response) {
            this.$router.push({ name: "District" });
          }
          return true;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    console.log(this.allVotingInfos());
    this.allDivisions();
    this.allPoliticalCandidates();
  },
};
</script>

