this.Given("The user is on the homepage", function (done){
    browser.get('http://127.0.0.1:8080/');
    browser.driver.wait(browser.driver.FindElement(h1).then(function (h1){
        return h1;
    }));
});
this.Then("I should see a header that reads Automobile Comparison Shopping", function(done){
    expect(browser.driver.FindElement(h1)).toEqual('Automobile Comparison Shopping');
});