import Express from 'express';
import {messCut,dateWiseMessCut} from '../../controllers/admin/messController.js'
const Router = Express.Router();

Router.get('/messCut',messCut);
Router.get('/DateWiseMessCut',dateWiseMessCut);
export default Router;