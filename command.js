const { exec } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function executeCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        reject(`Error: ${stderr}`);
        return;
      }
      resolve(stdout);
    });
  });
}

async function runCommandLine() {
  try {
    console.log('Command Line Interface Started');
    console.log('Type "exit" to quit');
    
    while (true) {
      const command = await new Promise(resolve => {
        rl.question('> ', (answer) => {
          resolve(answer);
        });
      });
      
      if (command.toLowerCase() === 'exit') {
        console.log('Exiting...');
        break;
      }
      
      try {
        const result = await executeCommand(command);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  } finally {
    rl.close();
  }
}

if (require.main === module) {
  runCommandLine();
}

module.exports = {
  executeCommand
};