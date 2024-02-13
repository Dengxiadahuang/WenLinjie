var config = {
    style: 'mapbox://styles/denghuang/clska85oj00co01quc4atalcw/draft',
    accessToken: 'pk.eyJ1IjoiZGVuZ2h1YW5nIiwiYSI6ImNrdXo5MnFkODdhbnQyb21uN3Nudm5pYzgifQ.Y9KTmRJnrXN2oiT_bi8U3w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'NET-ZERO in Singapore',
    subtitle: 'The status of car lite in the context of global carbon reduction',
    byline: 'By WEN Linjie',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Introduction of Net-zero',
            image: '1.jpg',
            description: 'Singapore Commits to Achieve Net Zero Emissions by 2050 and to a Revised 2030 Nationally Determined Contribution： Public Sector and Jurong Lake District to Lead The Way with Net Zero.The Green Plan comprises 5 pillars that will influence all aspects of our lives: City in Nature,  Energy Reset, Sustainable Living, Green Economy, Resilient Future.',
            location: {
                center: [103.70495, 1.36311],
                zoom: 10,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'traffic',
                     opacity: 1,
                     duration: 300
                 },
                 {
                    layer: 'carlite',
                    opacity: 0
                },
                {
                    layer: 'taxistop',
                    opacity: 0
                },
                {
                    layer: 'cyclingpath',
                    opacity:0
                },
                {
                    layer: 'transport hub',
                    opacity: 0
                }
                 
            ],
            onChapterExit: [
                 {
                     layer: 'taxistop',
                     opacity: 0
                 }
                 
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Public transport in Singapore',
            image: '3.png',
            description: 'With the improvement of public transportation convenience, more and more people are inclined to use public transportation. But public transportation cannot meet all needs. On the one hand, public transportation cannot meet urgent needs. On the other hand, public transportation cannot completely deliver people to their homes, or performs poorly on short trips, such as in scenes where people need to move east after shopping.',
            location: {
                center: [103.82323, 1.31057],
                zoom: 12,
                pitch: 50,
                bearing: -50,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [ 
                {
                    layer: 'traffic',
                    opacity: 0,
                
                },
                {
                    layer: 'railline',
                    opacity: 1,
                    duration: 10
                },
                {
                    layer: 'carlite',
                    opacity: 0
                },
                {
                    layer: 'taxistop',
                    opacity: 0
                }
                ],
            onChapterExit: [
               
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Car lite and cycling',
            image: '2.jpg',
            description: 'Therefore, in addressing these two issues, sharing a shared/green vehicle may become a complementary model for green production. Singapore has already launched a wide range of shared media, and here we focus on introducing car lite. Car lite means using less of private transport and using more high-capacity public transport like trains and buses. Bicycle-sharing, too, forms an integral part of using less of private transport. Going car-lite benefits communities and the city in many ways; it not only encourages the move towards a liveable and sustainable environment, but also gives streets back to people. From Car-Free Sundays to regular car-free zones, experience how streets become vibrant meaningful public spaces for everyone to enjoy.',
            location: {
                center: [103.85976, 1.29905],
                zoom: 12,
                pitch: 30,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'cyclingpath',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'traffic',
                    opacity: 0,
                
                },
                {
                    layer: 'railline',
                    opacity: 0
                },
                {
                    layer: 'carlite',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'taxistop',
                    opacity: 0
                }
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Transport point',
            image: '4.png',
            description: 'The above picture shows the spatial distribution of available rental cars for car rental company Car Lite, which operates in Singapore. Their concentrated characteristics are similar to the existing taxi stops. In the future, such car rentals may be changed to a more user-friendly model, using taxi stops as a reference to set up car rentals and deploy electric cars. Users can use online apps to find nearby rental points and assist with renting. When this model reaches a certain scale, with the upgrading of public transportation, we can achieve private car free nationwide.',
            location: {
                center:  [103.81010, 1.33623],
                zoom: 10,
                pitch: 1,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'cyclingpath',
                    opacity:0
                },
                {
                    layer: 'traffic',
                    opacity: 0,
                
                },
                {
                    layer: 'railline',
                    opacity: 0
                },
                {
                    layer: 'carlite',
                    opacity: 0
                },
                {
                    layer: 'taxistop',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'transport hub',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: []
        }
    ]
};
