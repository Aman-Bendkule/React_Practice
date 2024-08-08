import React, { useState } from 'react';
import '../assets/css/DragAndDrop.css';

const DragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dropped, setDropped] = useState(false);

  const handleDragStart = (event) => {
    setIsDragging(true);
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    setDropped(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="drag-drop-container">
      <div
        className={`draggable-item ${isDragging ? 'dragging' : ''}`}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        Drag me
      </div>
      <div
        className={`drop-area ${dropped ? 'dropped' : ''}`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {dropped ? 'Item dropped!' : 'Drop here'}
      </div>
    </div>
  );
};

export default DragAndDrop;
