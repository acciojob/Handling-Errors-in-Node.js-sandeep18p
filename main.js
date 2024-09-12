const fs = require('fs');
const path = require('path');

// Get the file path from command-line arguments
const filePath = process.argv[2];

// Function to read and print file contents
const readFile = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Print error message if file cannot be read
      console.error(`Column '${path.basename(filePath)}' not found in the CSV.`);
      return;
    }
    // Print file contents to console
    console.log(data);
  });
};

// Check if file path is provided
if (!filePath) {
  console.error('Please provide a file path as a command-line argument.');
  process.exit(1);
}

// Read and print file contents
readFile(filePath);
