import React from "react";

interface DropdownProps{
    setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const Dropdown = ({setItemsPerPage}:DropdownProps)=>{
    //현재는 5개 15개씩 보여지는 옵션만 있음
    let options = [5,15];
    
    return(
        <div id={"dropdown"}>
            <select  onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{setItemsPerPage(Number(e.target.value))}}>
                {options.map(it =>(
                    <option value={it}>{`${it}개씩`}</option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;