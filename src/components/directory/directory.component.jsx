import React from 'react';

import './directory.style.scss';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Super Girl',
                    imageUrl: require(`../../comics/superGirl/sghome.jpg`),
                    id: 1,
                    linkUrl: 'supergirl'
                },
                {
                    title: 'Bat Man',
                    imageUrl: require(`../../comics/batMan/btmnhome.jpg`),
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'Black Widow',
                    imageUrl: require(`../../comics/blackWidow/blkhome.jpg`),
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'Iron Man',
                    imageUrl: require(`../../comics/ironMan/irmnhome.jpg`),
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'Captain Marvel',
                    imageUrl: require(`../../comics/captainMarvel/cpthm1.jpg`),
                    size: 'large',
                    id: 5 ,
                    linkUrl: ''
                }
            ]
        };
    }

    render() {
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

export default Directory;