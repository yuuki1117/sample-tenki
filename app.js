// var app = new Vue({
  new Vue({
    el: '#app',
  data: {
    city: null,
    temp: null,
    condition: {
      main: null
    }, 
    isON: true
  },
  beforeUpdate: function(){     
    axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: { q: this.city, APPID: '80f50e9b2ba24c353d1dbcc18c2e4519'}
    })
    .then(function(response){
      this.temp = response.data.main.temp- 273.15      
      this.condition = response.data.weather[0]
      }.bind(this))
    .catch(function(error){
      console.log(error)
    })
  },
  filters: {
    roundUp(value){
      return Math.ceil(value)
    }
  }
})