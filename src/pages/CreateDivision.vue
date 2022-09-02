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
                    <h3 class="mb-0 text-uppercase">বিভাগ তৈরী করুন</h3>
                    <hr />
                    <form class="row g-3" @submit.prevent="storeDivision">
                      <div class="col-12">
                        <label class="form-label">বিভাগের নাম</label>
                        <input
                          type="text"
                          class="form-control"
                          id="division_name"
                          placeholder="বিভাগের নাম"
                          v-model="form.division_name"
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
          <h4>বিভাগের তালিকা</h4>

          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table
                  id="example2"
                  class="table table-striped table-bordered"
                >
                  <thead>
                    <tr>
                      <td>আইডি নং</td>
                      <td>বিভাগের নাম</td>
                      <td>স্টেটাস</td>
                      <td>একশন</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in divisions" :key="item.id">
                      <td>{{ item.id }}</td>
                      <td>{{ item.division_name }}</td>
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
  name: "CreateDivision",
  mounted() {
    // $("#example2").DataTable();
    sideb();
  },
  data() {
    return {
      divisions: [],
      form: {
        division_name: null,
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
            "/api/v1/pera/region-admin/division/" +
            id +
            "/",
          { status: status }
        )
        .then((response) => {
          if (response) {
            this.allDivisions();
          }
          return true;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async allDivisions() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      await axios
        .get(
          process.env.VUE_APP_BASE_URL +
            "/api/v1/pera/region-admin/division/?lim=100"
        )
        .then(({ data }) => (this.divisions = data.results))
        .catch();
    },
    async storeDivision() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      return axios
        .post(
          process.env.VUE_APP_BASE_URL + "/api/v1/pera/region-admin/division/",
          this.form
        )
        .then((response) => {
          if (response) {
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
    this.allDivisions();
  },
};
</script>

