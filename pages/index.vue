<template>
  <div id="fullpage">
    <div class="section">Some section</div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
  </div>
</template>

<script>
export default {
  components: {
  },
  async mounted () {
    new fullpage('#fullpage', {
      //options here
      // autoScrolling:true,
      // scrollHorizontally: true
    });
    const spreadsheetID = '1qtuaxOUQx5zzLFMgdAqBX8z1TSGmxCwVI3MtC3dHXQY';
    const sheetId = '0';
    // https://docs.google.com/spreadsheets/d/e/2PACX-1vTYqiTRfzQqsS7ONrzvYoFVlJsutTcb29W5yz7euRPOJy9rB4rAkz-fkmbFhDlmtThY0RQJDyR3Wu0_/pubhtml
    // https://spreadsheets.google.com/feeds/list/0AtMEoZDi5-pedElCS1lrVnp0Yk1vbFdPaUlOc3F3a2c/od6/public/values?alt=json-in-script&callback=
    // https://spreadsheets.google.com/feeds/list/0AtMEoZDi5-pedElCS1lrVnp0Yk1vbFdPaUlOc3F3a2c/od6/public/values?alt=json
    // https://spreadsheets.google.com/feeds/list/1oV2wxJh54bXS6sixWLqqW1EJnriGRgjwDACIuPnzp9k/od6/public/values?alt=json
    // this.$axios.setHeader('Access-Control-Allow-Origin', '*');
    // this.$axios.setHeader("Access-Control-Allow-Credentials", "true");
    // this.$axios.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    // this.$axios.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    await this.$axios
      // .get('https://docs.google.com/spreadsheet/ccc?key=' + spreadsheetID +'#gid=' + sheetId)
      // .get('http://cors.io/spreadsheets.google.com/feeds/list/1oV2wxJh54bXS6sixWLqqW1EJnriGRgjwDACIuPnzp9k/od6/public/values?alt=json')
      // .get('http://cors.io/spreadsheets.google.com/feeds/list/1oV2wxJh54bXS6sixWLqqW1EJnriGRgjwDACIuPnzp9k/od6/public/values?alt=json')
      // .get('https://spreadsheets.google.com/feeds/list/1oV2wxJh54bXS6sixWLqqW1EJnriGRgjwDACIuPnzp9k/od6/public/values?alt=json')
      .get('https://cors.io/?https://spreadsheets.google.com/feeds/list/1oV2wxJh54bXS6sixWLqqW1EJnriGRgjwDACIuPnzp9k/od6/public/values?alt=json')
      // .get('https://cors.io/?https://blockchain.info/stats?format=json')
      .then(response => {
          console.warn(response);
        })
        // this.$store.commit('add', resultItems);
      .catch(function(error) {
        // this.$store.commit('error', error);
        // console.log(error);
      });
  }
}
</script>

<style>
</style>

