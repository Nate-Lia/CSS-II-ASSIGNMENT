<template>
  <!-- <nav>
    <router-link to="/">Main</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <Navbar v-if="user.isLoggedIn"></Navbar>
  <router-view
    @edit-values="editValues"
    :editValueProp="editItemValues"
    v-slot="{ Component }"
  >
    <transition name="slide-fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { mapGetters } from "vuex";
export default {
  components: { Navbar },
  data() {
    return {
      editItemValues: [],
    };
  },
  methods: {
    editValues(id, title, price, image) {
      this.editItemValues = [];
      this.editItemValues.push(id, title, price, image);
      console.log(this.editItemValues);
    },
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
