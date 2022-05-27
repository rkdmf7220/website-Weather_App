<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');
@import "assets/scss/reset.scss";
#app {
  max-width: 1200px;
  margin: 0 auto;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.white{
  color: white;
}
.gray1{
  color: #eeeeee;
}
.gray2{
  color: #bbbbbb;
}
.gray3{
  color: #666666;
}
.gray4{
  color: #333333;
}
.coral{
  color: #FF6F61;
}
.yellow{
  color: #FFAD33;
}
.green{
  color: #23E05C;
}
.blue-bell{
  color: #85B6FD;
}
h1{
  font-size: 40px;
}
h2{
  font-size: 64px;
  line-height: 1em;
}
.small-text{
  font-size: 0.875rem;
  line-height: 0.875rem;
}
</style>
