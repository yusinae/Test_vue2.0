<template>
  <section class="about">
    <h1>업무</h1>
    <div>count : {{ $store.state.sampleModule.count }}</div>
    <div>
      <button @click="$store.commit('sampleModule/increment')">+</button>
    </div>
  </section>
</template>
