<template>
  <div>
    this is root contains children layout
    <div>
      <router-link to="/hello">Go to hello</router-link>
      <router-link to="/router2">Go to router2</router-link>
    </div>

    <div id="app">
      <router-view></router-view>
    </div>

    <div v-if="showSideBar" style="background-color: greenyellow;height: 100px">this is SideBar</div>
    <div v-if="loading">
      <div>
        <div class="loader"></div>
      </div>
    </div>
    <div>
      <button @click="handlesideBar">
        toggle side bar
      </button>
    </div>
    <div>
      <button @click="handleloading">
        loadding data
      </button>
    </div>

  </div>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['showSideBar', 'loading'])
    },
    methods: {
      ...mapMutations(['SIDEBAR']),
      ...mapActions(['getData']),
      handlesideBar() {
        this.SIDEBAR(!this.showSideBar)
      },
      handleloading() {
        this.getData()
      }
    },
    mounted() {
      this.$router.push({path: 'hello'})
    }
  }
</script>

<style scoped>
  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
