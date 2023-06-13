import fsp from 'fs/promises';

export function touch(filepath) {

    return fsp.access(filepath).catch(function() { return fsp.writeFile(filepath, ''); });
  };

export default touch;