$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("hello.feature");
formatter.feature({
  "line": 1,
  "name": "Simple feature for demo purposes",
  "description": "\n As a presenter, I want to convey to my audience the overall\n structure of a gherkin file (i.e. cucumber feature) and carry out\n a canonical hello world example.",
  "id": "simple-feature-for-demo-purposes",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Say hi",
  "description": "",
  "id": "simple-feature-for-demo-purposes;say-hi",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I have a hello app with \"Audience!\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I ask it to say hi",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "it should answer \"Hi audience\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});