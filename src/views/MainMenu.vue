<template>
  <div
    class="
      min-h-full
      flex
      py-12
      flex-wrap
      px-6
      lg:items-center lg:justify-center lg:px-8
    "
  >
    <div class="max-w-md w-full space-y-8">
      <Register></Register>
    </div>
    <div class="max-w-md w-full space-y-8">
      <Login></Login>
    </div>
  </div>
</template>

<script>
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";

export default {
  name: "MainMenu",
  components: {
    Register,
    Login,
  },
};
</script>
