import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux'

const ListView = ({ setIsDetail }) => {
    const { flights } = useSelector((store) => store.flight)

    const [itemOffset, setItemOffset] = useState(0);


    const itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = flights.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(flights.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % flights.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div className=' p-2  p-md-3 '>
            <table className='table table-dark table-responsive  table-striped mt-3'>
                <thead >
                    <tr>
                        <th className=''>İD</th>
                        <th>Kuyruk Kodu</th>
                        <th>Enlem</th>
                        <th>Boylam</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((f) => (
                        <tr key={f.id}>
                            <th>{f.id}</th>
                            <th>{f.code ? f.code : 'Bilinmiyor'}</th>
                            <th>{f.lat}</th>
                            <th>{f.lng}</th>
                            <td>
                                <button onClick={() => setIsDetail(f.id)} className='btn btn-light'>Detay</button>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
            <div className='paginate'>
                <ReactPaginate className='pagination pagination-sm'
                    pageClassName='page-item'
                    previousClassName='page-item  '
                    nextClassName='page-item  '
                    pageLinkClassName='page-link'
                    nextLinkClassName='page-link'
                    previousLinkClassName='page-link'
                    breakClassName='page-link'
                    activeClassName="active"
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}

                />
            </div>
        </div>
    )
}

export default ListView