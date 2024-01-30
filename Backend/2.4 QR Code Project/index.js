/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// Read the URL from the file
const url = fs.readFileSync('url.txt', 'utf-8').trim();

// Generate the QR code
const qrCode = qr.image(url, { type: 'png' });

// Save the QR code to a file or display it as needed
qrCode.pipe(fs.createWriteStream('qrcode.png'));

console.log('QR code generated successfully!');



// // Define the inquirer prompt for the URL
// const urlPrompt = {
//   type: 'input',
//   name: 'url',
//   message: 'Enter the URL to generate a QR code:',
// };

// // Prompt the user for the URL
// inquirer.prompt(urlPrompt).then((answers) => {
//   // Get the URL from user input
//   const url = answers.url;

//   // Generate the QR code
//   const qrCode = qr.image(url, { type: 'png' });

//   // Save the QR code to a file or display it as needed
//   qrCode.pipe(fs.createWriteStream('qrcode.png'));

//   console.log('QR code generated successfully!');
// });
