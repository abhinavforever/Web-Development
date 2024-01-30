async function submitBlog() {
  // Get form data
  const title = document.querySelector("#title").value;
  const content = document.querySelector("#content").value;
  const author = document.querySelector("#author").value;

  const filename = `${title}${author}.txt`;

  // Request access to the file system
  try {
    const handle = await window.showDirectoryPicker();
    const fileHandle = await handle.getFileHandle(filename, { create: true });
    
    // Create a writable stream and write the content
    const writable = await fileHandle.createWritable();
    await writable.write(content);
    await writable.close();

    console.log('File has been written successfully.');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
}

