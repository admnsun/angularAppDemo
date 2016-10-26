Feature: Map requirement to System test
    As the TSO, I want to map requirements to the unit test,
    so that patterns for behavior driven testing can be established.

Scenario: Blue Ribbon Bar test
    Given the Customer is on the 'Welcome' page
    When the blue Ribbon Bar displays the GET ID CARDS link,
    And YOUR LOYALTY REWARDS link
    And CLAIMS SERVICE link
    Then consider the blue Ribbon Bar complete