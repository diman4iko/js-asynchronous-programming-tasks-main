import fs from 'fs';

// BEGIN
export function move(source, destination, callback) {

  fs.readFile(source, function(err, data) {

    if (err) {
      callback(err);
      return;
    }

    fs.writeFile(destination, data, function(err) {

      if (err) {
        callback(err);
        return;
      }

      fs.unlink(source, function(err) {

        if (err) {
          callback(err);
          return;
        }

        callback(null);
      });
    });
  });
}

export default move;

// END