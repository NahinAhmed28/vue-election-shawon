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
                    <h3 class="mb-0 text-uppercase">আসন তৈরী করুন</h3>
                    <hr />
                    <form class="row g-3" @submit.prevent="storeConstituency">
                      <div class="col-12">
                        <label class="form-label">জেলার নাম</label>
                        <div class="input-group">
                          <button class="btn btn-outline-secondary" type="button"><i class='bx bx-search'></i>
                          </button>
                          <select
                            class="form-select single-select"
                            id="inputGroupSelect04"
                            v-model="form.district"
                          >
                            <option selected>বাছাই করুন</option>
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
                        <label class="form-label">আসনের নাম</label>
                        <input
                          type="text"
                          class="form-control"
                          id="seat"
                          placeholder="আসনের নাম"
                          v-model="form.seat"
                        />
                      </div>
                      <div class="col-12">
                        <label class="form-label">আসন নং</label>
                        <input
                          type="number"
                          class="form-control"
                          id="seat_no"
                          placeholder="আসন নং"
                          v-model="form.seat_no"
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
                      <td>আসনের নাম</td>
                      <td>আসন নং</td>
                      <td>স্ট্যাটাস</td>
                      <td>একশন</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in constituencies" :key="item.id">
                      <td>{{ item.id }}</td>
                      <td>{{ item.district }}</td>
                      <td>{{ item.seat }}</td>
                      <td>{{ item.seat_no }}</td>
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

export default {
  name: "CreateConstituency",
  mounted() {
    // $("#example2").DataTable();
    sideb();
  },
  data() {
    return {
      districts: [],
      constituencies: [],
      errors:{ },
      form: {
        district: 0,
        seat: null,
        seat_no: 0,
      },
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
            "/api/v1/pera/region-admin/constituency/" +
            id +
            "/",
          { status: status }
        )
        .then((response) => {
          if (response) {
            this.allDistricts();
            this.allConstituency();
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
          process.env.VUE_APP_BASE_URL + "/api/v1/pera/region-admin/district/"
        )
        .then(({ data }) => (this.districts = data.results))
        .catch();
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
    async storeConstituency() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      return axios
        .post(
          process.env.VUE_APP_BASE_URL +
            "/api/v1/pera/region-admin/constituency/",
          this.form
        )
        .then((response) => {
          if (response) {
            this.allDistricts();
            this.allConstituency();
          }
          return true;
        })
        .catch((error) => {
          alert(error.response.data.seat_no[0])
        });
    },
  },

  created() {
    this.allDistricts();
    this.allConstituency();
  },
};
</script>

