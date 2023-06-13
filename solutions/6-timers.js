import fs from 'fs';

export function stalker (filepath, interval, callback) {

    let lastCheckTime = Date.now();
  
    const timerId = setInterval(function() {

      fs.stat(filepath, function(err, stats) {

        if (err) {

          clearInterval(timerId);
          callback(err);
          return;
        }
        if (stats.mtimeMs > lastCheckTime) {

          lastCheckTime = stats.mtimeMs;
          callback(null);
        }
      });
    }, interval);
  
    return timerId;
  };

export default stalker;