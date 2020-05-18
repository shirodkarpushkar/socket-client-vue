<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown01"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Dropdown</a
            >
            <transition
              enter-active-class="animate__animated animate__zoomIn "
              leave-active-class="animate__animated animate__zoomOut"
            >
              <div
                class="dropdown-menu"
                aria-labelledby="dropdown01"
                v-show="show"
              >
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </transition>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            v-model="message"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
            >Search</button
          >
        </form>
      </div>
    </nav>

    <main role="main">
      <!-- Main jumbotron for a primary marketing message or call to action -->
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Socket.io Basics</h1>
          <p
            >This is a template for a simple marketing or informational website.
            It includes a large callout called a jumbotron and three supporting
            pieces of content. Use it as a starting point to create something
            more unique.</p
          >
          <p
            ><a class="btn btn-primary btn-lg" href="#" role="button"
              >Learn more »</a
            ></p
          >
        </div>
      </div>

      <div class="container">
        <!-- Example row of columns -->
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <h2>Join Chat</h2>
            <form @submit.prevent="joinRoom">
              <div class="form-group">
                <label for="name" id="name">Name</label>
                <input
                  type="text"
                  ref="name"
                  id="name"
                  v-model="name"
                  class="form-control mr-3"
                  name="name"
                />
              </div>
              <div class="form-group">
                <label for="room" id="room">Room</label>
                <input
                  type="text"
                  ref="room"
                  id="room"
                  v-model="room"
                  class="form-control mr-3"
                  name="room"
                />
              </div>
            </form>
          </div>
        </div>

        <hr />
      </div>
      <!-- /container -->
    </main>
    <footer class="container">
      <p>© Company 2017-2019</p>
    </footer>
  </div>
</template>

<script>
export default {
  page: {
    title: 'Login',
    meta: [{ name: 'description', content: 'Login' }],
  },
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      if (this.username === '') {
        alert('Please enter username')
      } else if (this.password === '') {
        alert('Please enter password')
      } else {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        if (this.password.match(re)) this.$router.push({ name: 'home' })
        else {
          alert('Please enter a valid password!')
        }
      }
    },
  },
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.main-bg::after {
  background-color: #fef5e4;
  -webkit-border-radius: 0 0 233px 135px;
  -moz-border-radius: 0 0 233px 135px;
  border-radius: 0 0 233px 135px;
  content: '';
  position: absolute;
  right: -119px;
  top: -93px;
  background-color: #fef5e4;
  width: 466px;
  height: 595px;
  -webkit-transform: rotate(45deg);
  transform: rotate(116deg);
  z-index: -2;
}

.box-conatiner {
  contain: content;
  margin: 50px auto;
  height: 500px;
  width: 80%;
  background-color: #5d4ef3;
  border-radius: 0 70px;
  box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03),
    0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03),
    0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05),
    0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
}

