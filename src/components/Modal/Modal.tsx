/* Thirds-party Import */
import React, { useState } from 'react';

import { IModalProps } from '.';

const Modal: React.FC<IModalProps> = ({ onClose, initialData, onSave }) => {
  function handleOnSave() {
    onSave({
      timestamp: new Date(),
      is_active: true,
    });
  }

  return (
    <div>
      <div>
        <span onClick={onClose}>&times;</span>
        <h2>New Alarm</h2>
        <div>
          {/* <input
            value={title}
            onChange={(el) => setTitle(el.target.value)}
          /> */}
        </div>
        <button onClick={handleOnSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
