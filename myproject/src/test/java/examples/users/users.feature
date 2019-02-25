Feature: Service testing in Jira using karate as testing tool

    Background:
        * url 'http://localhost:8080'


    Scenario: Subsequent http calls to authenticate, create an issue and delete it afterwards.

        * def user =
        """
        {
            "username": "Juan.hernandez",
            "password": "vico2018"
        }
        """

    Given path 'rest/auth/1/session'
    And request user
    When method post
    Then status 200

    * def id = response.session.value
    Then print id



    * def issue =
    """
    {
    	"fields": {
    		"project": {
    			"key": "RES"
    		},
    		"summary": "credit card defect",
    		"description": "creating my first defect",
    		"issuetype": {
    			"name": "Bug"
    		}
    	}
    }
    """

    * def cookie = "JSESSIONID=<replaceMe>"
    * replace cookie.replaceMe = id

    Given path 'rest/api/2/issue'
    And request issue
    And header Cookie = '#cookie'
    When method post
    Then status 201

    * def issueid = response.id
    * def issuePath = 'rest/api/2/issue/<replaceId>'
    * replace issuePath.replaceId = issueid

    Given path issuePath
    When method delete
    Then status 204

