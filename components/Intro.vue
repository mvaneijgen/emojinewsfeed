<template>
  <div class="section">
    <div class="wrapper alloy-item">
      <div class="background">
        <div class="inner">
          <div class="content">
            <div class="alloy-meta">
              <span class="brand"><a :href="$store.state.site" target="_blank">@{{ $store.state.by }}</a></span>
            </div>
            <h1><a :href="this.$store.state.site" target="_blank">{{ $store.state.title }}</a></h1>
            <img v-if="this.$store.state.image" :src="this.$store.state.image" alt="Hand pointing down emoji">
            <p>{{ $store.state.description }}</p>
          </div>
          <div class="spinner" v-if="!$store.state.loaded"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['item'],
  name: 'Intro',
  data() {
    return {
      title: 'Intro'
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

// <style lang="scss" scoped>
// // @import '~/assets/css/common/_variables.scss';
//
</style>