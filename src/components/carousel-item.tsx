import React from 'react';

interface ICarouselItemProps {
    title: string;
}

export const CarouselItem = ({
    title
}: ICarouselItemProps) => {
    return (
        <div className="my-carousel-item">{title}</div>
    );
};