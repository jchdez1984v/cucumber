package dou;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
    format = "html:target/cucumber-html-report", 
    features = "src/test/java/dou/features"
)
public class RunCukesTest{

}