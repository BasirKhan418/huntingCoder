// res.status(200).json(JSON.parse(data));
import * as fs from "fs";
export default function handler(req, res) {
  fs.readFile(`blogsdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    if(err){
      res.status(404).json({ error: "No such blog found" });
    }
    else{
        console.log(req.query.slug);
        res.status(200).json(JSON.parse(data));
    }  
  });
}
