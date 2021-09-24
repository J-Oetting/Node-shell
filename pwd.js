const pwdVar = process.stdin.on('data', (data) => {

  const cmd = data.toString().trim();
  

  if (cmd === 'pwd'){

    process.stdout.write(process.cwd());

  }

  else if(cmd === 'ls'){
    require('./ls');
  }
  
  else {

    process.stdout.write('You typed: ' + cmd);
  }

  process.stdout.write('\nprompt >');

});
module.exports = pwdVar;


