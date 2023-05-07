import * as fs from "fs";
export default async function handler(req, res) {
    let data = await fs.promises.readdir("blogsdata");
    let myfile;
    let allblogs =[];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        myfile = await fs.promises.readFile(('blogsdata/'+item),"utf-8")
        allblogs.push(JSON.parse(myfile))
    }
    res.status(200).json(allblogs)
}

