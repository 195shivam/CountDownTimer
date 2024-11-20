const timer=(c)=>{
        const timeId=setInterval(()=>{
            if(c>0){
                console.log(c--)
            }
            else{
                console.log("Time Up!!")
                clearInterval(timeId)
            }
        },1000)
    
}
timer(10)