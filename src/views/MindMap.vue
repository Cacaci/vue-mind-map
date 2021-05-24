<template>
  <div class="app-main">
    <div class="container">
      <button @click="test">Click Me</button>
      <textarea v-model="markdown" class="app-note" name="note" id="note" cols="30" rows="10"></textarea>
    </div>
    <div class="container">
      <div class="app-map" id="app-map" v-html="markdownHTML"></div>
    </div>
  </div>
</template>

<script>
import marked from '../lib/marked'
export default {
  data () {
    return {
      markdown: '- 1\n   - 2\n   - 3',
      markdownHTML: ''
    }
  },
  watch: {
    markdown: function (n, o) {
      // console.log(n, o)
    }
  },
  methods: {
    test () {
      // { children:[{name:{ children:[{name:2}, {name:3}, ]} }, ]}
      var html = marked(this.markdown)
      this.markdownHTML = html
      console.log(html)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  flex-basis: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.app-main {
  display: flex;
  height: 100%;
  padding: 10px;
}
.app-note, .app-map {
  width: 100%;
  border: 2px solid #ccc;
  padding: 15px;
  border-radius: 4px;
  overflow: auto;
  flex-grow: 1;
  flex-shrink: 1;
  box-sizing: border-box;
}
.app-note {
  resize: none;
  color: #333;
  font-size: 14px;
  box-sizing: border-box;
  outline-color: #42b983;
  transition: all ease .3s;
}
.app-map {
  text-align: left;
}
</style>
