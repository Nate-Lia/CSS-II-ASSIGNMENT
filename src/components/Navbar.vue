<template>
  <nav
    class="
      sticky
      top-0
      bg-white
      border-gray-200
      px-2
      sm:px-4
      py-2.5
      rounded
      dark:bg-gray-800
    "
    v-if="user"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" class="flex items-center">
        <i
          class="fa-solid fa-keyboard text-gray-200 mr-8 text-3xl self-center"
        ></i>
        <span
          class="
            self-center
            text-xl
            font-semibold
            whitespace-nowrap
            dark:text-white
          "
          >Typist</span
        >
      </a>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        class="
          inline-flex
          items-center
          p-2
          ml-3
          text-sm text-gray-500
          rounded-lg
          md:hidden
          hover:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-gray-200
          dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
        "
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          class="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul
          class="
            flex flex-col
            mt-4
            md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium
          "
        >
          <li>
            <router-link
              to="/"
              class="
                block
                py-2
                pr-4
                pl-3
                text-white
                bg-gray
                rounded
                md:bg-transparent md:text-gray-400 md:p-0
                dark:text-white
                md:dark:hover:text-white
                dark:hover:bg-gray-700
                dark:hover:text-white
                dark:border-gray-700
                md:dark:hover:bg-transparent
              "
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/shop"
              class="
                block
                py-2
                pr-4
                pl-3
                text-gray-700
                border-b border-gray-100
                hover:bg-gray-50
                md:hover:bg-transparent
                md:border-0
                md:hover:text-blue-700
                md:p-0
                dark:text-gray-400
                md:dark:hover:text-white
                dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent
                dark:border-gray-700
              "
              >Products</router-link
            >
          </li>
          <li>
            <router-link
              to="/addproduct"
              class="
                block
                py-2
                pr-4
                pl-3
                text-gray-700
                border-b border-gray-100
                hover:bg-gray-50
                md:hover:bg-transparent
                md:border-0
                md:hover:text-blue-700
                md:p-0
                dark:text-gray-400
                md:dark:hover:text-white
                dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent
                dark:border-gray-700
              "
              >Add A Product</router-link
            >
          </li>
          <li><button @click="userSignOut">Sign Out</button></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { getAuth } from "firebase/auth";
export default {
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  methods: {
    userSignOut() {
      const auth = getAuth();

      auth.onAuthStateChanged((user) => {
        if (user) {
          this.$store.dispatch("fetchUser", user);
        }
      });

      auth.signOut().then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>