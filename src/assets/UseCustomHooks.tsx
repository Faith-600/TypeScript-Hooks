import { useEffect, useMemo, useState } from "react"

interface clothes{
    id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
} 

function useCustomHook(url:string): {
    data:clothes[] ;
    isLoading :boolean;
} {
    const [data,setData] = useState<clothes[]>([]);
    const [isLoading,setIsLoading] = useState(false);



    useEffect(()=> {
     const fecthData = async()=>{
        setIsLoading(true)
        try{
            const response = await fetch(url);
            if(!response.ok){
                console.error('There is an error');
                }
                const result:clothes[]=await response.json();
                setData(result);
        }catch(error){
         console.error('There is an error');
         }finally{
            setIsLoading(false)
         }
        }
        fecthData()
    },[url]);  
    
     return {
        data,
        isLoading
    }
}






function ClothesList() {
    const {data,isLoading} = useCustomHook("https://fakestoreapi.com/products")
    
    const Title = useMemo(()=>
    (data || []).filter((e)=>e.description.includes("bag")),
    [data]
    )
    if(isLoading)return <p>Loading ...</p>

    // const firstItem = data[0]
    if(Title.length===0) return <p>No items found</p>
  return (
    <div>
    <img src={Title[0].image} alt={"clothing item"}/>
      {/* <p>{firstItem.title}</p> 
     <p>${firstItem.price}</p>  */}
     </div>
  )
}

// export default UseCustomHooks


export default ClothesList