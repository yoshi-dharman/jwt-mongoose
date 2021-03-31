const express = require('express');
const router = express.Router();

const userRouter = require("./user.controller");
const bukuRouter = require("./buku.controller");
const pinjamanRouter = require("./pinjaman.controller");
const authRouter = require("./auth");
const verifyToken = require("../middleware/authorization");

router.use("/auth", authRouter);

// router.use(verifyToken);
router.use("/user", userRouter);
router.use("/buku", bukuRouter);
router.use("/pinjaman", verifyToken, pinjamanRouter);


module.exports = router;