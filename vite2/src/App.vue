<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />

  <!-- <MyInput :value=text @input="couser=$event" /> -->
  <!-- v-model 是 :value + @input 的简写 -->
  <MyInput v-model=text></MyInput>
  <MyCheckbox v-model=check></MyCheckbox>

  <p>{{text}} - {{check}}</p>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyInput from './components/MyInput.vue'
import MyCheckbox from './components/MyCheckbox.vue'

export default {
  data(){
    return {
      course: 'course',
      text:'text',
      check:true
    }
  },
  name: 'App',
  components: {
    HelloWorld,
    MyInput,
    MyCheckbox
  },
  methods: {
    change(a) {
      console.log(a);
    }
  },
}
</script>
