import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getData } from "./api";
import Dropdown from "./Dropdown";
import { dataProps } from "./interface";
import Pagination from "./Pagination";


const Table = ()=>{

    const {isLoading,isError,data,error} = useQuery('tableData',getData);
    const [itemsPerPage,setItemsPerPage] = useState(5);
    const [currentPage,setCurrentPage] = useState(1);
    
    useEffect(()=>{
        setCurrentPage(1);
    },[itemsPerPage])
    
    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
      return <span>Error: {(error as Error).message}</span>
    }
    const maxPage = data ? Math.ceil(data?.length/itemsPerPage):1;
    const startIndex = (currentPage-1)*itemsPerPage;
    return(
        <>
            <Dropdown setItemsPerPage = {setItemsPerPage}></Dropdown>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>title</th>
                        <th>email</th>
                        <th>role</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.slice(startIndex,startIndex+itemsPerPage)?.map((it:dataProps)=>(
                        <tr>
                            <td>{it.name}</td>
                            <td>{it.title}</td>
                            <td>{it.email}</td>
                            <td>{it.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage = {maxPage}></Pagination>
        </>
        
    );
}

export default Table;