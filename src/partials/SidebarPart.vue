<template>
  <aside class="sidebar-wrapper" data-simplebar="true">
    <div class="sidebar-header">
      <div>
        <RouterLink to="/">
          <img
            src="/custom/design/img/eru-logo.png"
            class="logo-icon"
            alt="logo icon"
          />
        </RouterLink>
      </div>
      <div>
        <RouterLink to="/">
          <h4 class="logo-text">
            <img
              src="/custom/design/img/eru-logo-text.png"
              style="width: 80%"
              alt=""
            />
          </h4>
        </RouterLink>
      </div>
      <div class="toggle-icon ms-auto">
        <ion-icon name="menu-sharp"></ion-icon>
      </div>
    </div>
    <!--navigation-->
    <ul class="metismenu" id="menu">
      <li>
        <a href="javascript:;" class="has-arrow">
          <div class="parent-icon"><ion-icon name="map-sharp"></ion-icon></div>
          <div class="menu-title">মানচিত্র</div>
        </a>
        <ul>
          <li>
            <RouterLink to="/"
              ><ion-icon name="ellipse-outline"></ion-icon>বিভাগ</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/district"
              ><ion-icon name="ellipse-outline"></ion-icon>জেলা</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/seat"
              ><ion-icon name="ellipse-outline"></ion-icon>আসন</RouterLink
            >
          </li>
        </ul>
      </li>
      <li>
        <a href="javascript:;" class="has-arrow">
          <div class="parent-icon"><ion-icon name="book-sharp"></ion-icon></div>
          <div class="menu-title">অন্যান্য তথ্য</div>
        </a>
        <ul>
          <li>
            <RouterLink to="/create-division"
              ><ion-icon name="ellipse-outline"></ion-icon>বিভাগ</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/create-district"
              ><ion-icon name="ellipse-outline"></ion-icon>জেলা</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/create-constituency"
              ><ion-icon name="ellipse-outline"></ion-icon>আসন</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/create-center"
              ><ion-icon name="ellipse-outline"></ion-icon>কেন্দ্র</RouterLink
            >
          </li>
          <li>
            <a href="#"><ion-icon name="ellipse-outline"></ion-icon>দলের নাম</a>
          </li>
          <li>
            <a href="#"
              ><ion-icon name="ellipse-outline"></ion-icon>রাজনৈতিক দলের তথ্য</a
            >
          </li>
          <li>
            <a href="#"
              ><ion-icon name="ellipse-outline"></ion-icon>প্রার্থীর তথ্য</a
            >
          </li>
          <li>
            <a href="#"
              ><ion-icon name="ellipse-outline"></ion-icon>ভোটের ফলাফল</a
            >
          </li>
        </ul>
      </li>
    </ul>
    <!--end navigation-->
  </aside>
</template>
<script>
export default {
  name: "SidebarPart",
  props: {
    msg: String,
  },
};
</script>