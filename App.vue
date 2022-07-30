<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div>
  <b-card-group cols="3" cols-sm="4" cols-md="6" cols-lg="7">
    <b-card v-for="weather of weatherList" v-bind:key="info.date">
      <b-card-title>{{ weather.date | moment }}</b-card-title>
      <b-card-text>
        <ul>
          <li class="small text-muted">{{ weather.weather_state }}</li>
          <li><img v-bind:src="weather.image_url" /></li>
          <li class="small text-muted mt-3">気温</li>
          <li>最高 {{ weather.max_temp | roundUp }}°C</li>
          <li>最低 {{ weather.min_temp | roundUp }}°C</li>
          <li class="small text-muted mt-2">湿度</li>
          <li>{{ weather.humidity }}％</li>
          <li class="small text-muted mt-2">風速</li>
          <li>{{ weather.wind_speed | roundUp }}mph</li>
        </ul>
      </b-card-text>
    </b-card>
  </b-card-group>
</div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
