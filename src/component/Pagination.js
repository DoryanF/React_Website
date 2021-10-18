const Pagination = ( {page,setPage} ) => (
    <nav aria-label="Page navigation example">
        <ul className="pagination justify-conten-center">
            <li className={"page-item " + (page===1?"disabled":null)}>
                <a className="page-link" onClick={() => setPage(page-1)} href="#">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" onClick={() => setPage(page)}>{page}</a></li>
            <li className="page-item"><a className="page-link" onClick={() => setPage(page+1)}>{page+1}</a></li>
            <li className="page-item"><a className="page-link" onClick={() => setPage(page+2)}>{page+2}</a></li>
            <li className="page-item">
                <a className="page-link" onClick={() => setPage(page+1)} href="#">Next</a>
            </li>
        </ul>
    </nav>
)

export default Pagination