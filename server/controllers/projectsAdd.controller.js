import projectsModels from "../models/projects.models.js";

const projectsAddController = async (req, res) => {
  try {
    const lastProject = await projectsModels.findOne().sort("-order");
    const newOrder = lastProject ? lastProject.order + 1 : 1;

    const {
      title,
      slug,
      description,
      hashtags,
      images,
      visitLink,
      GithubLink,
      linkdinLink,
    } = await req.body;

    // console.log("Received body:", req.body);

    const newProject = await projectsModels.create({
      title , 
      slug,
      description,
      hashtags,
      images,
      visitLink,
      GithubLink,
      linkdinLink,
      order: newOrder,
    });

    // console.log("Project added successfully:", newProject);

    res.status(200).json({ message: "Project added successfully", project: newProject });
  } catch (error) {
    console.error("Error in projectsAddController:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default projectsAddController;
