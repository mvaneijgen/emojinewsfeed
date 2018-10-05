<template>
  <div class="section">
    <div class="wrapper alloy-item" :class="'month-' + item.month">
      <div class="background">
        <div class="inner">
          <div class="content">
            <div class="alloy-meta">
              <span class="brand">@{{ item.brand }}</span>
              <time>{{ item.date }} {{ item.month }} {{ item.year }}</time>
            </div>
            <h2><a :href="item.url" target="_blank">{{ item.title }}</a></h2>
            <p>{{ item.content }}</p>
          </div>
          <img v-if="item.image" :src="item.image" alt="">
        </div>
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