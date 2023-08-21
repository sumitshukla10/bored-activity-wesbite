let url="https://www.boredapi.com/api/activity";
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let task= await getActivity();
    let p=document.querySelector("#result");
    p.innerText=task;
})

async function getActivity(){
    try{
        let res=await axios.get(url);
        return res.data.activity;
    
    }catch(e){
        console.log("Error is : ",e);
        return "Sorry it seems your connection is weak";
    }
}