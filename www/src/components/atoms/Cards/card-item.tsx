import React from 'react';

const CardItem = ({ image, title, description }: {image: string, title: string, description: string}) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="sm:w-1/3">
        <img className=" w-full object-cover" src={image} alt={title} />
      </div>
      <div className="p-4 sm:w-2/3">
        <h2 className="font-bold text-base text-gray-700">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CardItem;
