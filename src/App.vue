<template>
  <div id="app">
    <navbar />
    <!--追加 -->
    <page1 />
    <page2 />
    <page3 />
    <contact />
    <Footer />
  </div>
</template>

<script>
  import navbar from './components/Navbar.vue' //追加
  import page1 from './views/page1.vue'
  import page2 from './views/page2.vue'
  import page3 from './views/page3.vue'
  import contact from './views/contacts.vue'
  import Footer from './views/footer.vue'
  
  export default {
    name: 'app',
    components: {
      page1,
      page2,
      page3,
      contact,
      navbar,
      Footer
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 40px; /*追加*/
  }
  /*以下追加*/
  #page1 {
    padding-top: 40px;
  }
  #page2 {
    padding-top: 40px;
  }
  #page3 {
    padding-top: 40px;
  }
  #page4 {
    padding-top: 40px;
  }
</style>