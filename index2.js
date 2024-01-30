//client side logic (index2.js) is written in a different file from server side logic(index.js) otherwise the functions defined in server side logic don't work as expected. This is because it is used to handle Node, express.js work
import fs from 'fs'
function submitBlog(){
    const t=document.querySelector("#title").value
    const c=document.querySelector("#content").value
    const a=document.querySelector("#author").value
    const filename = `${t}${a}.txt`
    fs.writeFile(`database/${filename}`, c, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('File has been written successfully.');
        }
      })
}