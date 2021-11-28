<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">VUE-CLI</div>
            <ul class="navbar-list">
              <li class="navbar-item">
                <a class="navbar-link">Home</a>
              </li>
              <li class="navbar-item">
                <a class="navbar-link">Example</a>
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
    return { }
  },
  methods: {
  
  },
  computed: {
  
  },
}
</script>

<style>

</style>
