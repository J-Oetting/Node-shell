const pwd = require('./pwd');
const ls = require('./ls');

process.stdout.write('prompt >');

const pwdVar = process.stdin.on('data', (data) => {

    const cmd = data.toString().trim();
    
  
    if (cmd === 'pwd'){
        
        pwd();
  
    }
  
    else if(cmd === 'ls'){
        
        ls();
    }
    
    else {
  
      process.stdout.write('You typed: ' + cmd);
    }
  
    process.stdout.write('\nprompt >');
  
  });
  module.exports = pwdVar;
  
