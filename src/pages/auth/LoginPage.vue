<template>
  <div>

    <section>
      <div class="container" style="padding-top: 12rem">
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-10">
            <div class="wrap d-md-flex">
              <!--              <div class="img"  :style="{ backgroundImage: `url(custom/design/img/Capture.JPG)` }"></div>-->
              <div  class="img" :style="{'background-image': 'url(/custom/design/img/Capture.JPG)'}"></div>
              <div class="login-wrap p-4 p-md-5">
                <form style="font-family: Arial, Baskerville, monospace; padding: 20%" action="">
                  <h2 style="text-align: center; font-size:x-large ; color:mediumpurple">ERU Login</h2>

                  <div class="form-outline mb-1">
                    <input type="text" id="form2Example11" class="form-control" v-model="username" placeholder="Username"/>
                  </div>

                  <div class="form-outline mb-1">
                    <input type="password" id="form2Example22" class="form-control" v-model="password" placeholder="Password"/>
                  </div>

                  <div class="text-center 1">
                    <button class="btn btn-block" @click.prevent="login" style="background-color: #5f7fee;color: white" type="button">Log in</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  name: "LoginPage",
  methods: {
    async login() {
      let response = await this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
      if (response) {
        this.$router.replace("/");
      } else {
        //
      }
    },
  }
}
</script>