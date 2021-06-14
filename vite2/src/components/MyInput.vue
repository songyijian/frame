
<template>
  <div>
    <input type="text" :value="value" @input="onInput">
  </div>
</template>

<script>
  export default {
    name: 'MyInput',
    props: ['value', 'input'],
    methods: {
      onInput(event) {
        console.log(event.target.value);
        this.$emit('update:value', event.target.value)
      }
    },
  }
</script>


<!-- 
  vue2.x
  
  <template>
<div>
  <input type="text" :value="value" @input="onInput">
</div>
</template>

<script>
export default {
  name: 'MyInput',
  props: ['value','input'],
  methods: {
    onInput(event) {
      this.$emit('input',event.target.value)
    }
  },
}
</script> -->
