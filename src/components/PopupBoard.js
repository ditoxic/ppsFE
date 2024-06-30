import React from 'react';

const PopupBoard = ({ formData, handleChange, handleSubmit, updateId }) => {
  return (
    <div className="popup-board">
      <h2>{updateId ? 'Update Item' : 'Create Item'}</h2>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="gdg_NamaBansos"
          placeholder="Nama Bansos"
          value={formData.gdg_NamaBansos}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gdg_JenisBansos"
          placeholder="Jenis Bansos"
          value={formData.gdg_JenisBansos}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="gdg_Jumlah"
          placeholder="Jumlah"
          value={formData.gdg_Jumlah}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gdg_Lokasi"
          placeholder="Lokasi"
          value={formData.gdg_Lokasi}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="gdg_ExpDate"
          placeholder="Exp Date"
          value={formData.gdg_ExpDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gdg_Satuan"
          placeholder="UOM"
          value={formData.gdg_Satuan}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="gdg_weight"
          placeholder="Weight"
          value={formData.gdg_weight}
          onChange={handleChange}
          required
        />
         <input
          type="date"
          name="gdg_TglDatang"
          placeholder="Tanggal Kedatangan"
          value={formData.gdg_TglDatang}
          onChange={handleChange}
          required
        />
      </form>
    </div>
  );
};

export default PopupBoard;
