import fsp from 'fs/promises';

export async function exchange(filepathOne, filepathTwo) {

    try {

      const contentOne = await fsp.readFile(filepathOne, 'utf-8');

      const contentTwo = await fsp.readFile(filepathTwo, 'utf-8');

      await fsp.writeFile(filepathOne, contentTwo);
      await fsp.writeFile(filepathTwo, contentOne);
    } catch (err) {

      console.log(err);
    }
  };

export default exchange;