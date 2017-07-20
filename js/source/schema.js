
import classification from './classification';

export default [
    {
        id: 'name',
        label: 'Name',
        show: true,
        sample: '$2 chuck',
        align: 'center',
    },
    {
        id: 'year',
        label: 'Year',
        type: 'year',
        show: true,
        sample: 2015,
    },
    {
        id: 'grape',
        label: 'Grape',
        type: 'suggest',
        options: classification.grapes,
        show: true,
        sample: 'Merlot',
        align: 'center',
    },
    {
        id: 'rating',
        label: 'Rating',
        type: 'rating',
        show: true,
        sample: 3,
    },
    {
        id: 'comments',
        label: 'Comments',
        type: 'text',
        sample: 'Nice for the price',
    },
]
