import { useState } from "react";
interface pageProps{
    currentPage:number;
    setCurrentPage:React.Dispatch<React.SetStateAction<number>>;
    maxPage:number;
}

const Pagination = ({currentPage,setCurrentPage,maxPage}:pageProps)=>{

    
    const changePage = (newPage:number)=>{
        setCurrentPage(newPage);
    }
    
    const firstPage = ()=>{
        setCurrentPage(1)
    }
    
    const lastPage = () =>{
        setCurrentPage(maxPage)
    }
    return(
        <div id={"pagination"}>
            <button className="arrow" onClick={firstPage} disabled={currentPage === 1}>{"<<"}</button>
            {Array.from({length: maxPage}, (_, i) => i + 1).map((page) => 
            <button key={page} onClick={() => changePage(page)} disabled={currentPage === page} className={currentPage === page? 'arrow':''}>{page}</button>
            )}
            <button className="arrow" onClick={lastPage} disabled={currentPage === maxPage}>{'>>'}</button>
        </div>
    );
}

export default Pagination;