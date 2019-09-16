<template>
  <div id="app">
    <div class="main-wrap">
      <Header></Header>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
      Header
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
