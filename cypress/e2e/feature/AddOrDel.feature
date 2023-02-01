Feature: Access the Website and Practice Automation
    Scenario: Navigate to the website to practice Add and Del buttons
    Given Go to the url "https://the-internet.herokuapp.com/"
    When I Click on AddDel link
    Then I Click on AddDelButton 3
    When Click on delte button until delete button is visible
