const Fname="abdul"
const Lname="kawari"

const addName=()=>{
    return `${Fname} rehman ${Lname}`
}
console.log(addName())

const arr1=[-3,-2,-1]
const arr2=[0,1,2,3]

const addArr=()=>{
    const result =[...arr1,...arr2]
    return result
} 
console.log(addArr())


const userData={
    name:"tripal",
    email:"tripal123@gmail.com",
    phone:9887665,
    hasPassedOut:false,
    occupation:undefined

}

const apiResponse={
    ststus:404,
    message:"not found",
    data:{}
}

const thisIsFinalUserData={}
const populateData=()=>{
    if(apiResponse.status ===200 && apiResponse.data){
        thisIsFinalUserData=apiResponse.data
    }else{
        thisIsFinalUserData=userData
        
    }
}

//const filterFalsyVal=()=>{
//     let finalUserData={}
//     for (let key in userData){

//         if (!userData[key]){
//             finalUserData={...finalUserData,[key]:userData[key]}
//         }
        
//     }
//     return finalUserData
//  }

//  console.log(filterFalsyVal())



