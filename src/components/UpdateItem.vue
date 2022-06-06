<template>
  <div class="flex justify-center items-center h-screen md:h-fit md:mt-20">
    <div
      class="
        flex
        justify-center
        items-center
        h-full
        w-full
        bg-teal-300
        rounded-lg
        md:max-w-md
      "
    >
      <div
        class="w-full bg-slate-100 rounded-md shadow-lg p-12 m-8 md:max-w-full"
      >
        <h1 class="text-3xl font-bold mb-6">Edit Data</h1>
        <form
          class="mb-4 md:flex-wrap md:justify-between"
          @submit.prevent="editData"
        >
          <div class="flex flex-col mb-4 md:w-full">
            <label
              class="mb-2 uppercase font-bold text-lg text-grey-darkest"
              for="name"
              >Name</label
            >
            <input
              class="
                border-solid border-2 border-zinc-400
                rounded-md
                py-2
                px-3
                text-gray-900
              "
              type="text"
              name="name"
              id="name"
              v-model.trim="itemName"
            />
          </div>
          <div class="flex flex-col mb-4 md:w-full">
            <label
              class="mb-2 uppercase font-bold text-lg text-gray-900"
              for="price"
              >Price</label
            >
            <input
              class="
                border-solid border-2 border-zinc-400
                rounded-md
                py-2
                px-3
                text-grey-darkest
              "
              type="text"
              name="price"
              id="price"
              v-model.trim="itemPrice"
            />
          </div>
          <div class="flex flex-col mb-4 md:w-full">
            <label
              class="mb-2 uppercase font-bold text-lg text-grey-darkest"
              for="image"
              >Image URL</label
            >
            <input
              class="
                border-solid border-2 border-zinc-400
                rounded-md
                py-2
                px-3
                text-gray-900
              "
              type="text"
              name="image"
              id="image"
              v-model.trim="itemImage"
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
            Edit Data
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editValueProp: {
      type: Array,
    },
  },
  data() {
    return {
      itemName: "",
      itemPrice: "",
      itemImage: "",
    };
  },
  methods: {
    async editData() {
      try {
        let response = await fetch(
          "https://keyboard-shop-6316e-default-rtdb.europe-west1.firebasedatabase.app/items/" +
            this.editValueProp[0] +
            ".json",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: this.itemName,
              price: this.itemPrice,
              image: this.itemImage,
            }),
          }
        );

        console.log(response);
      } catch (error) {
        console.log(error);
      }

      this.$router.push("/shop");
    },
  },
};
</script>