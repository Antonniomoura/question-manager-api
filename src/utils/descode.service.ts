import * as jwt from 'jsonwebtoken';
import {jwtConstants} from '../auth/constants';
import {UserInterface} from '../users/interfaces/user.interface';

export function decoded(authorization): UserInterface {
    // console.log(jwt.verify('e95cef49bd6317d03ee95f59e8cfe0216b6c40713e9af41db0953384ec0394c3', jwtConstants.secret));
    return <UserInterface> jwt.verify(authorization.replace('Bearer ', ''), jwtConstants.secret);
}
