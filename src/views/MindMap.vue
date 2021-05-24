<template>
  <div class="app-main">
    <div class="container">
      <textarea class="app-note" name="note" id="note" cols="30" rows="10"></textarea>
    </div>
    <div class="container">
      <div class="app-map"></div>
    </div>
  </div>
</template>

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
</style>
