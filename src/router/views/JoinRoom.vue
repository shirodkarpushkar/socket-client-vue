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
                  :class="{ 'is-invalid': $v.name.$error }"
                  name="name"
                  @input="$v.name.$touch()"
                  required
                />
                <div class="invalid-feedback">
                  Please provide name.
                </div>
              </div>
              <div class="form-group">
                <label for="room" id="room">Room</label>
                <input
                  type="text"
                  ref="room"
                  id="room"
                  :class="{ 'is-invalid': $v.room.$error }"
                  @input="$v.room.$touch()"
                  v-model="room"
                  class="form-control mr-3"
                  name="room"
                />
                <div class="invalid-feedback">
                  Please provide roomId.
                </div>
              </div>
              <div class="text-left">
                <button class="btn btn-primary">Join</button>
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
import { required } from 'vuelidate/lib/validators'
export default {
  page: {
    title: 'Login',
    meta: [{ name: 'description', content: 'Login' }],
  },
  data() {
    return {
      room: '',
      name: '',
      show: false,
    }
  },
  mounted() {
    let dropdown = $(this.$el).find('.dropdown')
    let menu = $(this.$el).find('.dropdown-menu')
    dropdown.on('show.bs.dropdown', () => {
      this.show = true
    })
    dropdown.on('hide.bs.dropdown', () => {
      menu.css('display', 'block')
      this.show = false
    })
  },
  methods: {
    joinRoom() {
      this.$v.$touch()
      if(!this.$v.$invalid){
        this.$router.push({
          name:'home',
          query:{
            name:this.name,
            room:this.room
          }
        })
      }
    },
  },
  validations: {
    room: {
      required,
    },
    name: {
      required,
    },
  },
}
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s, margin 0.2s;
}

.menu-enter,
.menu-leave-to {
  margin-top: -20px;
  opacity: 0;
}
.animate__animated {
  --animate-duration: 0.25s;
}
</style>
