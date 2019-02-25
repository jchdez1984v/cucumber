Feature: Simple feature for demo purposes

   As a presenter, I want to convey to my audience the overall
   structure of a gherkin file (i.e. cucumber feature) and carry out
   a canonical hello world example.

   Scenario: Say hi

      Given I have a hello app with "audience!"
      When I ask it to say hi
      Then it should answer "Hi audience!"