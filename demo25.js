const UserData=[{
    Id:1, name:"abdul", gender:"male", age:20, occupation:undefined},
    {Id:2, name:"rabina", gender:"female", age:21, occupation:"manager"},
    {Id:3, name:"sabina", gender:"female", age:20, occupation:"SWE"},
    {Id:3, name:"rabin", gender:"male", age:19, occupation:"intern"},
    {Id:4, name:"nabin", gender:"male", age:18, occupation:undefined}

]

const response={
    status:200,
    message:"User data fetched succuessfully",
    data:UserData
}

const fetchUserNames=()=>{
    if(response.status ===200){
        const result=response.data
        .filter ((user)=>user.occupation !== undefined)
        .map((user)=> user.name)
        return result
    }else{
        const message="Api fetch failed"
        return message
    }
}
console.log(fetchUserNames())