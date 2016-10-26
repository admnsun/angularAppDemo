exports.config = {
    specs: [
        '*.spec.js'
    ],
    framework: 'custom',
    frameworkPath: 'node_modules/protractor-cucumber-framework',
    seleniumAddress: 'http://localhost:4444/wd/hub',
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