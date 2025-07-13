import projectsModels from "../models/projects.models.js";

const getProjectInfo = async (req, res) => {
  const {slug} = await req.body;

  try {
    const project = await projectsModels.findOne({ slug });

    res.status(200).json({ project: project });
  } catch (error) {
    console.error("Error in projectsAddController:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default getProjectInfo;
