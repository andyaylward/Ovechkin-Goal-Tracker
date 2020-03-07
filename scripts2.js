// ._/ ._/ ._/ ._/ ._/ ._/ ._/ ._/ ._/ ._/ ._/ ._/ ._/ ._/ ._/ 
// 2019 / 2020 Season
var request1920 = new XMLHttpRequest()
request1920.open('GET', 'https://statsapi.web.nhl.com/api/v1/people/8471214/stats/?stats=statsSingleSeason&season=20192020', true)
request1920.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  var Goals1920 = data.stats[0].splits[0].stat.goals;
  console.log("Ovi Total Goals: " + (658 + Goals1920));
  goals = document.getElementById("goals");
  goals.innerHTML = 895 - (658 + Goals1920);
  console.log(Goals1920);
}

request1920.send()