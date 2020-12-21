import Express from 'express'
import ejs from 'ejs'

const App = Express()
App.use(Express.json())
App.use(Express.urlencoded({extended:false}))

interface ImageInfo{
    Url:string
}

App.post("/", (req, res) => {
    const Images:Array<ImageInfo> | undefined = req.body.Images || undefined
    if(Images == undefined){ res.set(400).send("Invalid Body");return}

    
})