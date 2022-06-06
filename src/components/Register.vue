<template>
  <div class="flex items-center h-full w-full bg-teal-300 rounded-lg">
    <div
      class="w-full bg-white rounded shadow-md p-8 m-4 md:max-w-sm md:mx-auto"
    >
      <h1
        class="block w-full text-center text-3xl text-gray-900 font-bold mb-6"
      >
        Sign Up
      </h1>
      <Form
        @submit="createUser"
        class="mb-4 md:flex md:flex-wrap md:justify-between"
      >
        <div class="flex flex-col mb-4 md:w-1/2">
          <label
            class="mb-2 uppercase tracking-wide font-bold text-lg text-gray-900"
            for="first_name"
            >First Name</label
          >
          <Field
            class="
              border-solid border-2 border-zinc-400
              py-2
              px-3
              rounded-md
              text-gray-900
              md:mr-2
            "
            type="text"
            name="first_name"
            id="first_name"
            v-model.trim="enteredFirstName"
            :rules="nameRules"
          />
          <ErrorMessage
            class="text-red-800 border-solid border-2 border-red-800"
            name="first_name"
          />
        </div>
        <div class="flex flex-col mb-4 md:w-1/2">
          <label
            class="mb-2 uppercase font-bold text-lg text-gray-900 md:ml-2"
            for="last_name"
            >Last Name</label
          >
          <Field
            class="
              border-solid border-2 border-zinc-400
              py-2
              px-3
              rounded-md
              text-gray-900
              md:ml-2
            "
            type="text"
            name="last_name"
            id="last_name"
            v-model.trim="enteredLastName"
            :rules="nameRules"
          />
          <ErrorMessage
            class="text-red-800 border-solid border-2 border-red-800"
            name="last_name"
          />
        </div>
        <div class="flex flex-col mb-4 md:w-full">
          <label
            class="mb-2 uppercase font-bold text-lg text-gray-900"
            for="mobile"
            >Mobile</label
          >
          <Field
            class="
              border-solid border-2 border-zinc-400
              py-2
              px-3
              rounded-md
              text-gray-900
            "
            type="number"
            name="mobile"
            id="mobile"
            v-model.trim="enteredMobile"
            :rules="mobileRules"
          />
          <ErrorMessage
            class="text-red-800 border-solid border-2 border-red-800"
            name="mobile"
          />
        </div>
        <div class="flex flex-col mb-4 md:w-full">
          <label
            class="mb-2 uppercase font-bold text-lg text-gray-900"
            for="email"
            >Email</label
          >
          <Field
            class="
              border-solid border-2 border-zinc-400
              py-2
              px-3
              rounded-md
              text-gray-900
            "
            type="email"
            name="email"
            id="email"
            v-model.trim="enteredEmail"
            :rules="emailRules"
          />
          <ErrorMessage
            class="text-red-800 border-solid border-2 border-red-800"
            name="email"
          />
        </div>
        <div class="flex flex-col mb-6 md:w-full">
          <label
            class="mb-2 uppercase font-bold text-lg text-gray-900"
            for="password"
            >Password</label
          >
          <Field
            class="
              border-solid border-2 border-zinc-400
              py-2
              px-3
              rounded-md
              text-gray-900
            "
            type="password"
            name="password"
            id="password"
            v-model.trim="enteredPassword"
            :rules="passwordRules"
          />
          <ErrorMessage
            class="text-red-800 border-solid border-2 border-red-800"
            name="password"
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
          Create Account
        </button>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      enteredFirstName: "",
      enteredLastName: "",
      enteredMobile: "",
      enteredEmail: "",
      enteredPassword: "",
      results: [],
      nameRules: yup.string().required(),
      mobileRules: yup.string().required().min(8).max(8),
      passwordRules: yup.string().required().min(3),
      emailRules: yup.string().required().email(),
    };
  },
  methods: {
    async createUser() {
      const auth = getAuth();

      auth.onAuthStateChanged((user) => {
        if (user) {
          this.$store.dispatch("fetchUser", user);
        }
      });

      createUserWithEmailAndPassword(
        auth,
        this.enteredEmail,
        this.enteredPassword
      )
        .then((data) => {
          data.user;
          this.$router.push("/shop");
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  mounted() {},
};
</script>