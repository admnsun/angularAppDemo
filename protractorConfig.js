exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    frameworkPath: 'node_modules/protractor-cucumber-framework',
    capabilities: {
        'browserName': 'chrome'
    },
    specs: [
        'features/*.feature'
    ],
   
    
    cucumberOpts: {
       // require: '*.spec.js',
        format: 'pretty'
    },
   // resultJsonOutputFile: 'report.json',
   // onPrepare: function(){
     //   browser.driver.manage().window().maximize();
       // browser.ignoreSynchronization = false;
       // browser.getCapabilities().then(function (cap){
       //     browserName = cap.caps_.browserName;
       // });
   // }
};