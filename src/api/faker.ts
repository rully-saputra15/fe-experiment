import { faker } from '@faker-js/faker';
import { User } from '../types/utilities';

export const fetchUsers = ():Promise<Array<User>> => {
    const users = []

    for (let i = 0 ; i < 25000 ; i++) {
        users.push({
            id: i + 1,
            name: faker.person.fullName(),
            email: faker.internet.email(),
            joinedOn: faker.date.recent(),
            commentCount: faker.number.int({min: 0, max: 100})
        })
    }
    return Promise.resolve(users);
}