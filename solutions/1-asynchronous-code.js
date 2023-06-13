import fs from 'fs';

// BEGIN
const print = async (filePath) => {
//
  try {
//
    const data = await fs.promises.readFile(filePath, 'utf-8');
    console.log(data);

//
  } catch (error) {
//
  
console.log(`Ошибка: ${error}`);
  }
};
//
export default print;
// END