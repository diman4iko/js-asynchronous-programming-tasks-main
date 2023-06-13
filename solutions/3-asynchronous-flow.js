import fs from 'fs';

// BEGIN
export function compareFileSizes(filepathOne, filepathTwo, callback) {

  fs.stat(filepathOne, function(err, statOne) {

    if (err) {
      callback(err);
      return;
    }

    fs.stat(filepathTwo, function(err, statTwo) {

      if (err) {
        callback(err);
        return;
      }

      const sizeDiff = statOne.size - statTwo.size;
      const result = Math.sign(sizeDiff);
      callback(undefined, result);
    });
  });
}

export default compareFileSizes;
// END