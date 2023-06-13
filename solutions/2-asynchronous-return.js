import fs from 'fs';

// BEGIN
export function write(path, data, callback) {

    fs.writeFile(path, data, function (error) {

      if (error) {

        console.log(`Ошибка: ${error}`);
      } else {

        callback();
      }
    });
  };
  
  export default write;
// END