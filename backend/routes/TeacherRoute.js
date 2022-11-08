const router = require("express").Router();

const {
  createCourse,
  createLesson,
  getCourse,
  getLesson,
  deleteLesson,
  deleteCourse,
  updateCourse,
  updateLesson,
} = require("../controller/TeacherController");

router.route("/createCourse").post(createCourse);
router.route("/createLesson").post(createLesson);
router.route("/getCourse").get(getCourse);
router.route("/getLesson").get(getLesson);
router.route("/deleteLesson/:id").delete(deleteLesson);
router.route("/deleteCourse/:id").delete(deleteCourse);
router.route("/updateCourse/:id").put(updateCourse);
router.route("/updateLesson/:id").put(updateLesson);

module.exports = router;
