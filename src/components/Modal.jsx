import React, { useEffect, useState } from 'react'
import { dOptions } from '../constans';
import axios from 'axios';
import formatDate from '../utlis/formatDate';
import { useDispatch } from 'react-redux';
import { setPath } from '../redux/slices/flightSlice';
import c from '../utlis/chekValid';

const Modal = ({ detailId, close }) => {
    const [d, setDetail] = useState(null);

    const dispatch = useDispatch()

    useEffect(() => {
        setDetail(null)
        axios.get(`https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`, dOptions)
            .then((res) => {
                setDetail(res.data);
                dispatch(setPath(res.data.trail))
            })
    }, [detailId])

    console.log(d);
    return (
        <div className='detail-outer'>
            <div className='detail-inner'>
                <div className='close-wrapper'>
                    <button onClick={close} className='btn btn-close bg-light '></button>
                </div>

                {!d ? (
                    <div className='loader-wrapper'>
                        <div className="loader">
                            <span></span>
                        </div>
                    </div>)
                    : (<>
                        <h2>{c(d.aircraft.model.text)}</h2>
                        <h2>{c(d.aircraft.model.code)}</h2>
                        <p>
                            <span>Kuyruk kodu: </span>
                            <span>{c(d.aircraft.registration)}</span>
                        </p>
                        {d.aircraft.images ? (
                            <img src={d.aircraft.images?.large ?
                                d.aircraft.images.large[0].src
                                : d.aircraft.thumbnails[0].src} />) :
                            (<p>Fotopraf Bulunamadı</p>)}
                        <p>
                            <span>Şirket: </span>
                            <span>{c(d.airline?.short)}</span>
                        </p>
                        <p>
                            <span>Kalkış: </span>
                            <span>{c(d.airport.origin?.name)}</span>
                        </p>
                        <p>
                            <span>İniş: </span>
                            <span>{c(d.airport?.destination?.name)}</span>
                        </p>

                        <p>
                            <span>Kalkış Zamanı</span>
                            <span>{d.time.scheduled.departure > 0 ?
                                formatDate(d.time.scheduled.departure) : 'bilinmiyor'}</span>
                        </p>

                        <p>
                            <span>İniş Zamanı</span>
                            <span>{d.time.scheduled.arrival > 0 ?
                                formatDate(d.time.scheduled.arrival) : "Bilinmiyor"}</span>
                        </p>
                        <div className={`last ${d.status.icon}`}>
                            <span>{c(d.status.text)}</span>
                        </div>
                    </>)}
            </div>
        </div>
    )
}

export default Modal