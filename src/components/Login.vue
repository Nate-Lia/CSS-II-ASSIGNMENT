<template>
  <div class="float-right">
    <div class="flex items-center h-full w-full bg-teal-300 rounded-lg">
      <div
        class="w-full bg-slate-100 rounded-md shadow-lg p-12 m-8 md:max-w-sm"
      >
        <h1 class="text-3xl font-bold mb-6">Login</h1>
        <form
          @submit.prevent="submitData"
          class="mb-4 md:flex-wrap md:justify-between"
        >
          <div class="flex flex-col mb-4 md:w-full">
            <label
              class="mb-2 uppercase font-bold text-lg text-grey-darkest"
              for="email"
              >Email</label
            >
            <input
              class="
                border-solid border-2 border-zinc-400
                rounded-md
                py-2
                px-3
                text-gray-900
              "
              type="email"
              name="email"
              id="email"
              v-model.trim="enteredEmail"
            />
          </div>
          <div class="flex flex-col mb-4 md:w-full">
            <label
              class="mb-2 uppercase font-bold text-lg text-gray-900"
              for="password"
              >Password</label
            >
            <input
              class="
                border-solid border-2 border-zinc-400
                rounded-md
                py-2
                px-3
                text-grey-darkest
              "
              type="password"
              name="password"
              id="password"
              v-model.trim="enteredPassword"
            />
          </div>
          <button
            class="
              block
              bg-teal-300
              hover:bg-teal-900
              text-white
              uppercase
              text-lg
              mx-auto
              p-4
              rounded-full
            "
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      enteredEmail: "",
      enteredPassword: "",
      results: [],
    };
  },
  methods: {
    async getData() {
      try {
        const response = await fetch(
          "https://keyboard-shop-6316e-default-rtdb.europe-west1.firebasedatabase.app/account.json",
          {
            method: "GET",
          }
        );
        const responseData = await response.json();
        if (!response.ok) {
          console.log("Something went wrong");
        }
        const results = [];
        for (const id in responseData) {
          results.push({
            id: id,
            email: responseData[id].email,
            password: responseData[id].password,
          });
          this.results = results;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async submitData() {
      this.getData();
      for (const result in this.results) {
        const identifiedAccount = this.results.find(
          (account) => account.id === this.results[result].id
        );
        if (
          identifiedAccount.email == this.enteredEmail &&
          identifiedAccount.password == this.enteredPassword
        ) {
          this.$router.push("/shop");
        } else {
          alert(
            "Account does not exist. Check you have inputted the correct details"
          );
        }
      }
      this.$store.dispatch("setAuth", true);
    },
  },
  mounted() {
    this.getData();
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
};
</script>