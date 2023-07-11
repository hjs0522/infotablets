/*
{
        "name": "name2",
        "title": "Front-End Developer",
        "email": "sabastian@grepp.co",
        "role": "Admin"
    },
*/
import { dataProps } from "./interface"

export const getData = async():Promise<dataProps[]>=>{
    const res = await fetch(`http://localhost:3000/data.json`)
    const data = await res.json()
    return data
}
