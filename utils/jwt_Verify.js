import Jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if(!token) return res.status(401).json({
        succcess: false,
        message: "You are not authenticated",
    });

    Jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
        if(err) return res.status(401).json({
            succcess: false,
            message: "Token is invalid"
        });
        req.user = data;
        next();
    });
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res,() => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else {
            return res.status(403).json({
                succcess: false,
                message: "Token is invalid"
            });
        }
    })
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res,() => {
        if(req.user.isAdmin){
            next();
        }else {
            return res.status(403).json({
                succcess: false,
                message: "Token is invalid"
            });
        }
    })
};