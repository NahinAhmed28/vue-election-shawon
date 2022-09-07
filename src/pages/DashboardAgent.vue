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
                    <h3 class="mb-0 text-uppercase">ফলাফল জমা দিন</h3>
                    <hr />
                    <form class="row g-3">
                      <div class="col-12">
                        <label class="form-label">আসন</label>
                        <div class="input-group">
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                          >
                            <i class="bx bx-search"></i>
                          </button>
                          <select
                            class="form-select single-select"
                            id="inputGroupSelect03"
                            aria-label="Example select with button addon"
                          >
                            <option selected>বাছাই করুন</option>
                            <option value="1">১</option>
                            <option value="2">২</option>
                            <option value="3">৩</option>
                            <option value="3">৪</option>
                            <option value="3">৫</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-12">
                        <label class="form-label">কেন্দ্র</label>
                        <div class="input-group">
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                          >
                            <i class="bx bx-search"></i>
                          </button>
                          <select
                            class="form-select single-select"
                            id="inputGroupSelect04"
                            aria-label="Example select with button addon"
                          >
                            <option selected>বাছাই করুন</option>
                            <option value="1">১</option>
                            <option value="2">২</option>
                            <option value="3">৩</option>
                            <option value="3">৪</option>
                            <option value="3">৫</option>
                          </select>
                        </div>
                      </div>
                      <hr />
                      <div class="col-12">
                        <label class="form-label">মোট বৈধ</label>
                        <input type="text" class="form-control" />
                      </div>
                      <div class="col-12">
                        <label class="form-label">মোট বাতিল</label>
                        <input type="text" class="form-control" />
                      </div>
                      <div class="col-12">
                        <label class="form-label">প্রদত্ত ভোট</label>
                        <input type="text" class="form-control" />
                      </div>
                      <div class="col-12">
                        <label class="form-label">শতকরা হার</label>
                        <input type="text" class="form-control" />
                      </div>
                      <div class="col-12">
                        <div>
                          <!-- Default checked radio -->
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              class="form-check-label"
                              for="flexRadioDefault1"
                              >অফিসিয়াল ফলাফল</label
                            >
                          </div>
                        </div>

                        <div>
                          <!-- Default checked radio -->
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                              checked
                            />
                            <label
                              class="form-check-label"
                              for="flexRadioDefault2"
                              >বেসরকারি ফলাফল</label
                            >
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="row">
                          <div class="col-md-2 pt-2">রাজনৈতিক দল</div>
                          <div class="col-md-10">
                            <div class="form-group row">
                              <div class="col-12">
                                <label
                                  for="inputx10"
                                  class="col-sm-3 col-form-label"
                                  >দলের নাম</label
                                >
                                <div class="col-sm-12">
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="inputx10"
                                    aria-describedby="emailHelp"
                                    placeholder=""
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="form-group row">
                              <div class="col-12">
                                <label
                                  for="inputx11"
                                  class="col-sm-3 col-form-label"
                                  >প্রার্থীর নাম</label
                                >
                                <div class="col-sm-12">
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="inputx11"
                                    aria-describedby="emailHelp"
                                    placeholder=""
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="form-group row">
                              <div class="col-12">
                                <label class="col-sm-3 col-form-label"
                                  >প্রার্থীর ছবি</label
                                >
                                <div class="col-sm-12">
                                  <img
                                    src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"
                                    alt="..."
                                    style="width: 200px; height: 200px"
                                    class="img-thumbnail"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="form-group row">
                              <div class="col-12">
                                <label
                                  for="inputx13"
                                  class="col-sm-3 col-form-label"
                                  >ভোট</label
                                >
                                <div class="col-sm-12">
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="inputx13"
                                    aria-describedby="emailHelp"
                                    placeholder=""
                                  />
                                </div>
                              </div>
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
        <div style="padding-top: 2rem">
          <hr />
          <h4>পঞ্চগড় ১ আসনের ৮৪ নং কেন্দ্রের ফলাফল</h4>

          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table id="example2" class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <td>কেন্দ্র</td>
                      <td>শেখ মোঃ হাবিবুর রহমান<br />নৌকা</td>
                      <td>আল রাশেদ<br />ধানের শিষ</td>
                      <td>মোঃ সুমন রানা<br />লাঙ্গল</td>
                      <td>ব্যারিস্টার নওশাদ<br />নৌকা</td>
                      <td>মোঃ আব্দুল্লাহ<br />ধানের শিষ</td>
                      <td>মোঃ মাজহারুল<br />লাঙ্গল</td>
                      <td>মোঃ আবু সালেক<br />ধানের শিষ</td>
                      <td>মোট ভোটার</td>
                      <td>মোট বৈধ</td>
                      <td>মোট বাতিল</td>
                      <td>প্রদত্ত ভোট</td>
                      <td>শতকরা হার</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
                    </tr>
                    <tr>
                      <td>সরকারি প্রাথমিক বিদ্যালয়</td>
                      <td>১৯৫৭</td>
                      <td>৬৯৩</td>
                      <td>০২</td>
                      <td>১৮১</td>
                      <td>০৫</td>
                      <td>২৫০</td>
                      <td>০৪</td>
                      <td>৩১৮০</td>
                      <td>২৮৪৭</td>
                      <td>২২</td>
                      <td>২৮৬৯</td>
                      <td>৯০.২২%</td>
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
  name: "DashboardAgent",
  mounted() {
    // $("#example2").DataTable();
    sideb()
  },
  data() {
    return {
      centers: [],
      constituencies: [],
      form: {
        center: null,
        constituency: 0,
        // code: 0,
      },
      errors: {},
    };
  },
  props: {
    msg: String
  },
  components: {
    HeaderPart,
    WrapperPart,
    SidebarPart,
  },
   methods: {
    async allConstituency() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      await axios
        .get(
          process.env.VUE_APP_BASE_URL +
            "/api/v1/pera/agent/constituency/"
        )
        .then(({ data }) => (this.constituencies = data.results))
        .catch();
    }, 
    async allCenters() {
      let users = JSON.parse(localStorage.getItem("users"));
      axios.defaults.headers.common["Authorization"] = "JWT " + users.token;
      await axios
        .get(process.env.VUE_APP_BASE_URL + "/api/v1/pera/agent/center/")
        .then(({ data }) => (this.centers = data.results))
        .catch();
    },
   },
  created() {
    this.allConstituency();
    this.allCenters();
  },
}
</script>

