const express = require("express")

const app = express()

app.use(express.json())
// app.use(express.urlencoded({extended:true}))

app.get("/", (req,res)=>{
    res.send(data)
})


app.post("/addUser", (req,res)=>{
    // let id = {id: Math.random() * 0.542 }
 data = [...data, req.body] 
    res.send(data)
})


app.patch("/updateUser/:name", (req,res)=>{
    let edit = req.body
    // let newData = data.find(item=>item.name == req.params.name ? item : null)

    // // console.log(newData);

   let editedData =  data.map(item=>{
        if(item.name == req.params.name){
         item = edit
        }else{
            return item
        }
        return item
    })

res.send(editedData)

})


app.delete("/deleteUser/:name", (req,res)=>{
    data = data.filter(item=>item.name !=req.params.name)
    res.json(data)
})



// database 😉

let data = [
    {
        name:"matomi",
        age:12,
        country:"France"
    },
    {
        name:"sammy",
        age:12,
        country:"lyon"
    },
    {
        name:"love",
        age:12,
        country:"enwan"
    }
]


app.listen('4000',()=>console.log("server up and runing..."))