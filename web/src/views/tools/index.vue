<template>
  <h1>basic calculator</h1>
  <h2>{{ test }}</h2>
  <div id="calculator-container">
    <div>AC</div>
    <div>+/-</div>
    <div>%</div>
    <div>➗</div>

    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>✖️</div>

    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>-</div>

    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>+</div>

    <div>0</div>
    <div></div>
    <div>.</div>
    <div>=</div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const test = ref('victor');
</script>
<style scoped>
#calculator-container {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-auto-rows: 200px;
  /* grid: repeat(2, 60px) / auto-flow 80px; */
}

#calculator-container > div {
  background-color: #aaafff;
  width: 50px;
  height: 50px;
}
</style>
