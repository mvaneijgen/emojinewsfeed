// // Place this in your parent .vue file (Root is App.vue)
// import Wrapper from '@/components/Wrapper.vue';

// components: {
//    Wrapper,
// },

// // Use the compontent as follows
// <Wrapper />
// OR
// <Wrapper>{{data}}</Wrapper>

// // Router setup  place this before and between export const routes = [...]

// import Wrapper from './components/Wrapper.vue';
// { path: '/Wrapper', component: Wrapper },

<template>
  <div class="component-Wrapper">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  // props: ['item'],
  name: 'Wrapper',
  data() {
    return {
      title: 'Wrapper'
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

<style lang="scss" scoped>
// @import '~/assets/css/common/_variables.scss';
</style>