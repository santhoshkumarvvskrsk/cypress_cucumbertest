Feature: Access the Website and Practice Automation
    Scenario: Navigate to the website to practice to disappearing elements
    Given Go to the url to test disappearing elements "https://the-internet.herokuapp.com/"
    When I Click on disappearing elements link
    When I Click on Home button
    Then Disappearing elements links should be displayed
    When again click on Disappearing elements
    Then About menu should be displayed
    When I click on About menu
    Then Validate Not Found should be displayed and redirect to "https://the-internet.herokuapp.com/disappearing_elements"
    When I click on Contact us menu
    Then Validate Not Found
