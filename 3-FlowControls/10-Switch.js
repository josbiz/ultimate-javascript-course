let action = 'update'

switch (action) {
    case 'list':
        console.log('listing');
        break; // separate each case and dont exec all the code
    case 'save':
        console.log('saving')
        break;
    default: // theres isnt a proper case
        console.log('Not found')
}