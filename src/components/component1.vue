<template>
  <div class="com">
    <div>
      name : {{name}}
    </div>
    <div>
      text:{{text}}
    </div>
    <div v-if="postTitle">
      postTitle:{{postTitle}}
    </div>
    <div>
      <button @click="handleChangeName">
        change Name
      </button>
      <button @click="handleEmit">
        emit event
      </button>
    </div>

    <slot>
      default slot conent
    </slot>
    <slot name="nameSlot">
      nameSlot default conent
    </slot>
  </div>

</template>

<script>
  export default {
    name: 'Component1',
    props: {
      name: {
        type: String,
        required: true
      },
      text: {
        type: String,
        default: 'default text'
      },
      postTitle:{
        type: String,
      }
    },
    data() {
      return {}
    },
    methods: {
      handleChangeName() {
        this.$emit('update:name', 'we change name')
      },
      handleEmit() {
        this.$emit('customEvent', 'custom event')
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .com {
    margin: 20px;
  }
</style>
