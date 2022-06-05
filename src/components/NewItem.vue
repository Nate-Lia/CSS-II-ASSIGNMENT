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
        <h1 class="text-3xl font-bold mb-6">Add Item</h1>
        <form
          @submit.prevent="submitData"
          class="mb-4 md:flex-wrap md:justify-between"
        >
          <div class="flex flex-col mb-4 md:w-full">
            <label
              class="mb-2 uppercase font-bold text-lg text-grey-darkest"
              for="price"
              >Title</label
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
              name="price"
              id="price"
              v-model.trim="enteredTitle"
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
              v-model.trim="enteredPrice"
            />
          </div>
          <div class="flex flex-col mb-4 md:w-full">
            <label
              class="mb-2 uppercase font-bold text-lg text-gray-900"
              for="image"
              >Image URL</label
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
              name="image"
              id="image"
              v-model.trim="enteredImage"
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
            Add Item
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewItem",
  components: {},
  data() {
    return {
      enteredTitle: "",
      enteredPrice: "",
      enteredImage: "",
      results: [],
    };
  },
  methods: {
    async submitData() {
      const response = await fetch(
        "https://keyboard-shop-6316e-default-rtdb.europe-west1.firebasedatabase.app/items.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: this.enteredTitle,
            price: this.enteredPrice,
            image: this.enteredImage,
          }),
        }
      );
      alert(this.enteredTitle + " has been added");
      if (!response.ok) {
        console.log("something went wrong");
      }
    },
  },
};
</script>