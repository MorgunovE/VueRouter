<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">VUE-CLI</div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <router-link class="navbar-link" :to="link.url" :title="link.title">{{link.title}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      links: [
        {title: 'Home', url: '/'},
        {title: 'Shop', url: '/shop'},
      ],
    }
  },
  methods: {
  
  },
  computed: {
  
  },
}
</script>

<style lang="scss">
 .navbar-link {
   &.router-link-exact-active {
     color: #5247e7;
   }
 }
</style>
