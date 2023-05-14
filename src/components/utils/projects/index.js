import vorobjovDom from './vorobjovDom'
import balchugResidence from './balchugResidence'
import kingsGarden from './kingsGarden'
import redSide from './redSide'

export default [
    {
        id: 'vorobjov_dom',
        thumbnail: thumbnailGetter(vorobjovDom),
        title: 'Vorobjov Dom',
        location: 'Moscow, Russia',
    },
    {
        id: 'balchug_residence',
        thumbnail: thumbnailGetter(balchugResidence),
        title: 'Balchug Residence',
        location: 'Moscow, Russia',
    },
    {
        id: 'kings_garden',
        thumbnail: thumbnailGetter(kingsGarden),
        title: 'Kings Garden',
        location: 'Moscow, Russia',
    },
    {
        id: 'red_side',
        thumbnail: thumbnailGetter(redSide),
        title: 'Red Side',
        location: 'Moscow, Russia',
    },
]

function thumbnailGetter(arr) {
    return arr[0]
}