.box-conatiner::before {
  content: '';
  background: url(https://1bp.blogspot.com/--UQ8_O1EFN8/XWkZdpW_MMI/AAAAAAAATDE/kcJXA9nMy4ElB4NmBZDM6WwPE4JQD7ACQCLcBGAs/s1600/shape.png);
  position: absolute;
  right: -20px;
  background-size: 100%;
  top: -80px;
  width: 1220px;
  height: 653px;
}

/* Login Form  */
body,
html {
  height: 100%;
  font-family: Helvetica Neue LT Pro 65 Medium;
}

a {
  font-family: Helvetica Neue LT Pro 65 Medium;
  font-size: 14px;
  line-height: 1.7;
  color: #666;
  margin: 0;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
}
a:focus {
  outline: none !important;
}
a:hover {
  text-decoration: none;
  color: #1b3815;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
p {
  font-family: Helvetica Neue LT Pro 65 Medium;
  font-size: 14px;
  line-height: 1.7;
  color: #666;
  margin: 0;
}
ul,
li {
  margin: 0;
  list-style-type: none;
}
input {
  outline: none;
  border: none;
}
input[type='number'] {
  -moz-appearance: textfield;
  appearance: none;
  -webkit-appearance: none;
}
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
textarea {
  outline: none;
  border: none;
}
textarea:focus,
input:focus {
  border-color: transparent !important;
}
input::-webkit-input-placeholder {
  color: #1b3815;
}
input:-moz-placeholder {
  color: #1b3815;
}
input::-moz-placeholder {
  color: #1b3815;
}
input:-ms-input-placeholder {
  color: #1b3815;
}
textarea::-webkit-input-placeholder {
  color: #1b3815;
}
textarea:-moz-placeholder {
  color: #1b3815;
}
textarea::-moz-placeholder {
  color: #1b3815;
}
textarea:-ms-input-placeholder {
  color: #1b3815;
}
button {
  outline: none !important;
  border: none;
  background: 0 0;
}
button:hover {
  cursor: pointer;
}
iframe {
  border: none !important;
}
.txt1 {
  font-family: Helvetica Neue LT Pro 65 Medium;
  font-size: 15px;
  color: #999;
  line-height: 1.4;
}
.txt2 {
  font-family: Helvetica Neue LT Pro 65 Medium;
  font-size: 15px;
  color: #57b846;
  line-height: 1.4;
}
.txt3 {
  font-family: Helvetica Neue LT Pro 65 Medium;
  font-size: 15px;
  color: #57b846;
  line-height: 1.4;
  text-transform: uppercase;
}
.limiter {
  width: 100%;
  margin: 0 auto;
}
.container-login100 {
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: relative;
  background-color: #fff;
}
.wrap-login100 {
  width: 450px;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.1);
  -o-box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.1);
  height: 450px;
  border: 1px solid #dedede;
  margin: 100px auto;
}
.login100-form {
  width: 100%;
  position: relative;
}
.login100-form-title {
  font-family: Helvetica Neue LT Pro 75 Bold;
  font-size: 30px;
  color: #fff;
  text-align: center;
  display: block;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #5d4ef3;
  padding-top: 50px;
  padding-bottom: 39px;
}
.wrap-input100 {
  width: 100%;
  background-color: #fff;
  border-radius: 27px;
  position: relative;
  z-index: 1;
}
.input100 {
  font-family: Helvetica Neue LT Pro 65 Medium;
  font-size: 15px;
  color: #1b3815;
  line-height: 1.2;
  position: relative;
  display: block;
  width: 100%;
  height: 55px;
  background: #ebebeb;
  border-radius: 27px;
  padding: 0 35px;
}
.focus-input100 {
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 31px;
  background-color: #ebebeb;
  pointer-events: none;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}
.p-r-55 {
  padding-right: 55px;
}
.p-l-55 {
  padding-left: 55px;
}
.p-t-178 {
  padding-top: 178px;
}
.m-b-16 {
  margin-bottom: 16px;
}
.p-t-20 {
  padding-top: 20px;
}
.txt1 {
  font-family: Helvetica Neue LT Pro 65 Medium;
  font-size: 15px;
  color: #999;
  line-height: 1.4;
}
.p-b-9 {
  padding-bottom: 9px;
}
.txt3 {
  font-family: Helvetica Neue LT Pro 65 Medium;
  font-size: 15px;
  color: #57b846;
  line-height: 1.4;
  text-transform: uppercase;
}
.flex-col-c {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -moz-flex-direction: column;
  -ms-flex-direction: column;
  -o-flex-direction: column;
  flex-direction: column;
  -ms-align-items: center;
  align-items: center;
}
.p-b-40 {
  padding-bottom: 40px;
}
.p-t-140 {
  padding-top: 40px;
}

.login100-form-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  background-color: #5d4ef3;
  border-radius: 25px;
  font-family: Helvetica Neue LT Pro 65 Medium;
  font-size: 15px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}
.text-right {
  text-align: right !important;
}
.p-t-13 {
  padding-top: 13px;
}
.p-b-23 {
  padding-bottom: 23px;
}
.heading-left {
  color: white;
  width: 65%;
  text-align: center;
  text-transform: uppercase;
  line-height: 50px;
  margin: 160px auto;
  letter-spacing: 4px;
}

@media only screen and (max-width: 600px) {
  .wrap-login100 {
    width: 100%;
  }

  .wrap-login100 {
    width: 100%;
    right: -272px;
  }

  .heading-left {
    font-size: 19px;
    line-height: 34px;
  }

  .p-l-55 {
    padding-left: 20px;
  }
  .p-r-55 {
    padding-right: 20px;
  }
  .input100 {
    height: 40px;
  }

  .login100-form-btn {
    height: 40px;
  }
  .wrap-login100 {
    width: 95%;
  }
}

@media only screen and (min-width: 401px) and (max-width: 1070px) {
  .box-conatiner::before {
    background-size: 48%;
    top: -80px;
    background-repeat: no-repeat;
    background: none;
  }

  .heading-left {
    font-size: 24px;
    line-height: 40px;
    margin: 235px auto;
    letter-spacing: 4px;
  }

  .wrap-login100 {
    width: 90%;
  }
}
</style>
