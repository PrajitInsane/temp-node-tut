const {readFile,writeFile}=require('fs')

readFile('./content/subfolder/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result
    readFile('./content/subfolder/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result
        writeFile('./content/subfolder/third.txt',`Here is the result:${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting with the next task')