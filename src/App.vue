<template>
  <div id="app">
    <div class="main-wrap">
      <Header></Header>
      <Mainbody></Mainbody>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Mainbody from './components/Mainbody'

export default {
  name: 'app',
  components: {
      Header,
      Mainbody
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
label {
  vertical-align: middle;
}
</style>
