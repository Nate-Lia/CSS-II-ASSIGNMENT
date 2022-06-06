<template>
  <transition-group name="list">
    <div class="list-none grid mx-auto md:grid-cols-3 md:mt-24">
      <ShopItem
        class="list-none"
        v-for="item in results"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :price="item.price"
        :image="item.image"
        @delete-item="deleteItem"
      ></ShopItem>
    </div>
  </transition-group>
</template>

<script>
import ShopItem from "@/components/ShopItem.vue";
export default {
  emits: ["edit-values"],
  components: { ShopItem },
  data() {
    return {
      results: [],
    };
  },
  methods: {
    async getData() {
      console.log("getting data");
      try {
        const response = await fetch(
          "https://keyboard-shop-6316e-default-rtdb.europe-west1.firebasedatabase.app/items.json",
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
            id: this.results.length + 1,
            databaseID: id,
            title: responseData[id].title,
            price: responseData[id].price,
            image: responseData[id].image,
          });
          this.results = results;
          console.log(responseData);

          this.$emit(
            "edit-values",
            id,
            responseData[id].title,
            responseData[id].price,
            responseData[id].image
          );
          console.log(id);
        }
      } catch (error) {
        console.log(error);
      }
    },

    async deleteItem(itemID) {
      if (confirm("Do you want to delete this item?")) {
        const identifiedItem = this.results.find((item) => item.id === itemID);
        await fetch(
          "https://keyboard-shop-6316e-default-rtdb.europe-west1.firebasedatabase.app/items/" +
            identifiedItem.databaseID +
            ".json",
          {
            method: "DELETE",
          }
        );
        if (this.results.length == 1) {
          this.results = [];
        }

        await this.getData();
      } else {
        alert("Cancel Clicked");
      }
    },
  },
  mounted() {
    this.getData();
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