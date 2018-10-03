<template>
  <div id="fullpage">
    <div class="spinner" v-if="!loaded"></div>
    <Items v-for="(item, index) in $store.state.items" :key="index" :item="item"></items>
  </div>
</template>

<script>
import Items from "~/components/Items.vue";

export default {
  components: {
    Items,
  },
    data() {
    return {
      loaded: false,
    }
  }, // End data
  async mounted () {
    //------------------------------------------------------//
    // Google spreadsheet API logic 
    //------------------------------------------------------//
    const spreadsheetID = '1oV2wxJh54bXS6sixWLqqW1EJnriGRgjwDACIuPnzp9k';
    const sheetId = '0';

    await this.$axios
      .get(`https://cors.io/?https://spreadsheets.google.com/feeds/list/${spreadsheetID}/od6/public/values?alt=json`)
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
        this.loaded = true;
      })
        // this.$store.commit('add', resultItems);
      .catch(function(error) {
        // this.$store.commit('error', error);
        // console.log(error);
      });
      //------------------------------------------------------//
    // END Google spreadsheet API logic
    //------------------------------------------------------//
    new fullpage('#fullpage', {
      // menu: '#menu',
      // lockAnchors: false,
      // anchors:['firstPage', 'secondPage'],
      navigation: true,
      navigationPosition: 'right',
      // navigationTooltips: ['firstSlide', 'secondSlide'],
      // showActiveTooltip: false,
      slidesNavigation: true,
      // slidesNavPosition: 'bottom',

      // //Scrolling
      // css3: true,
      // scrollingSpeed: 700,
      // autoScrolling: true,
      // fitToSection: true,
      // fitToSectionDelay: 1000,
      // scrollBar: false,
      // easing: 'easeInOutCubic',
      // easingcss3: 'ease',
      // loopBottom: false,
      // loopTop: false,
      // loopHorizontal: true,
      // continuousVertical: false,
      // continuousHorizontal: false,
      // scrollHorizontally: false,
      // interlockedSlides: false,
      // dragAndMove: false,
      // offsetSections: false,
      // resetSliders: false,
      // fadingEffect: false,
      // normalScrollElements: '#element1, .element2',
      // scrollOverflow: false,
      // scrollOverflowReset: false,
      // scrollOverflowOptions: null,
      // touchSensitivity: 15,
      // normalScrollElementTouchThreshold: 5,
      // bigSectionsDestination: null,

      // //Accessibility
      // keyboardScrolling: true,
      // animateAnchor: true,
      // recordHistory: true,

      // //Design
      // controlArrows: true,
      // verticalCentered: true,
      // sectionsColor : ['#ccc', '#fff'],
      // paddingTop: '3em',
      // paddingBottom: '10px',
      // fixedElements: '#header, .footer',
      // responsiveWidth: 0,
      // responsiveHeight: 0,
      // responsiveSlides: false,
      // parallax: false,
      // parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

      // //Custom selectors
      // sectionSelector: '.section',
      // slideSelector: '.slide',

      // lazyLoading: true,

      // //events
      // onLeave: function(origin, destination, direction){},
      // afterLoad: function(origin, destination, direction){},
      // afterRender: function(){},
      // afterResize: function(width, height){},
      // afterResponsive: function(isResponsive){},
      // afterSlideLoad: function(section, origin, destination, direction){},
      // onSlideLeave: function(section, origin, destination, direction){}
    });
    
  }
}
</script>

<style>
.spinner {
  width: 40px;
  height: 40px;
  background-color: #253020;

  margin: 100px auto;
  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
  animation: sk-rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes sk-rotateplane {
  0% {
    -webkit-transform: perspective(120px);
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}

@keyframes sk-rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>

