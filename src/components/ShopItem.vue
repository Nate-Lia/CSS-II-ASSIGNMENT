<template>
  <transition-group tag="li" name="list">
    <div class="mb-20 cursor-pointer">
      <ul class="flex flex-col">
        <li>
          <img class="w-1/3 mx-auto" :src="image" />
        </li>
        <li>
          <h2 class="font-bold">{{ title }}</h2>
        </li>
        <li>
          <p>€{{ price }}</p>
        </li>
      </ul>
      <div class="flex flex-row mx-10">
        <button
          class="
            block
            text-white
            bg-red-700
            hover:bg-red-800
            focus:ring-4 focus:outline-none focus:ring-green-300
            font-medium
            rounded-lg
            text-sm
            mr-auto
            px-5
            py-2.5
            text-center
            dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800
          "
          type="button"
          @click="updateItem"
        >
          Update Item
        </button>
        <button
          class="
            block
            text-white
            bg-red-700
            hover:bg-red-800
            focus:ring-4 focus:outline-none focus:ring-blue-300
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2.5
            text-center
            dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800
          "
          type="button"
          @click="deleteItem"
        >
          Delete Item
        </button>
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  emits: ["delete-item"],
  data() {
    return {
      selectedID: 1,
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      this.$emit("delete-item", this.id);
    },
    updateItem() {
      this.$router.push("/updateproduct");
    },
  },
  computed: {
    userRole() {
      console.log(this.$store.getters.userIsAdmin);
      return this.$store.getters.userIsAdmin;
    },
  },
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.flip-list-move {
  transition: transform 0.8s ease;
}
</style>