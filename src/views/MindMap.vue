<template>
  <div class="svg-main">
    <div class="svg-zoom">
      <span
        class="svg-zoom__out"
        @click="handleZoomOut"
      >-</span>
      <span class="svg-zoom__num">{{ zoomPercent }}%</span>
      <span
        class="svg-zoom__in"
        @click="handleZoomIn"
      >+</span>
    </div>
    <div class="svg-map">
      <!-- :viewBox='svgView' -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svgContainer"
        version="1.1"
      >
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mindMapData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      svgView: '0 0 567 428',
      zoomPercent: 100,
      zoomVal: 50,
      mindMapDataLocal: []
    }
  },
  mounted () {
    this.mindMapDataLocal = this.mindMapData
    // this.handleDrawMindMap()
  },
  watch: {
    mindMapData: {
      handler (n, o) {
        // this.mindMapDataLocal = []
        this.mindMapDataLocal = n
        this.handleDrawMindMap()
      },
      // immediate: true,
      deep: true
    }
  },
  methods: {
    handleZoomOut () {
      this.zoomPercent -= 20
      this.svgView = this.svgView.split(' ').map(item => Math.round(Number(item) + this.zoomVal)).join(' ')
    },
    handleZoomIn () {
      this.zoomPercent += 20
      this.svgView = this.svgView.split(' ').map(item => Math.round(Number(item) - this.zoomVal)).join(' ')
    },
    handleDrawMindMap () {
      const svg = document.getElementById('svgContainer')
      const treeData = this.mindMapDataLocal
      // const nodeFontS = 14 // 字体大小
      const interval = 80 // 节点左右间隔大小
      const padding = 8 // 节点内部padding
      const marginY = 12 // 节点上下margin
      const borderWidth = 4
      const fontColor = '#fff' // 默认字体颜色
      const borderColor = 'rgba(0, 0, 0, 0)' // 默认边框颜色
      const lineColor = '#55aaee' // 默认连线颜色

      let _svgW = 0
      let _lastNodeN = 0
      const _nodeH = padding * 2 + marginY * 2

      function handleReBuildData (d, parent) { // 树状结构数据重构
        d.forEach((v, i) => {
          v.parent = parent
          if (v.children && v.children.length > 0) {
            handleReBuildData(v.children, v)
            parentY(v, d.length, i)
          } else {
            _lastNodeN = _lastNodeN + 1
            v.y = _lastNodeN
            parentY(v, d.length, i)
          }
        })
      }
      function parentY (lastNode, len, i) { // 计算节点的y坐标
        const parent = lastNode.parent
        if (len === (i + 1) && parent) {
          const s = parent.children[0].y
          parent.y = s + (lastNode.y - s) / 2
        }
      }
      function handleSetSvgContainerSize (w, h) { // 设置svg的宽和高
        svg.setAttribute('width', w)
        svg.setAttribute('height', h)
      }
      function handleBuildSvg (data) { // 生成脑图svg
        data.forEach((v) => {
          buildNode(v)
          if (v.children && v.children.length > 0) {
            handleBuildSvg(v.children)
          }
        })
      }
      function buildNode (node) { // 构建脑图的每个节点 注意渲染顺序
        const gTag = document.createElementNS('http://www.w3.org/2000/svg', 'g')
        const textTag = document.createElementNS('http://www.w3.org/2000/svg', 'text')
        const text = document.createTextNode(node.title)
        textTag.appendChild(text)
        textTag.setAttribute('fill', node.fontColor ? node.fontColor : fontColor)
        textTag.setAttribute('font-weight', 'bold')

        gTag.appendChild(textTag)
        svg.appendChild(gTag)

        const parentx = node.parent ? node.parent.x : 0
        const parentw = node.parent ? node.parent.w : 0
        const intervalNow = node.parent ? interval : 0

        const textH = Math.ceil(textTag.getBBox().height)
        node.w = Math.ceil(textTag.getBBox().width) + padding * 2
        node.x = parentx + parentw + intervalNow + 0
        // insertBefore appendChild prepend append
        gTag.insertBefore(drawBorder(node), textTag)
        svg.prepend(drawLine(node), gTag)
        // 文本居中
        const textW = textTag.getBBox().width
        textTag.setAttribute('x', (node.w - textW - borderWidth * 2) * 0.5)
        if (node.parent) {
          gTag.setAttribute('transform', `translate(${node.x + padding},${node.y * (_nodeH) + textH / 2 - 20})`)
        } else {
          gTag.setAttribute('transform', `translate(${node.x + padding + 20},${node.y * (_nodeH) + textH / 2 - 5})`)
        }
        if ((node.w + node.x) > _svgW) {
          _svgW = node.w + node.x
        }
      }
      function drawBorder (node) { // 画节点的边框
        const fan = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        if (!node.parent) {
          fan.setAttribute('d', getBorderD(node))
        } else {
          fan.setAttribute('d', `M0 ${marginY * 0.5} l${node.w} 0`)
        }
        fan.setAttribute('stroke', node.borderColor ? node.borderColor : borderColor)
        fan.setAttribute('stroke-width', borderWidth)
        fan.setAttribute('stroke-linecap', 'round')
        fan.setAttribute('stroke-linejoin', 'round')
        // fan.setAttribute('fill', node.bgColor ? node.bgColor : 'none')
        fan.setAttribute('fill', '#ccc')
        return fan
      }
      function getBorderD (node) { // 获得节点的d
        return `M0,-17h${node.w - 8}a5,5,0,0,1,5,5v13a5,5,0,0,1,-5,5h-${node.w - 8}a5,5,0,0,1,-5,-5v-13a5,5,0,0,1,5,-5z`
      }
      // matrix(1, 0, 0, 1, 168, 45.5)
      function drawLine (node) { // 为当前节点连线父级节点
        const fan = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        if (!node.parent) {
          return fan
        }
        // svg.appendChild(fan)
        fan.setAttribute('d', getD(node))
        fan.setAttribute('stroke', node.lineColor ? node.lineColor : lineColor)
        fan.setAttribute('stroke-width', borderWidth)
        fan.setAttribute('stroke-linecap', 'round')
        fan.setAttribute('fill', 'none')
        return fan
      }
      function getD (node) { // 获得节点的 d线
        const parent = node.parent
        if (parent.y !== node.y) {
          // return 'M 0 300 Q 100 50 450 50 L 800 50'
          return `M${parent.x + parent.w} ${parent.y * _nodeH} Q${parent.x + parent.w + 40} ${node.y * _nodeH} ${node.x - 20} ${node.y * _nodeH} L${node.x + node.w} ${node.y * _nodeH}`
        } else {
          return `M${parent.x + parent.w} ${parent.y * _nodeH} L${node.x + node.w} ${node.y * _nodeH}`
        }
      }
      // 树状结构数据重构
      handleReBuildData(treeData, null)
      handleBuildSvg(treeData)
      handleSetSvgContainerSize(_lastNodeN * 150, _lastNodeN * _nodeH + borderWidth * 100)
      // handleSetSvgContainerSize(_svgW, _lastNodeN * _nodeH + borderWidth)
    }
  }
}
</script>

<style lang="less" scoped>
.svg-main {
  position: relative;
}
.svg-zoom {
  padding: 0 5px;
  width: auto;
  height: 25px;
  // border: 1px solid #E2E2E2;
  box-shadow: 0px 2px 4px rgb(225 225 225 / 50%);
  color: #eeeeee;
  background: #b4b4b4;
  position: absolute;
  top: 15px;
  right: 15px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.05em;
  outline-style: none;
  word-wrap: break-word;
  > span {
    padding: 0 5px;
  }
  &__out,
  &__in {
    cursor: pointer;
  }
}
</style>
