package dou;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefs {
    private String actualMessage;
    private Hello hello;

    @Given("^I have a hello app with \"([^\"]*)\"$")
    public void i_have_a_hello_app_with(String greeting) throws Throwable {
        hello = new Hello(greeting);
    }

    @When("^I ask it to say hi$")
    public void i_ask_it_to_say_hi() throws Throwable {
        actualMessage = hello.sayHi();
    }

    @Then("^it should answer \"([^\"]*)\"$")
    public void it_should_answer(String expectedMessage) throws Throwable {
        assertEquals(actualMessage, expectedMessage);
    }

    class Hello{

        private String greeting;

        public Hello(String greeting){
            this.greeting = greeting;
        }

        public String sayHi(){
            return "Hi " + greeting;
        }
    }
}