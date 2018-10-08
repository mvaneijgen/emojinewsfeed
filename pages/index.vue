<template>
  <div id="fullpage">
    <Intro></Intro>
    <Items v-for="(item, index) in $store.state.items" :key="index" :item="item"></items>
  </div>
</template>

<script>
import Intro from "~/components/Intro.vue";
import Items from "~/components/Items.vue";

export default {
  components: {
    Items,
    Intro,
  },
    data() {
    return {
    }
  }, // End data
  async mounted () {
    //------------------------------------------------------//
    // Google spreadsheet API logic 
    //------------------------------------------------------//
    const spreadsheetID = '1oV2wxJh54bXS6sixWLqqW1EJnriGRgjwDACIuPnzp9k';

    await this.$axios
      .get(`https://spreadsheets.google.com/feeds/list/${spreadsheetID}/od6/public/values?alt=json`)
      .then(response => {
        const rawData = response.data.feed.entry;
        let resultItems = [];
        rawData.forEach(item => {
          let itemObj = {
            title: item.gsx$title.$t,
            year: item.gsx$year.$t,
            image: item.gsx$image.$t,
            brand: item.gsx$brand.$t,
            content: item.gsx$content.$t,
            month: item.gsx$month.$t,
            url: item.gsx$url.$t,
            date: item.gsx$date.$t,
          };
          resultItems.push(itemObj);
        });
        // console.warn(rawData);
        this.$store.commit('add', resultItems);
        // this.loaded = true;
      })
      .catch(function(error) {
        // this.$store.commit('error', error);
        // console.log(error);
      });
      //------------------------------------------------------//
    // END Google spreadsheet API logic
    //------------------------------------------------------//
    new fullpage('#fullpage', {
      navigation: true,
      navigationPosition: 'right',
      slidesNavigation: true,
      loopBottom: true,
      loopTop: true,
      afterRender: function(){
        setInterval(function(){
          fullpage_api.moveSectionDown();
        }, 18000);
      },
    });
    
  }
}
</script>

<style>
</style>

