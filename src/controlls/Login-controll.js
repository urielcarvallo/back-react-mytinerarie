const key = require("<path to your config file>");
const jwt = require("jsonwebtoken");

const payload = {
    id: user.id,
    username: user.username,
    avatarPicture: user.avatarPicture
};
const options = {expiresIn: 2592000};
    jwt.sign(
        payload,
        key.secretOrKey,
        options,
        (err, token) => {
            if(err){
            res.json({
            success: false,
            token: "There was an error"
            });

            }
            else 
            {
            res.json({
            success: true,
            token: token
            });
            }
        }
        );