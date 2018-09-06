<template>
  <div class="hello">
    <!-- <router-link to="/index/my">测试一下</router-link> -->
    <button @click="jump">测试</button>
    <button @click="jumpT">测试同级</button>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'xxx'
    }
  },
  methods: {
    jump () {
      this.$router.push({ path: '/index/my' })
    },
    jumpT () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
