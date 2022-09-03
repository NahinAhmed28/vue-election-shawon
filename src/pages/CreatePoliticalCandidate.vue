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
            <div style="border: 0.5px solid lightgrey">
              <div class="card">
                <div class="card-body">
                  <div class="border p-3 rounded">
                    <h3 class="mb-0 text-uppercase">প্রার্থী তৈরী করুন</h3>
                    <hr />
                    <form class="row g-3" @submit.prevent="storeCandidate">
                      <div class="col-12">
                        <label class="form-label">রাজনৈতিক দলের নাম</label>
                        <div class="input-group">
                          <button class="btn btn-outline-secondary" type="button"><i class='bx bx-search'></i>
                          </button>

                          <select
                              class="form-select single-select"
                              id="inputGroupSelect04"
                              v-model="form.party_name"
                          >
                            <option selected>বাছাই করুন</option>
                            <option
                                :value="party.id"
                                v-for="party in parties"
                                :key="party.id"
                            >
                              {{ party.party_name }}
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
                              id="inputGroupSelect04"
                              v-model="form.constituency"
                          >
                            <option selected>বাছাই করুন</option>
                            <option
                                :value="constituency.id"
                                v-for="constituency in constituencies"
                                :key="constituency.id"
                            >
                              {{ constituency.seat }} 
                              <!-- (আ.নংঃ {{ constituency.seat_no }}) -->
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12">
                        <label class="form-label">প্রার্থীর নাম</label>
                        <input
                            type="text"
                            class="form-control"
                            id="division_name"
                            placeholder="প্রার্থীর নাম"
                            v-model="form.candidate_name"
                        />
                      </div>
                       <div class="col-12">
                      <label class="form-label">প্রার্থীর ছবি</label>

                      <input
                        type="file"
                        class="form-control"
                        @change="onFileSelected2" 
                        id="candidate_image"
                        placeholder="প্রার্থীর ছবি"
                        v-on:change="form.candidate_image"
                      />
                    </div>
                      <div class="col-12">
                        <label class="form-label">ভোট</label>
                        <input
                            type="number"
                            class="form-control"
                            id="vote"
                            placeholder="ভোট"
                            v-model="form.vote"
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
        <div style="padding-top: 2rem">
          <hr />
          <h4>দলের তালিকা</h4>

          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table
                    id="division_list"
                    class="table table-striped table-bordered"
                >
                  <thead>
                  <tr>
                    <td>আইডি নং</td>
                    <td>প্রার্থীর ছবি</td>
                    <td>প্রার্থীর নাম</td>
                    <td>ভোট</td>
                    <td>রাজনৈতিক দলের নাম</td>
                    <td>স্টেটাস</td>
                    <td>একশন</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="item in divisions" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td><img :src="item.candidate_image" id="symbol-photo" /></td>
                    <td>{{ item.candidate_image }}</td>
                    <td>{{ item.candidate_name }}</td>
                    <td>{{ item.vote }}</td>
                    <td>{{ item.party_name }}</td>
                    <td>
                      <button
                          v-if="item.status == 'published'"
                          type="button"
                          class="btn btn-success btn-sm"
                      >
                        Published
                      </button>
                      <button
                          v-if="item.status == 'unpublished'"
                          type="button"
                          class="btn btn-danger btn-sm"
                      >
                        Unpublished
                      </button>
                      <button
                          v-if="item.status == 'archived'"
                          type="button"
                          class="btn btn-secondary btn-sm"
                      >
                        Archived
                      </button>
                    </td>
                    <td>
                      <div class="btn-group dropstart">
                        <button
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                          Action
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a
                                class="dropdown-item"
                                @click="respond('published', item.id)"
                            >Publish</a
                            >
                          </li>
                          <li>
                            <a
                                class="dropdown-item"
                                @click="respond('unpublished', item.id)"
                            >Unpublish</a
                            >
                          </li>
                          <li>
                            <a
                                class="dropdown-item"
                                @click="respond('archived', item.id)"
                            >Archive</a
                            >
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </WrapperPart>
</template>


<script>
// import $ from "jquery";
// import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
import HeaderPart from "@/partials/HeaderPart";
import WrapperPart from "@/partials/WrapperPart";
import SidebarPart from "@/partials/SidebarPart";
import sideb from "@/assets/main";
import axios from "axios";

// import authHeader from "../auth";

export default {
  name: "CreatePoliticalCandidate",
  mounted() {
    // $("#example2").DataTable();
    sideb();
  },
  data() {
    return {
      candidates: [],
      parties: [],
      constituencies: [],
      form: {
        party_name: null,
        candidate_name: null,
        candidate_image: null,
        vote: null,
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
              "/api/v1/pera/political/candidate/" +
              id +
              "/",
              { status: status }
          )
          .then((response) => {
            if (response) {
              this.allCandidates();
            }
            return true;
          })
          .catch((error) => {
            console.error(error);
          });
    },
    async allCandidates() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      await axios
          .get(
              process.env.VUE_APP_BASE_URL +
              "/api/v1/pera/political/candidate/"
          )
          .then(({ data }) => (this.candidates = data.results))
          .catch();
    },
    async storeCandidate() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      return axios
          .post(
              process.env.VUE_APP_BASE_URL + "/api/v1/pera/political/candidate/",
              this.form
          )
          .then((response) => {
            if (response) {
              this.allCandidates();
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
        .then(({ data }) => (this.constituencies = data.results))
        .catch();
    },
    async allParties() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      await axios
        .get(process.env.VUE_APP_BASE_URL + "/api/v1/pera/political/party/")
        .then(({ data }) => (this.parties = data.results))
        .catch();
    },
  },
  created() {
    this.allCandidates();
    this.allConstituency();
    this.allParties();
    
  },
};
</script>

<style>
#symbol-photo {
  height: 60px;
  width: 60px;
}
</style>