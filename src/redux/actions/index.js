import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constans";




export const getFlights = createAsyncThunk("flights/getFlights", async () => {

    //1 Api İsteği 

    const res = await axios.request(options)

    // veri dönüştür
    const formatted = res.data.aircraft.map((i) => ({
        id: i[0],
        code: i[1],
        lat: i[2],
        lng: i[3],
    }))

    //Aksiyonun payladına formatlanan veriyi ekle

    return formatted;

}) 