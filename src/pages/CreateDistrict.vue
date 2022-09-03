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
                    <h3 class="mb-0 text-uppercase">জেলা তৈরী করুন</h3>
                    <hr />
                    <form class="row g-3" @submit.prevent="storeDistrict">
                      <div class="col-12">
                        <label class="form-label">বিভাগের নাম</label>
                        <div class="input-group">
                          <button class="btn btn-outline-secondary" type="button"><i class='bx bx-search'></i>
                          </button>

                          <select
                            class="form-select single-select"
                            id="inputGroupSelect04"
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
                        <label class="form-label">জেলার নাম</label>
                        <input
                          type="text"
                          class="form-control"
                          id="district_name"
                          placeholder="জেলার নাম"
                          v-model="form.district_name"
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
        <div style="padding-top: 2rem">
          <hr />
          <h4>জেলার তালিকা</h4>

          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table
                  id="example2"
                  class="table table-striped table-bordered"
                >
                  <thead>
                    <tr>
                      <td>আইডি</td>
                      <td>জেলার নাম</td>
                      <td>বিভাগের নাম</td>
                      <td>স্টেটাস</td>
                      <td>একশন</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in districts" :key="item.id">
                      <td>{{ item.id }}</td>
                      <td>{{ item.district_name }}</td>
                      <td>{{ item.division }}</td>
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
  name: "CreateDistrict",
  mounted() {
    // $("#example2").DataTable();
    sideb();
  },
  data() {
    return {
      districts: [],
      divisions: [],
      form: {
        district_name: null,
        division: null,
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
            "/api/v1/pera/region-admin/district/" +
            id +
            "/",
          { status: status }
        )
        .then((response) => {
          if (response) {
            this.allDistricts();
            this.allDivisions();
          }
          return true;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async allDistricts() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      await axios
        .get(
          process.env.VUE_APP_BASE_URL +
            "/api/v1/pera/region-admin/district/?lim=100"
        )
        .then(({ data }) => (this.districts = data.results))
        .catch();
    },
    async allDivisions() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      await axios
        .get(
          process.env.VUE_APP_BASE_URL + "/api/v1/pera/region-admin/division/"
        )
        .then(({ data }) => (this.divisions = data.results))
        .catch();
    },
    async storeDistrict() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      return axios
        .post(
          process.env.VUE_APP_BASE_URL + "/api/v1/pera/region-admin/district/?lim=100",
          this.form
        )
        .then((response) => {
          if (response) {
            this.allDistricts();
            this.allDivisions();
          }
          return true;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  created() {
    this.allDistricts();
    this.allDivisions();
  },
};
</script>

