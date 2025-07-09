import Response from "../models/responsise.models.js";

const response = async (req, res) => {
  
  const { name, message } = await req.body;
 
  try {
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
     await Response.create({ name, message });
    console.log("Response created successfully");
    res.status(200).json({ name: name, message: message });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default response;
