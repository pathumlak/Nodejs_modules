//file system 
import * as fs from "fs/promises";


//creating dir
//if the path is correct then create otherwise can't 
// try {
//     await fs.mkdir('c:\\pathum')
//     console.log("folder created");
    
// } catch (error) {
//     console.log(error);


    
// }

//if there is not exist folder then using recursive then automatically create

// try {
//     await fs.mkdir('c:\\pathum\\hehe\\hoho', {recursive: true} )
//     console.log("folder created");
    
// } catch (error) {
//     console.log(error);
// }


//read the content
// try {
//     const files =  await fs.readdir('c:\\pathum')
//     for (const file of files) {
//         console.log(file);
        
//     }

    
// } catch (error) {
//     console.log(error);
// }

//remove last folder

// try {
//    await fs.rmdir("c:\\pathum\\hehe\\hoho");
    
// } catch (error) {
//     console.log(error);
// }

//create and write files
// try {
//     await fs.writeFile('Readme.md',"hello world")
// } catch (error) {
//     console.log(error);
    
// }

//read file
// try {
//     const data = await fs.readFile('Readme.md',"utf-8")//now see the actual thing unsing utf-8
//     console.log(data);//then read the buffer data
    
// } catch (error) {
//     console.log(error);
    
// }

//append the data
// try {
//     await fs.appendFile("Readme.md", "\n node js is the best")
    
// } catch (error) {
//     console.log(error);
    
// }


//copying the file

// try {
//    await fs.copyFile("Readme.md" , "info.txt")
    
// } catch (error) {
//     console.log(error);
    
// }

//get file information
try {
    const info = await fs.stat("info.txt")
    console.log(info);//get the details
    console.log(info.isDirectory());
    console.log(info.isFile());

    
} catch (error) {
    console.log(error);
    
}