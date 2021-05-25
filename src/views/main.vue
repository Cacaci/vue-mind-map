<template>
  <div class="app-main">
    <div class="container">
      <button
        @click="test"
        style="margin-bottom: 5px;"
      >Click Me</button>
      <textarea
        v-model="markdown"
        class="app-note"
        name="note"
        id="note"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="container">
      <div
        class="app-map"
        id="app-map"
      >
        <mind-map :mindMapData='mindMapData' />
      </div>
    </div>
  </div>
</template>

<script>
import marked from '../lib/marked'
import MindMap from './MindMap'
export default {
  components: {
    MindMap
  },
  data () {
    return {
      markdown: '- 1\n   - 2\n   - 3',
      markdownHTML: '',
      mindMapData: [
        {
          title: 'Front end tech',
          borderColor: '#55aaee',
          children: [
            {
              title: 'Compiler/language',
              lineColor: 'red',
              children: [
                { title: 'Elm', lineColor: 'red' },
                { title: 'Svelte', lineColor: 'red' },
                { title: 'ClojureScript', lineColor: 'red' }
              ]
            },
            {
              title: 'Reactive framework',
              lineColor: 'yellow',
              children: [
                { title: 'React', lineColor: 'yellow' },
                { title: 'Vue', lineColor: 'yellow' }
                // { title: 'Vue', lineColor: 'yellow' },
                // { title: 'Vue', lineColor: 'yellow' },
                // { title: 'Vue', lineColor: 'yellow' },
                // { title: 'Vue', lineColor: 'yellow' },
                // { title: 'Vue', lineColor: 'yellow' },
                // {
                //   title: 'Angular',
                //   lineColor: 'yellow',
                //   children: [
                //     { title: 'Angular1.x' },
                //     { title: 'Angular2.x' }
                //   ]
                // }
              ]
            },
            {
              title: 'packager',
              children: [
                { title: 'Webpack' },
                { title: 'Snowpack' }
              ]
            }
          ]
        }
      ]
    }
  },
  watch: {
    markdown: function (n, o) {
      console.log(n, o)
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
  box-sizing: border-box;
}
.app-note,
.app-map {
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
  transition: all ease 0.3s;
}
.app-map {
  text-align: left;
  background-color: #333;
}
</style>
