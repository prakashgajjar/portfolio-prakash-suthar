import projectsModels from "../models/projects.models.js";

const projectsGetController = async (req, res) => {
  try {
    const allProjects = await projectsModels.find({})

    res.status(200).json({  project: allProjects });
  } catch (error) {
    console.error("Error in projectsAddController:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default projectsGetController;
