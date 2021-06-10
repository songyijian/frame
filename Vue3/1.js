const app = Vue.createApp({
  data() {
    return { title: `你好 vue3` };
  },
});

app.mount("#app");

const app2 = Vue.createApp({
  data() {
    return { title: `你好 vue3 !` };
  },
});

app2.mount("#app2");
