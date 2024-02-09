console.log("Fetching data");
// const res = fetch("https://jsonplaceholder.typicode.com/posts")
// res.then(response=>response.json()).
// then(res=>console.log(res))
// .catch(err=>console.log(err))


const apiCall = async()=>{
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        console.log(data);
    }catch(err){
        console.log(err);
    }finally{
        console.log("Fetch completed");
    }
}

apiCall()
