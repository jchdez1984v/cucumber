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
  "name": "I have a hello app with \"audience!\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I ask it to say hi",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "it should answer \"Hi audience!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "audience!",
      "offset": 25
    }
  ],
  "location": "StepDefs.i_have_a_hello_app_with(String)"
});
formatter.result({
  "duration": 70464164,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_ask_it_to_say_hi()"
});
formatter.result({
  "duration": 48657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hi audience!",
      "offset": 18
    }
  ],
  "location": "StepDefs.it_should_answer(String)"
});
formatter.result({
  "duration": 1246837,
  "status": "passed"
});
});