const express = require("express");
const router = express.Router();
const Student = require("../models/student.js");
const Class = require("../models/class.js");
const Teacher = require("../models/teacher.js");

/**
 * GET ROUTES
 */
router.get("/", function (req, res, next) {
	res.send("hello admin");
});
router.get("/classes", function (req, res, next) {
	Class.find()
		.populate("teacher")
		.populate("students.sid")
		.exec((err, data) => {
			if (err) return next(err);
			res.json(data);
		});
});
router.get("/teachers", function (req, res, next) {
	Teacher.find().exec((err, data) => {
		if (err) return next(err);
		res.json(data);
	});
});
router.get("/student", function (req, res, next) {
	Student.find().exec((err, data) => {
		if (err) return next(err);
		res.json(data);
	});
});
router.get("/student/:id", function (req, res, next) {
	Student.findById(req.params.id)
		.then(
			(data) => {
				res.status = 200;
				res.setHeader("Content-Type", "application/json");
				res.json(result);
			},
			(err) => next(err)
		)
		.catch((err) => next(err));
});
router.get("/teachers/:id", function (req, res, next) {
	Teacher.findById(req.params.id)
		.then(
			(data) => {
				res.status = 200;
				res.setHeader("Content-Type", "application/json");
				res.json(result);
			},
			(err) => next(err)
		)
		.catch((err) => next(err));
});
router.get("/classses/:id", function (req, res, next) {
	Class.findById(req.params.id)
		.populate("teacher")
		.populate("students.sid")
		.then(
			(data) => {
				res.status = 200;
				res.setHeader("Content-Type", "application/json");
				res.json(result);
			},
			(err) => next(err)
		)
		.catch((err) => next(err));
});

/**
 * POST ROUTES
 */
router.post("/addTeacher", function (req, res, next) {
	Teacher.create(req.body)
		.then(
			(data) => {
				res.status = 200;
				res.setHeader("Content-Type", "application/json");
				res.json(result);
			},
			(err) => next(err)
		)
		.catch((err) => next(err));
});
router.post("/addStudent", function (req, res, next) {
	Student.create(req.body)
		.then(
			(data) => {
				res.status = 200;
				res.setHeader("Content-Type", "application/json");
				res.json(result);
			},
			(err) => next(err)
		)
		.catch((err) => next(err));
});
router.post("/addClass", function (req, res, next) {
	res.send("adding class");
});

/**
 * PUT ROUTES
 */
router.put("/classses/:id", function (req, res, next) {
	res.send("class edit");
});
router.put("/teachers/:id", function (req, res, next) {
	res.send("teacher edit");
});
router.put("/studnnt/:id", function (req, res, next) {
	res.send("student edit");
});
router.put("/assignTeacher/:id/:id", function (req, res, next) {
	res.send("assign teacher");
});
router.put("/assignStudent/:id/:id", function (req, res, next) {
	res.send("assign student");
});

/**
 * DELETE
 */
router.delete("/delClass/:id", function (req, res, next) {
	res.send("deleting class");
});
router.delete("/delStudent/:id", function (req, res, next) {
	res.send("deleting student");
});
router.delete("/delTeacher/:id", function (req, res, next) {
	res.send("deleting teacher");
});

module.exports = router;
