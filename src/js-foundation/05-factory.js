const { v4: uuidv4 } = require('uuid')
const getAge = require('get-age')

const buildPerson = ({ name, birthdate }) => {
    return {
        id: uuidv4(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
    }
}

const obj = {
    name: 'Ross',
    birthdate: '2005-03-15'
}

const ross = buildPerson( obj );

console.log(ross)