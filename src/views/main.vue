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
import MindMap from './MindMap'
export default {
  components: {
    MindMap
  },
  data () {
    return {
      markdown: '- Front end tech\n   - Compiler/language\n   - Reactive framework\n      - React\n      - Vue\n         - vue2.X\n   - packager\n      - Webpack\n      - Snowpack',
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
  methods: {
    test () {
      var nodes = this.markdown.split(/\n/gi)
      var _nodes = nodes.map((item, index) => ({
        id: index + 1,
        parent: item.split('- ')[0].length / 3,
        title: item.replace(/\s*-\s/g, '')
      })).sort((a, b) => b.id - a.id)

      function handleListToTree (_nodes) {
        var firstNode = _nodes.shift()
        for (let i = 0; i < _nodes.length; i++) {
          if (firstNode.parent - 1 === _nodes[i].parent) {
            if (!_nodes[i].children) {
              _nodes[i].children = [firstNode]
            } else {
              _nodes[i].children.push(firstNode)
            }
            break
          }
        }
        if (_nodes.length > 1) {
          handleListToTree(_nodes)
        }
      }
      handleListToTree(_nodes)
      console.log(_nodes)
      this.mindMapData = _nodes
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
