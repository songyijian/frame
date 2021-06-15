<template>
<div>
  <input type="text" :value="value" @input="onInput">
</div>
</template>

<script>
export default {
  name: 'MyInput',
  props: ['value'],
  methods: {
    onInput(event) {
      this.$emit('input',event.target.value)
    }
  },
}
</script>
