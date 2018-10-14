var SSH = require('simple-ssh');
 
var ssh = new SSH({
    host: '192.168.1.213',
    user: 'blue',
    pass: 'chris'
});
 
ssh.exec('echo $PATH', {
    out: function(stdout) {
        console.log(stdout);
    }
}).start();
 
/*** Using the `args` options instead ***/
ssh.exec('echo', {
    args: ['$PATH'],
    out: function(stdout) {
        console.log(stdout);
    }
}).start();