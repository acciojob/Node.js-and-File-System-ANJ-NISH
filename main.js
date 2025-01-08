const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the filename: ', (filename) => {
  rl.question('Enter the word to remove: ', (word) => {
    // TODO: Implement this function

    let alldata="";
    fs.readFile(filename, (err, data)=> {
      if(err)
      {
        console.log(err);
      }
      else
      {
        
        alldata+=data.toString();

        let newdata="";

    for(let i=0;i<alldata.length;)
    {
      let newword="";
      while(i<alldata.length && alldata.charAt(i)!==" ")
      {
        newword+=alldata.charAt(i);
        i++;
      }
      if(newword!==word)
      {
        newdata+=newword;
      }
      if(i!==alldata.length)
      {
        newdata+=" ";
      }
      i++;
    }

    fs.writeFile(filename,newdata,(err)=> console.log(err));
        
      }
    });
    
    rl.close();
  });
});
