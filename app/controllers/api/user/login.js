import { UserModel } from '../../../models';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { encryptPassword } from '../../../helpers';

export default async (request, response, next) => {


    const { email, password } = request.body;

    const encPassword = await encryptPassword(password);

    const user = await UserModel.findOne({
        email
    });

    console.log({encPassword})


    if (user) {

        if (!await bcrypt.compare(password, user.password)) {
            response.status(401).json("Wrong user credentials");
        }

        const accessToken = jwt.sign({
            email
        }, process.env.SECRET);

        response.status(200).json({
            // user,
            accessToken
        });
    } else {
        response.status(401).json({
            message: "Wrong user credentials..."
        });
    }

}