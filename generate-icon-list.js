const fs = require('fs');
const path = require('path');

const iconsDirectory = path.join(__dirname, 'stories/assets/bootstrap');
const outputPath = path.join(__dirname, 'stories/assets/icon-list.json');

fs.readdir(iconsDirectory, (err, files) => {
  if (err) {
    console.error('Failed to list directory contents:', err);
    return;
  }
  const svgFiles = files.filter(file => file.endsWith('.svg'));
  fs.writeFileSync(outputPath, JSON.stringify(svgFiles), 'utf8');
  console.log('Icon list generated:', svgFiles);
});
