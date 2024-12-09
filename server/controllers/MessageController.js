import getPrismaInstance from "../utils/PrismaClient.js";

export const addMessage = async (req, res, next) => {
  try {
    const prisma = getPrismaInstance();
    const { message, from, to } = req.body;

    const getUser = onlineUsers.get(to);

    if (message && from && to) {
      const newMessage = await prisma.messages.create({
        data: {
          message,
          sender: { connect: { id: parseInt(from) } },
          reciever: { connect: { id: parseInt(to) } },
          messageStatus: getUser ? "delivered" : "sent",
        },
        include: { sender: true, reciever: true },
      });

      return res.status(201).send({ message: newMessage });
    } 
    return res.status(400).send("From,to and Message is required.");

  } catch (err) {
    next(err);
  }
};

export const getMessage = async (req, res, next) => {
    try {
      const prisma = getPrismaInstance();
      const { message, to } = req.params;
  
      const messages = prisma.messages.findMany({
        where:{
            OR:[
                {
                    senderId:parseInt(from),
                    recieverId:parseInt(to),
                },
                {
                    senderId:parseInt(to),
                    recieverId:parseInt(from),
                },
            ],
        },
        orderBy:{
            id:"asc",
        },
    });
    const unreadMessages=[];


    messages.forEach((message,index)=>{
        if(
            message.messageStatus!=="read" &&
            messages.senderId==parseInt(to)
        )
        {
            messages[index].messageStatus="read";
            unreadMessages.push(message.id);
        }
    });
    await  prisma.messages.updateMany({
        where:{
            id:{in:unreadMessages},

        },
        data:{
            messageStatus:"read",
        },
    });
      return res.status(200).json({ messages });






}catch (err) {
      next(err);
    }
  };