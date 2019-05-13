declare module 'react-items-carousel' {
    import * as React from 'react';

    export interface ReactItemsCarouselProps {
        gutter: number;
        freeScrolling;
        numberOfCards;
        firstAndLastGutter: boolean;
        activeItemIndex;
        activePosition;
        springConfig?;
        showSlither?: boolean;
        rightChevron;
        leftChevron;
        chevronWidth?;
        outsideChevron?;
        requestToChangeActive;
        slidesToScroll?;
        enablePlaceholder?: boolean;
        numberOfPlaceholderItems?: number;
        minimumPlaceholderTime?: number;
        placeholderItem?: JSX.Element;

    }

    export default class ItemsCarousel extends React.Component<ReactItemsCarouselProps, any> {}
}