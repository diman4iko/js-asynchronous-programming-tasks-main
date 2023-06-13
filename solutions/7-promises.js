import fsp from 'fs/promises';

export async function reverse(filepath) {
    try {
      const content = await fsp.readFile(filepath, 'utf-8');
      const lines = content.trim().split('\n').reverse().join('\n');
      await fsp.writeFile(filepath, lines);
      const result = await fsp.readFile(filepath, 'utf-8');
      return result.trim().split('\n');
    } catch (error) {
      throw new Error(`Error processing file ${filepath}: ${error.message}`);
    }
  };
  
export default reverse;