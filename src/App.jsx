import { useState, useEffect } from 'react'
import Header from './components/Header'
import MapView from './pages/MapView'
import ListView from './pages/ListView'
import { useDispatch } from 'react-redux'
import { getFlights } from './redux/actions'
import Modal from './components/Modal'

const App = () => {
  const [isView, setIsView] = useState(true);
  const [isDetail, setIsDetail] = useState(null);



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlights())
  }, [])
  console.log(isDetail);
  return (
    <div>
      <Header />

      {/* View Selector */}
      <div className='view-buttons'>
        <button onClick={() => setIsView(true)}
          className={isView ? 'activ  ' : 'btn btn-light '}>Harita Görünümü</button>
        <button onClick={() => setIsView(false)} className={isView ? 'btn btn-light' : 'activ'}>Liste  Görünümü</button>
      </div>

      {/* View Screen */}
      {isView ? <MapView setIsDetail={setIsDetail} /> : <ListView setIsDetail={setIsDetail} />}

      {/* Model control */}
      {isDetail && <Modal detailId={isDetail} close={() => setIsDetail(null)} />}

    </div>

  )
}

export default App