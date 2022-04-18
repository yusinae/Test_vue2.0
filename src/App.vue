<template>
  <div id="app">
    <nav>
      <router-link to="/">홈</router-link> |
      <router-link to="/project">프로젝트</router-link> |
      <router-link to="/workreport">업무</router-link> |
      <router-link to="/electapprov">결제</router-link> |
      <router-link to="/vacation">휴가</router-link> |
      <router-link to="/personnel">인사카드</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
