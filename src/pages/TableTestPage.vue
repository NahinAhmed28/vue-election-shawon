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
                  <h3 class="mb-0 text-uppercase"> তৈরী করুন</h3>
                  <hr />
                  <form class="row g-3">
                    <div class="col-12">
                      <label class="form-label"> নাম</label>
                      <input
                          type="text"
                          class="form-control"
                          id="division_name"
                          placeholder=" নাম"
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
                  <tr>
                    <td>item</td>
                    <td>item</td>
                    <td>item</td>
                    <td>item</td>
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
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import HeaderPart from "@/partials/HeaderPart";
import WrapperPart from "@/partials/WrapperPart";
import SidebarPart from "@/partials/SidebarPart";
import sideb from "@/assets/main";



export default {
  name: "TableTestPage",
  mounted() {
    // $("#example2").DataTable();
    sideb();
  },


  components: {
    HeaderPart,
    WrapperPart,
    SidebarPart,
  },

};
</script>

