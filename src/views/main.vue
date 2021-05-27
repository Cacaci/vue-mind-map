<template>
  <div class="app-main">
    <div class="container">
      <!-- <button
        @click="handleRebuildMindMap"
        style="margin-bottom: 5px;"
      >Click Me</button> -->
      <textarea
        v-model="markdown"
        @input="handleRebuildMindMap"
        class="app-note"
        :class="{'error-status': hasErrInput}"
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
        <mind-map :mindMapTree='mindMapTree' />
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
      hasErrInput: false,
      markdown: '- Front end tech\n   - Compiler/language\n   - Reactive framework\n      - React\n      - Vue\n         - vue2.X\n   - packager\n      - Webpack\n      - Snowpack',
      mindMapTree: [
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
  mounted () {
    this.handleRebuildMindMap()
  },
  methods: {
    // 将行内容反序列化成 NTree
    handleListToTree (nodes) {
      var firstNode = nodes.shift()
      for (let i = 0; i < nodes.length; i++) {
        if (firstNode.parent - 1 === nodes[i].parent) {
          if (!nodes[i].children) {
            nodes[i].children = [firstNode]
          } else {
            nodes[i].children.unshift(firstNode)
          }
          break
        }
      }
      if (nodes.length > 1) {
        this.handleListToTree(nodes)
      }
    },
    // 删除错误的节点
    handleDeleteNode (nodes, nodeId) {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] && nodes[i].id === nodeId) {
          nodes.splice(i, 1)
          break
        } else {
          if (nodes[i].children && nodes[i].children.length > 1) {
            this.handleDeleteNode(nodes[i].children, nodeId)
          }
        }
      }
      return nodes
    },
    // 简易版解析方法 TODO: 容错优化
    handleRebuildMindMap () {
      let errNodeId = 0
      const lines = this.markdown.split(/\n/gi)
      try {
        const nodes = lines.map((item, index) => {
          const parent = item.split('- ')[0].length / 3
          const title = item.replace(/\s*-\s/, '')
          const id = index + 1
          // 正整数整除
          if (!(/^([1-9][0-9]*|0)$/.test(parent) && /^\s*-\s/g.test(item))) {
            errNodeId = id
            throw new Error(`error input in line${id}`)
          }
          return {
            id,
            parent,
            title
          }
        }).sort((a, b) => b.id - a.id)
        this.mindMapTree = nodes
        this.handleListToTree(nodes)
        this.hasErrInput = false
      } catch {
        const copyTree = this.handleDeleteNode(this.mindMapTree.slice(), errNodeId)
        this.mindMapTree = copyTree
        this.hasErrInput = true
      }
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
  outline: none;
  border-width: 4px;
  border-style: solid;
  border-color: #42b983;
  transition: all ease 0.3s;
  &.error-status {
    border-color: #ff4d4f;
  }
}
.app-map {
  text-align: left;
  background-color: #333;
  border: 4px solid #ccc;
}
</style>
