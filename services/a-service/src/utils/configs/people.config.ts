export const PeopleConfig = {
    names: process.env.PEOPLE_NAMES?.split(',') || [
        'Joao',
        'Bruno',
        'Tácio',
        'Hugo',
        'Marcelo',
    ],
}