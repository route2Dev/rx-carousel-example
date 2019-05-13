import React, { useState, useEffect } from 'react'
import ItemsCarousel from 'react-items-carousel';
import './gallery.css';
import IconButton from './common/icon-button';

const ReactItemsGallery = () => {
    const initialChildren: JSX.Element[] = [];
    const [children, setChildren] = useState(initialChildren);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [numberOfCards, setNumberOfCards] = useState(3);

    useEffect(() => {
        setChildren(createChildren(20));

        window.addEventListener('resize', onResize);
        onResize();

        return () => {
            window.removeEventListener('resize', onResize);
          };

    }, []);

    const onResize = () => {
        let noOfCards = 3;

        if (window.innerWidth < 600) {
            noOfCards = 1;
        } else if (window.innerWidth < 1200) {
            noOfCards = 2
        }

        setNumberOfCards(noOfCards);
    }

    const createChildren = (count: number) => {
        let result: JSX.Element[] = [];
        for (let i = 0; i < count - 1; i++) {
            result.push(<div className="foo" key={i}>Item {i}</div>);
        }

        return result;
    }

    const changeActiveItem = (index: number) => setActiveItemIndex(index);

    return (
        <ItemsCarousel
            // Placeholder configurations
            // enablePlaceholder={true}
            // numberOfPlaceholderItems={5}
            // minimumPlaceholderTime={1000}
            // placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

            // Carousel configurations
            numberOfCards={numberOfCards}
            gutter={12}
            // showSlither={true}
            firstAndLastGutter={true}
            freeScrolling={false}

            // Active item configurations
            requestToChangeActive={changeActiveItem}
            activeItemIndex={activeItemIndex}
            activePosition={'center'}

            chevronWidth={40}
            rightChevron={<IconButton className="fas fa-angle-right fa-4x" altText="Next" />}
            leftChevron={<IconButton className="fas fa-angle-left fa-4x" altText="Prev" />}
            outsideChevron={true}
        >
            {children}
        </ItemsCarousel>
    )
}

export default ReactItemsGallery
