function Paginate({total, page, setPage}){
    const pageSelectors= []
    
    for(let i=1; i<=Math.ceil(total/10); i++){
        pageSelectors.push(
            <button className={i===page? "active": ""} onClick={()=>setPage(i)}>{i}</button>
        )
    }

    return(
        <div>
            <button disabled={page===1} onClick={()=>setPage(1)}>{"<<<"}</button>
            <button disabled={page===1} onClick={()=>setPage((page)-1)}>{"<"}</button>
            {pageSelectors}
            <button disabled={page===Math.ceil(total/10)} onClick={()=>setPage((page)+1)}>{">"}</button>
            <button disabled={page===Math.ceil(total/10)} onClick={()=>setPage(Math.ceil(total/10))}>{">>>"}</button>
        </div>
    )
}

export default Paginate;