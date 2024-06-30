import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    gdg_NamaBansos: "",
    gdg_JenisBansos: "",
    gdg_Jumlah: "",
    gdg_Lokasi: "",
    gdg_ExpDate: "",
    gdg_Satuan: "",
    gdg_weight: "",
    gdg_TglDatang: "",
  });
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/gudang");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (updateId) {
        await axios.put(`http://localhost:3000/gudang/${updateId}`, formData);
      } else {
        await axios.post("http://localhost:3000/gudang", formData);
      }
      fetchData();
      setFormData({
        gdg_NamaBansos: "",
        gdg_JenisBansos: "",
        gdg_Jumlah: "",
        gdg_Lokasi: "",
        gdg_ExpDate: "",
        gdg_Satuan: "",
        gdg_weight: "",
        gdg_TglDatang: "",
      });
      setUpdateId(null);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleUpdate = (item) => {
    console.log("masuk sini");
    setFormData({
      gdg_NamaBansos: item.gdg_NamaBansos,
      gdg_JenisBansos: item.gdg_JenisBansos,
      gdg_Jumlah: item.gdg_Jumlah,
      gdg_Lokasi: item.gdg_Lokasi,
      gdg_ExpDate: item.gdg_ExpDate,
      gdg_Satuan: item.gdg_Satuan,
      gdg_weight: item.gdg_weight,
      gdg_TglDatang: item.gdg_TglDatang,
    });
    setUpdateId(item.gdg_ID);
  };

  const handleDelete = async (id) => {
    try {
      console.log("mmasuk delete");
      await axios.delete(`http://localhost:8000/gudang/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  const convertDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div>
      <h1 className="pt-9 pl-9 text-2xl font-bold">Manajemen Gudang</h1>
      <form onSubmit={handleSubmit}>
        <div className="pt-9 pl-8">
          <div className="">Nama Bansos</div>
          <input
            className="border-2 border-black rounded-xl"
            type="text"
            name="gdg_NamaBansos"
            placeholder="Nama Bansos"
            value={formData.gdg_NamaBansos}
            onChange={handleChange}
            required
          />
          <select
            name="gdg_JenisBansos"
            value={formData.gdg_JenisBansos}
            onChange={handleChange}
            required
            className="jenis-bansos-dropdown border-2 border-black rounded-xl"
          >
            <option value="Beras">Beras</option>
            <option value="Non-Beras">Non-Beras</option>
          </select>
          <input
            className="border-2 border-black rounded-xl"
            type="number"
            name="gdg_Jumlah"
            placeholder="Jumlah"
            value={formData.gdg_Jumlah}
            onChange={handleChange}
            required
          />
          <input
            className="border-2 border-black rounded-xl"
            type="text"
            name="gdg_Lokasi"
            placeholder="Lokasi"
            value={formData.gdg_Lokasi}
            onChange={handleChange}
            required
          />
          <div className="text-sm">Exp Date</div>
          <input
            className="border-2 border-black rounded-xl"
            type="date"
            name="gdg_ExpDate"
            placeholder="Exp Date"
            value={formData.gdg_ExpDate}
            onChange={handleChange}
            required
          />
          <input
            className="border-2 border-black rounded-xl"
            type="text"
            name="gdg_Satuan"
            placeholder="UOM"
            value={formData.gdg_Satuan}
            onChange={handleChange}
            required
          />
          <input
            className="border-2 border-black rounded-xl"
            type="number"
            name="gdg_weight"
            placeholder="Weight"
            value={formData.gdg_weight}
            onChange={handleChange}
            required
          />
          <div className="text-sm">Tgl Kedatangan</div>
          <input
            className="border-2 border-black rounded-xl"
            type="date"
            name="gdg_TglDatang"
            placeholder="Tanggal Kedatangan"
            value={formData.gdg_TglDatang}
            onChange={handleChange}
            required
          />
          <button type="submit" className="bg-gray-200 rounded-lg">
            {updateId ? "Update" : "Create"}
          </button>
        </div>
      </form>

      {/* <label className="form-control w-full max-w-xs">
              <div className="label">
                  <span className="label-text">What is your name?</span>
                  <span className="label-text-alt">Top Right label</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
              <div className="label">
                  <span className="label-text-alt">Bottom Left label</span>
                  <span className="label-text-alt">Bottom Right label</span>
              </div>
          </label> */}

      <table className="table table-zebra border-2 border-black rounded-xl">
        <thead>
          <tr>
            <th className="font-bold">ID</th>
            <th className="w-[50px] truncate">Nama Bansos</th>
            <th className="w-[100px]">Jenis Bansos</th>
            <th className="w-[60px]">Jumlah</th>
            <th>Lokasi</th>
            <th className="w-[100px]">Exp Date</th>
            <th>UOM</th>
            <th>Berat</th>
            <th className="w-[100px]">Tanggal Kedatangan</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr
              className={(index + 1) % 2 == 0 ? "bg-gray-100" : "bg-white"}
              key={index}
            >
              <td className="w-[50px]">{item.gdg_ID}</td>
              <td>{item.gdg_NamaBansos}</td>
              <td>{item.gdg_JenisBansos}</td>
              <td>{item.gdg_Jumlah}</td>
              <td>{item.gdg_Lokasi}</td>
              <td>{convertDate(item.gdg_ExpDate)}</td>
              <td>{item.gdg_Satuan}</td>
              <td>{item.gdg_weight}</td>
              <td>{convertDate(item.gdg_TglDatang)}</td>
              <div className="flex flex-col border border-gray-100">
                <button
                  className="bg-gray-200 rounded-lg"
                  onClick={() => handleUpdate(item)}
                >
                  Update
                </button>
                <button
                  className="bg-gray-200 rounded-lg"
                  onClick={() => handleDelete(item.gdg_ID)}
                >
                  Delete
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
