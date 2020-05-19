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
            <h2>Joined Room : {{ room }} </h2>

            <div v-for="(el, i) in messages" :key="i">
              <p
                ><strong>{{ el.name }} {{ el.timestamp | utcTime }}: </strong>
                {{ el.text }}</p
              >
            </div>
            <form @submit.prevent="sendMessage">
              <div class="d-flex">
                <input
                  type="text"
                  ref="message"
                  v-model="message"
                  class="form-control mr-3"
                  name="message"
                />
                <button type="submit" class="btn btn-primary">Submit</button>
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
import io from 'socket.io-client'
import moment from 'moment'
export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: 'Home' }],
  },

  data() {
    return {
      socket: io(process.env.VUE_APP_BACKEND_SERVER),
      show: false,
      message: '',
      messages: [],
      name: '',
      room: '',
    }
  },
  filters: {
    utcTime(val) {
      return moment
        .utc(val)
        .local()
        .format('h:mma')
    },
  },
  created() {
    this.name = this.$route.query.name
    this.room = this.$route.query.room
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

    this.socket.on('connect', () => {
      console.log('Connected to socket.io server!')
      this.socket.emit('joinRoom', {
        name: this.name,
        room: this.room,
      })
    })
    this.socket.on('message', (message) => {
      console.log('mounted -> data', message)
      this.messages.push(message)
    })
  },
  methods: {
    sendMessage() {
      console.log(this.message)
      this.socket.emit('message', {
        text: this.message,
        name: this.name,
      })
      this.message = ''
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
