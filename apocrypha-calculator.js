  var tf = game.religion.faith;
  // TF being your current total praised faith.
  var ap =  0.000001
  // base Apocrypha Points total.
  var tt = game.religion.tclevel
  // Transendence Tier
  var app = (Math.pow((tt + 1), 2) * (ap * tf)) * 1.01;
  // Apocrypha Points Pool
  var x = ((Math.sqrt(1 +80 * app) - 1) *5);
  // Total Faith Praising Bonus
  alert(`Your Faith Percent Bonus is ${x}.`);
