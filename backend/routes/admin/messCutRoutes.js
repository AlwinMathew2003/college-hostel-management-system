import Express from 'express';
import {messCut,dateWiseMessCut,messCutRequest,messCutUpdateStatus} from '../../controllers/admin/messController.js'
const Router = Express.Router();

Router.get('/messCut',messCut);
Router.get('/DateWiseMessCut',dateWiseMessCut);
Router.get('/messCutRequest',messCutRequest);
Router.put('/messCutRequestUpdate/:admno',messCutUpdateStatus);
export default Router;