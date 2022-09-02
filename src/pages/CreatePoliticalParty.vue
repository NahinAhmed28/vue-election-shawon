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
                    <h3 class="mb-0 text-uppercase">রাজনৈতিক দল তৈরী করুন</h3>
                    <hr />
                    <form class="row g-3" @submit.prevent="storeParty">
                      <div class="col-12">
                        <label class="form-label">দলের নাম</label>
                        <input
                            type="text"
                            class="form-control"
                            id="party_name"
                            placeholder="দলের নাম"
                            v-model="form.party_name"
                        />
                      </div>
                      <div class="col-12">
                        <label class="form-label">দলের লোগো/ ব্যাজ</label>
                        <input
                            type="file"
                            class="form-control"
                            id="party_logo"
                            placeholder="দলের লোগো/ ব্যাজ"
                            v-on:change="form.party_logo"
                        />
                      </div>
                      <div class="col-12">
                        <label class="form-label">দলের প্রতীক</label>

                        <input
                            type="file"
                            class="form-control"
                            id="symbol"
                            placeholder="দলের প্রতীক"
                            v-on:change="form.symbol"
                        />
                      </div>
                      <div class="col-12">
                        <label class="form-label">দলের প্রতীকের নাম</label>
                        <input
                            type="text"
                            class="form-control"
                            id="symbol_name"
                            placeholder="দলের প্রতীকের নাম"
                            v-model="form.symbol_name"
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
          <h4>দলের তালিকা</h4>

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
                    <td>দলের নাম</td>
                    <td>স্টেটাস</td>
                    <td>একশন</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="item in parties" :key="item.id">
                    <td>{{ item.id }}</td>
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
  name: "CreatePoliticalParty",
  mounted() {
    // $("#example2").DataTable();
    sideb();
  },
  data() {
    return {
      parties: [],

      form: {
        party_name: null,
        party_logo: null,
        symbol: null,
        symbol_name: null,

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
              "/api/v1/pera/political/party/" +
              id +
              "/",
              { status: status }
          )
          .then((response) => {
            if (response) {
              this.allParties();
            }
            return true;
          })
          .catch((error) => {
            console.error(error);
          });
    },
    async allParties() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      await axios
          .get(
              process.env.VUE_APP_BASE_URL +
              "/api/v1/pera/political/party/"
          )
          .then(({ data }) => (this.parties = data.results))
          .catch();
    },
    async storeParty() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      return axios
          .post(
              process.env.VUE_APP_BASE_URL + "/api/v1/pera/political/party/",
              this.form
          )
          .then((response) => {
            if (response) {
              this.allParties();
            }
            return true;
          })
          .catch((error) => {
            console.error(error);
          });
    },
  },
  created() {
    this.allParties();
  },
};
</script>

