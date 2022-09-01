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
                    <h3 class="mb-0 text-uppercase">কেন্দ্র তৈরী করুন</h3>
                    <hr />
                    <form class="row g-3" @submit.prevent="storeDivision">
                      <div class="col-12">
                        <label class="form-label">বিভাগের নাম</label>
                        <div class="input-group">
                          <!-- <button class="btn btn-outline-secondary" type="button"><i class='bx bx-search'></i>
                            </button> -->
                          <select
                            class="form-select single-select"
                            id="division"
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
                        <label class="form-label">আসনের নাম</label>
                        <input
                            type="text"
                            class="form-control"
                            id="constituency_name"
                            placeholder="জেলার নাম"
                            v-model="form.constituency_name"
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
          <h4>জেলার তালিকা</h4>

          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table
                  id="division_list"
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
                      <td>{{ item.constituency_name }}</td>
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
                        <div class="btn-group">
                          <button
                            class="btn btn-secondary btn-sm dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Action
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <a class="dropdown-item" href="#">Publish</a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">Unpublish</a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">Archive</a>
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
  name: "CreateCenter",
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
        division: 0,
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
    async allDistricts() {
      let user = JSON.parse(localStorage.getItem("users"));
      await axios
        .get(
          process.env.VUE_APP_BASE_URL + "/api/v1/pera/region-admin/district/",
          {
            headers: {
              token: user.token,
            },
          }
        )
        .then(({ data }) => (this.districts = data))
        .catch();
    },
    async storeDistrict() {
      //   let user = JSON.parse(localStorage.getItem("users"));

      return axios
        .post(
          process.env.VUE_APP_BASE_URL + "/api/v1/pera/region-admin/district/",
          this.form
        )
        .then(() => {
          console.log("Created!");
          //   this.$router.push({name:'CreateDivision'})
          return true;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  created() {
    let response = {
      count: 9,
      next: null,
      previous: null,
      results: [
        {
          id: 1,
          division: "ঢাকা",
          district_name: "নরসিংদী",
          status: "published",
        },
        {
          id: 2,
          division: "ঢাকা",
          district_name: "গাজীপুর",
          status: "published",
        },
        {
          id: 3,
          division: "ঢাকা",
          district_name: "শরীয়তপুর",
          status: "published",
        },
        {
          id: 4,
          division: "ঢাকা",
          district_name: "নারায়ণগঞ্জ",
          status: "published",
        },
        {
          id: 5,
          division: "ঢাকা",
          district_name: "টাঙ্গাইল",
          status: "published",
        },
        {
          id: 6,
          division: "ঢাকা",
          district_name: "কিশোরগঞ্জ",
          status: "published",
        },
        {
          id: 7,
          division: "ঢাকা",
          district_name: "মানিকগঞ্জ",
          status: "published",
        },
        {
          id: 8,
          division: "ঢাকা",
          district_name: "ঢাকা",
          status: "published",
        },
        {
          id: 9,
          division: "ঢাকা",
          district_name: "মুন্সিগঞ্জ",
          status: "published",
        },
        {
          id: 10,
          division: "ঢাকা",
          district_name: "রাজবাড়ী",
          status: "published",
        },
      ],
    };
    let divisions = [
      {
        id: 1,
        division_name: "ঢাকা",
        status: "published",
      },
      {
        id: 2,
        division_name: "চট্টগ্রাম",
        status: "published",
      },
      {
        id: 3,
        division_name: "রাজশাহী",
        status: "published",
      },
      {
        id: 4,
        division_name: "সিলেট",
        status: "unpublished",
      },
      {
        id: 5,
        division_name: "ময়মনসিংহ",
        status: "published",
      },
      {
        id: 6,
        division_name: "বরিশাল",
        status: "archived",
      },
      {
        id: 7,
        division_name: "রংপুর",
        status: "published",
      },
      {
        id: 8,
        division_name: "খুলনা",
        status: "published",
      },
      {
        id: 9,
        division_name: "মেঘনা",
        status: "published",
      },
    ];

    this.districts = response.results;
    this.divisions = divisions;
  },
};
</script>

