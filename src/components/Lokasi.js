import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./Lokasi.css";

const Lokasi = () => {
  const [lokasiData, setLokasiData] = useState([]);

  useEffect(() => {
    fetchLokasiData();
  }, []);

  const fetchLokasiData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/lokasi");
      console.log(response.data);
      setLokasiData(response.data);
    } catch (error) {
      console.error("Error fetching lokasi data:", error);
    }
  };

  return (
    <div>
      <h1 className="pt-9 pl-9 text-2xl font-bold">Lokasi</h1>
      <div className="pt-9 pb-20">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama Lokasi</th>
              <th>Kapasitas Volume</th>
              <th>Kapasitas Berat</th>
              <th>Sisa Volume</th>
              <th>Sisa Berat</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(lokasiData) && lokasiData.length > 0 ? (
              lokasiData.map((lokasi) => (
                <tr key={lokasi.loc_id}>
                  <td>{lokasi.loc_id}</td>
                  <td>{lokasi.loc_name}</td>
                  <td>{lokasi.loc_volcapacity}</td>
                  <td>{lokasi.loc_weicapacity}</td>
                  <td>{lokasi.loc_volutil}</td>
                  <td>{lokasi.loc_weiutil}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lokasi;
