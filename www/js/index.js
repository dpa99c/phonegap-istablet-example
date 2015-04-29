
var app = {
    initialize: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
        document.getElementById('result').innerHTML = 'Device is tablet: ' + window.isTablet;
    }
   
};

app.initialize();