const Course = require("../models/TeacherCourseModel");
const Lesson = require("../models/TeacherLessonModel");

exports.createCourse = async (req, res) => {
  const newCourse = new Course({
    teacherID: req.body.teacherID,
    subject: req.body.subject,
    title: req.body.title,
    numberOfChapters: req.body.numberOfChapters,
    progress: req.body.progress,
    students: req.body.students,
    time: req.body.time,
    lessons: req.body.lessons,
  });

  await newCourse
    .save(newCourse)
    .then(res.send({ message: "Success" }))
    .catch((err) => {
      res.send(err);
    });
};
exports.createLesson = async (req, res) => {
  const newLesson = new Lesson({
    teacherID: req.body.teacherID,
    lessonName: req.body.lessonName,
    chapters: req.body.chapters,
    description: req.body.description,
    topic: req.body.topic,
    addNote: req.body.addNote,
  });

  await newLesson
    .save(newLesson)
    .then(res.send({ message: "Success" }))
    .catch((err) => {
      res.send(err);
    });
};

exports.getCourse = async (req, res) => {
  await Course.find().then((data) => {
    res.send(data);
  });
};
exports.getLesson = async (req, res) => {
  await Lesson.find().then((data) => {
    res.send(data);
  });
};

exports.deleteLesson = async (req, res) => {
  const id = req.params.id;
  await Lesson.findByIdAndDelete(id).then(res.send({ message: "Success" }));
};
exports.deleteCourse = async (req, res) => {
  const id = req.params.id;
  await Course.findByIdAndDelete(id).then(res.send({ message: "Success" }));
};

exports.updateCourse = async (req, res) => {
  const id = req.params.id;
  let teacherID = req.body.teacherID;
  let subject = req.body.subject;
  let title = req.body.title;
  let numberOfChapters = req.body.numberOfChapters;
  let progress = req.body.progress;
  let students = req.body.students;
  let time = req.body.time;
  let lessons = req.body.lessons;

  await Course.findByIdAndUpdate(id, {
    teacherID,
    subject,
    title,
    numberOfChapters,
    students,
    time,
    progress,
    lessons,
  }).then(res.send({ message: "Success" }));
};

exports.updateLesson = async (req, res) => {
  const id = req.params.id;
  let teacherID = req.body.teacherID;
  let lessonName = req.body.lessonName;
  let chapters = req.body.chapters;
  let description = req.body.description;
  let topic = req.body.topic;
  let addNote = req.body.addNote;
  await Course.findByIdAndUpdate(id, {
    teacherID,
    lessonName,
    chapters,
    description,
    topic,
    addNote,
  }).then(res.send({ message: "Success" }));
};