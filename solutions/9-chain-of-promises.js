import fsp from 'fs/promises';

export function getTypes(paths) {

    const promises = paths.map(function(path) {

      return fsp.stat(path).then(function(stats) {

          return stats.isDirectory() ? 'directory' : 'file';
        }).catch(function() { return null; });
    });
  
    return Promise.all(promises);
  };

export default getTypes;