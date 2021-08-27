    document.querySelector(".hidden-icon i").addEventListener("click" , ()=>{
        document.querySelector(".hidden-icon i").classList.add("anime")
        console.log(1)
        
        setTimeout(()=>{
            document.querySelector(".hidden-icon i").classList.remove("anime")
            document.querySelector(".hidden-icon i").classList.toggle("ti-view-list")
            document.querySelector(".hidden-icon i").classList.toggle("ti-close")
            document.querySelector(".mainmenu").classList.toggle("menubars")
        }, 250)
    })

    setTimeout(()=>{
        document.querySelector(".spinner").classList.add("none")
        document.querySelector("#wifi-loader").classList.add("none")
        document.querySelector(".mainsddsdgfgfdgdfg").classList.remove("none")
        }, 4500)

 
    
    

