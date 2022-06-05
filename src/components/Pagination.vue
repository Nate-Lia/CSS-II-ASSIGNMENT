<template>
  <paginate
    v-model="page"
    :page-count="2"
    :page-range="3"
    :margin-pages="1"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
    class="
      sticky
      bottom-0
      bg-white
      border-gray-200
      outline-none
      px-2
      sm:px-4
      py-2.5
      rounded
      dark:bg-gray-800 dark:text-white
      cursor-pointer
      justify-between
      flex flex-wrap
      container
      items-center
      mx-auto
    "
  >
  </paginate>
</template>

<script>
import Paginate from "vuejs-paginate-next";
export default {
  data() {
    return {
      page: 1,
    };
  },
  components: {
    paginate: Paginate,
  },
  methods: {
    clickCallback(pageNum) {
      console.log(pageNum);
    },
  },
};
</script>