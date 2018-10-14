var SSH = require('simple-ssh');
 
var ssh = new SSH({
    host: '192.168.1.213',
    user: 'blue',
    pass: 'chris'
});
 
ssh.exec('taskkill /IM notepad.exe /F', {
    out: function(stdout) {
        console.log(stdout);
    }
}).start();