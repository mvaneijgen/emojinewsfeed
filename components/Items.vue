<template>
  <div class="section">
    <div class="wrapper">
      <div class="inner">
        <div class="alloy-meta">
          <span class="brand">@{{ item.brand }}</span>
          <time>{{ item.date }} {{ item.month }} {{ item.year }}</time>
        </div>
        <h2>{{ item.title }}</h2>
        <p>{{ item.content }}</p>
        <img v-if="item.image" :src="item.image + '.jpg'" alt="">
        <a :href="item.url" target="_blank" class="btn">link</a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  name: 'Items',
  data() {
    return {
      title: 'Item'
    }
  }, // End data
  // More info at https://css-tricks.com/methods-computed-and-watchers-in-vue-js/
  // computed: {}, // Data with computed logic
  // methods: {}, // Are functions run on user actions example @click or on lifecycle hooks
  // watch: {}, // Watchs data, needs to have the same name as the data that is being watched


  // // Lifecycle hook. Check for more https://vuejs.org/v2/guide/instance.html or https://vuejs.org/v2/api/#Options-Lifecycle-Hooks
  // beforeCreate() {}, 
  // created() {}, // Each time the app is created (once?)
  // beforeMount() {}, 
  // mounted() {}, // Be sure all elements are drawn. Here you can use normal Javascript to interact with your page
  // beforeUpdate() {}, 
  // update() {}, 
  // activated() {},
  // deactivated() {},
  // beforeDestroy() {},
  // destroyed() {},
  // errorCaptured() {},
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100%;
  width: 100%;
  background-color: #253020;
}
.inner {
  max-width: 700px;
}
img {
  max-width: 400px;
  display: block;
}
.btn {
  background-color: #fff;
  color: #000;
  text-decoration: none;
  padding: 5px 10px;
}
</style>