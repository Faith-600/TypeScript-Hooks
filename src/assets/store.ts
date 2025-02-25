import { createContext } from "react";

const initialType = {
    first:"Faith",
    last:"Ezekiel"
} 

const context = createContext<typeof initialType>(initialType)
export default context