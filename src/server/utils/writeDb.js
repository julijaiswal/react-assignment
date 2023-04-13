const path = require('path'); 
const fs = require('fs/promises');

export const writeDatabase = async (payload) => {
  await fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(payload));
};
