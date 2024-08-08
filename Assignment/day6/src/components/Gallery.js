import React from 'react'

export const Gallery = ({ imageUrls }) => {
  return (
    <div style={galleryStyle}>
        {imageUrls.map((url,index)=>(
            <img key={index} src={url} alt="" style={imageStyle}/>
        ))}
    </div>
  )
}

const galleryStyle = {
  display: 'flex',
  flexWrap:'wrap',
  gap:'10px'
};

const imageStyle = {
    width: '150px',
    height:'150px',
    objectFit:'cover'
};