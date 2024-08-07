import Express from "express";
const router = Express.Router();

//sigin
router.post("/apologyrequest", signin);

//for testing signup
router.get("/apologyview", signup);

export default router;
