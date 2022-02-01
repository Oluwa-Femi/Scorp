const requestHandler = require("./requestHandler");
const postModel = require(".postModel");

// Controller function to get information for a list of posts
const getPostsById = async (req, res) => {
    try {
      console.log("Calling get list of posts with id:%o", req.params.id);
      const value = await postModel.getById(req.params.id);
      requestHandler.success(res, 200, "Posts info spooled", value);
    } catch (error) {
        console.log("Error:%o", error);
      return requestHandler.error(res, 500, `Server error: Failed to get posts`);
    }
  };

  module.exports = {
    getPostsById
  };