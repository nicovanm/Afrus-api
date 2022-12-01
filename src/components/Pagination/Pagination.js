import React, {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = ()=>{
    setWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize', updateDimension);
    return () => window.removeEventListener('resize', updateDimension);
  }, []);

  return (
    <>
    <style jsx>
      {`
        @media (max-width: 768px){
          .next, .prev{
            display:none;
            color: #fff;
          }

          .pagination{
            
            font-size: 14px;
          }
        }
      `}
    </style>
      <ReactPaginate
      forcePage={pageNumber === 1? 0 : pageNumber -1}
        pageCount={info?.pages}
        className="pagination justify-content-center gap-4 my-4"
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName="btn btn-primary next"
        previousClassName="btn btn-primary prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        activeClassName="active"
        onPageChange={(data)=>{
          setPageNumber(data.selected + 1)
        }}
      />
    </>
  );
};

export default Pagination;
