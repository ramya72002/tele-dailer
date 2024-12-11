import getPrismaInstance from "../utils/PrismaClient.js";
import {generateToken04} from "../utils/TokenGenerator.js"

export const checkUser=async (req,res,next)=>{
    try{
        const{email}=req.body;
        if(!email){
            return res.json({msg: "Email is required",status:"false"});

        }
        const prisma=getPrismaInstance();
        const user=await prisma.user.findUnique({where:{email}});
        if(!user){
            return res.json({msg:"User Not Found",status:false});
        }else{
            return res.json({msg:"User Found",status:true,data:user});

        }
    }catch(err){

        next(err);
    }
};
export const onBoardUser = async (req, res, next) => {
    try {
    const { email, name, about, image: profilePicture} = req.body;
    if (!email || !name || !profilePicture) {
    return res.send("Email, Name and Image are required.");
    }
    const prisma = getPrismaInstance();
    const user= await prisma.user.create({
    data: {email, name, about, profilePicture},
    });
    return res.json({ msg: "Success", status: true,user:user });
    } catch (err) {
    next(err); 
    }
    };

export const getAllUsers = async (req, res, next) => {

    try {
    
    const prisma = getPrismaInstance();
    
    const users = await prisma.user.findMany({
    
    orderBy: { name: "asc" },
    
    select: {
    
    id: true,
    
    email: true,
    
    name: true,
    
    profilePicture: true,
    
    about: true,
    
    },
    
    });
    
    const usersGroupedByInitialletter = {};
    
    users.forEach((user) => {
    
    const initialletter = user.name.charAt(0).toUpperCase();
    if (!usersGroupedByInitialletter[initialletter]) {

        usersGroupedByInitialletter[initialletter] = [];
        
        }
        
        usersGroupedByInitialletter[initialletter].push(users);
        
        });
        
        return res.status(200).send({ users: usersGroupedByInitialletter });
    
    } catch (err) {
        next(err);
    }
}

export function generateToken04= async(req,res,next)=>(
    try{

    const appId=parseInt(process.env.ZEGO_APP_ID);
    
    const userId=process.env.ZEGO_APP_SECRET;
    
    const secret=req.params.userId;

    
    const effectiveTimeInSeconds=3600;
    const payload="";
    if(appId && serverSecret&&userId){
    
    const token =generateToken04(appId,userId,serverSecret,effectiveTime,payload);
    
    ) ;
    return res.status(200).json({token});
}
return res.status(400).
send("user id , app id and server secret is required.");

    {
    
    if (!appId || typeof appId !== "number") {
    
   
    
    throw {
    
    errorCode: ErrorCode.appIDInvalid,
    
    errorMessage: "appID invalid",
    
    };
    
    }
    
    if (!userId || typeof userId == "string"){

    }
}catch(err){
        next(err);
    }
};

export default {
    getAllUsers,
    onBoardUser,
    checkUser,
  };