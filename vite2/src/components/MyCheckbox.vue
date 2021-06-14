
<template>
  <div>
    <input type="checkbox" :checked="checked" @change="onChange">
  </div>
</template>

<script>
  export default {
    name: 'MyCheckbox',
    props: ['checked'],
    model:{
      prop:'checked',
      event:'change'
    },
    methods: {
      onChange(event) {
        this.$emit('change', event.target.checked)
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
