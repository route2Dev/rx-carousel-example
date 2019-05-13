import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './gallery.css';
import { CarouselItem } from './carousel-item';
import { relative } from 'path';

export const AliceGallery = () => {
    const max = 5;

    const responsive = {
        600: {
            items: 1
        },
        1024: {
            items: 3
        }
    };

    const createItems = () => {
        // let items = [];

        // for (let i = 0; i < max; i++) {
        //     items.push(<CarouselItem key={'item' + i} title={'Item: ' + i} />);
        // }

        // return items;
        return [1, 2, 3, 4, 5].map((i) => (<div className="foo" key={i}>Item {i}</div>))
    }

    return (
        <div style={{position: 'relative'}}>
            {/* <div className="col-md-2"></div>
            <div className="col-md-8"> */}
                <AliceCarousel
                    responsive={responsive}
                    dotsDisabled={true}
                    // buttonsDisabled={true}
                    infinite={false}                    
                    items={createItems()}
                />
                {/* </AliceCarousel> */}
            {/* </div>
            <div className="col-md-2"></div> */}
            {/* <a className="carousel-control-prev" href="#bs4-slide-carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true">
                    <i className="fas fa-angle-left fa-4x"></i>                
                </span>

                <span className="sr-only">Previous</span>

            </a>

            <a className="carousel-control-next" href="#bs4-slide-carousel" role="button" data-slide="next">

                <span className="carousel-control-next-icon" aria-hidden="true">
                    <i className="fas fa-angle-right fa-4x"></i>
                </span>

                <span className="sr-only">Next</span>

            </a> */}
        </div>
    )
};