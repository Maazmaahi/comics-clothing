const SHOP_DATA = [
    {
        id: 1,
        title: 'Super Girl',
        routeName: 'supergirl',
        items: [
            {
                id: 1,
                name: 'Super Costume',
                imageUrl: require(`../../comics/superGirl/sgcloth1.jpg`),
                price: '$200'
            },
            {
                id: 2,
                name: 'Super Girl Dress',
                imageUrl: require(`../../comics/superGirl/sgcloth2.jpg`),
                price: '$120'
            },
            {
                id: 3,
                name: 'Full Dress',
                imageUrl: require(`../../comics/superGirl/sgcloth3.jpg`),
                price: '$360'
            },
            {
                id: 4,
                name: 'White Costume',
                imageUrl: require(`../../comics/superGirl/sgcloth4.jpg`),
                price: '$400'
            }
        ]
    },
    {
        id: 2,
        title: 'Bat Man',
        routeName: 'batman',
        items: [
            {
                id: 1,
                name: 'Batman Dress',
                imageUrl: require(`../../comics/batMan/btmncloth1.jpg`),
                price: '$220'
            },
            {
                id: 2,
                name: 'Batman Costume',
                imageUrl: require(`../../comics/batMan/btmncloth2.jpg`),
                price: '$150'
            },
            {
                id: 3,
                name: 'Batman Dark Dress',
                imageUrl: require(`../../comics/batMan/btmncloth3.jpg`),
                price: '$100'
            },
            {
                id: 4,
                name: 'Stretch Dress',
                imageUrl: require(`../../comics/batMan/btmncloth4.jpg`),
                price: '$250'
            },
        ]
    },
    {
        id: 3,
        title: 'Black Widow',
        routeName: 'blackwidow',
        items: [
            {
                id: 1,
                name: 'Black Dress',
                imageUrl: require(`../../comics/blackWidow/blkcloth1.jpg`),
                price: '$125'
            },
            {
                id: 2,
                name: 'Full Set',
                imageUrl: require(`../../comics/blackWidow/blkcloth2.jpg`),
                price: '$200'
            },
            {
                id: 3,
                name: 'Automative Dress',
                imageUrl: require(`../../comics/blackWidow/blkcloth3.jpg`),
                price: '$300'
            },
            {
                id: 4,
                name: 'Battle Dress',
                imageUrl: require(`../../comics/blackWidow/blkcloth4.jpg`),
                price: '$180'
            },
        ]
    },
    {
        id: 4,
        title: 'Iron Man',
        routeName: 'ironman',
        items: [
            {
                id: 1,
                name: 'Iron Suite',
                imageUrl: require(`../../comics/ironMan/irmncloth1.jpg`),
                price: '$750'
            },
            {
                id: 2,
                name: 'Iron Man Suite',
                imageUrl: require(`../../comics/ironMan/irmncloth2.jpg`),
                price: '$600'
            },
            {
                id: 3,
                name: 'White Suite',
                imageUrl: require(`../../comics/ironMan/irmncloth3.jpg`),
                price: '$1000'
            },
            {
                id: 4,
                name: 'Latest Suite',
                imageUrl: require(`../../comics/ironMan/irmncloth4.jpg`),
                price: '$700'
            },
        ]
    },
    {
        id: 5,
        title: 'Captain Marvel',
        routeName: 'captainmarvel',
        items: [
            {
                id: 1,
                name: 'Captain Marvel Color',
                imageUrl: require(`../../comics/captainMarvel/cptcloth1.jpg`),
                price: '$400'
            },
            {
                id: 2,
                name: 'Light Suite',
                imageUrl: require(`../../comics/captainMarvel/cptcloth2.jpg`),
                price: '$300'
            },
            {
                id: 3,
                name: 'Green Suite',
                imageUrl: require(`../../comics/captainMarvel/cptcloth3.jpg`),
                price: '$270'
            },
            {
                id: 4,
                name: 'Formal',
                imageUrl: require(`../../comics/captainMarvel/cptcloth4.jpg`),
                price: '$220'
            }
        ]
    }
]

export default SHOP_DATA;