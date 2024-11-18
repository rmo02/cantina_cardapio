import React, { useState } from 'react';

function ModalRFID({ onIdentify }) {
  const [rfid, setRfid] = useState('');

  const handleSubmit = () => {
    if (rfid) {
      onIdentify(rfid);
    }
  };

  return (
    <div className="bg-card p-8 rounded-lg shadow-lg w-96 text-center">
      <h2 className="text-2xl font-bold mb-4">Identifique-se com o Cartão RFID</h2>
      <input
        type="text"
        placeholder="Insira o código RFID"
        value={rfid}
        onChange={(e) => setRfid(e.target.value)}
        className="mt-4 p-2 border rounded w-full text-center"
      />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-button text-white px-4 py-2 rounded-full w-full"
      >
        Identificar
      </button>
    </div>
  );
}

export default ModalRFID;
