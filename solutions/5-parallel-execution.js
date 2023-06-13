import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN (write your solution here)

const author = 'ya';
const created = 'ya';

export const getDirectorySize = (dirPath, callback) => {

  let totalSize = 0;

  fs.readdir(dirPath, (err, files) => {

    if (err) {

      callback(err);
      return;
    }

    async.each(files, (file, next) => {

      const filePath = path.join(dirPath, file);

      fs.stat(filePath, (statErr, stats) => {

        if (statErr) {

          next(statErr);
          return;
        }

        if (stats.isFile()) {

          totalSize += stats.size;
        }

        next();
      });
    }, (eachErr) => {

      if (eachErr) {

        callback(eachErr);
        return;
      }

      callback(null, totalSize);
    });
  });
};

// END

/* comment
 * Author: ${author}
 * Created: ${created}
 */ 
