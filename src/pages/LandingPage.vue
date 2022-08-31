<template>
  <WrapperPart>
    <template v-slot:sidebar>
      <SidebarPart/>
    </template>
    <template v-slot:header>
      <HeaderPart/>
    </template>
    <template v-slot:content>
      <!--start breadcrumb-->
      <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">Dashboard</div>
        <div class="ps-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0 p-0 align-items-center">
              <li class="breadcrumb-item"><a href="javascript:;">
                <ion-icon name="home-outline"></ion-icon>
              </a>
              </li>
            </ol>
          </nav>
        </div>
<!--        <div class="ms-auto">-->
<!--          <div class="btn-group">-->
<!--            <button type="button" class="btn btn-outline-primary">Settings</button>-->
<!--            <button type="button" class="btn btn-outline-primary split-bg-primary dropdown-toggle dropdown-toggle-split"-->
<!--                    data-bs-toggle="dropdown"><span class="visually-hidden">Toggle Dropdown</span>-->
<!--            </button>-->
<!--            <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end"><a class="dropdown-item"-->
<!--                                                                                   href="javascript:;">Action</a>-->
<!--              <a class="dropdown-item" href="javascript:;">Another action</a>-->
<!--              <a class="dropdown-item" href="javascript:;">Something else here</a>-->
<!--              <div class="dropdown-divider"></div>-->
<!--              <a class="dropdown-item" href="javascript:;">Separated link</a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
      <!--end breadcrumb-->
      <div>

        <section>
          <div class="map" style="padding-top: 2rem">
            <div class="row">
              <div class="col-md-8 mapView">
                <div class="container-index-maps ">
                  <DivisionMap></DivisionMap>
                </div>
              </div>
              <FilterArea></FilterArea>
            </div>
          </div>
        </section>
      </div>
    </template>
  </WrapperPart>
</template>
<script>
import WrapperPart from "@/partials/WrapperPart";
import SidebarPart from "@/partials/SidebarPart";
import HeaderPart from "@/partials/HeaderPart";
import DivisionMap from "@/components/DivisionMap";
import sideb from "@/assets/main";
import FilterArea from "@/components/FilterArea";
export default {
  name: 'LandingPage',
  components: {
    HeaderPart,
    WrapperPart,
    SidebarPart,
    DivisionMap,
    FilterArea
  },

  props: {
    msg: String
  },
  mounted() {
    sideb()
    console.log(process.env.VUE)
  }
}
</script>

