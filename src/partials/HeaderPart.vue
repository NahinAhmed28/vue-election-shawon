<template>
  <header class="top-header">
    <nav class="navbar navbar-expand gap-3">
      <div class="mobile-menu-button"><ion-icon name="menu-sharp"></ion-icon></div>
      <form class="searchbar">
        <div class="position-absolute top-50 translate-middle-y search-icon ms-3"><ion-icon name="search-sharp"></ion-icon></div>
        <input class="form-control" type="text" placeholder="Search for anything">
        <div class="position-absolute top-50 translate-middle-y search-close-icon"><ion-icon name="close-sharp"></ion-icon></div>
      </form>
      <div class="top-navbar-right ms-auto">

        <ul class="navbar-nav align-items-center">

          <li class="nav-item dropdown dropdown-user-setting">
            <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
              <div class="user-setting">
                <ion-icon name="settings-outline"></ion-icon>
              </div>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class=""><ion-icon name="settings-outline"></ion-icon></div>
                    <div class="ms-3"><span>রশিদ জমান</span></div>
                  </div>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class=""><ion-icon name="settings-outline"></ion-icon></div>
                    <div class="ms-3"><span>পাসওয়ার্ড পরিবর্তন করুন</span></div>
                  </div>
                </a>
              </li>


              <li><hr class="dropdown-divider"></li>
              <li>
                <a class="dropdown-item" href="javascript:;">
                  <div class="d-flex align-items-center">
                    <div class=""><ion-icon name="log-out-outline"></ion-icon></div>
                    <div class="ms-3"><span>লগ আউট</span></div>
                  </div>
                </a>
              </li>
            </ul>
          </li>

        </ul>

      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'HeaderPart',
  props: {
    msg: String
  }
}
</script>