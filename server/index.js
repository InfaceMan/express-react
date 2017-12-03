
import express from 'express';
import  React  from 'react';
import Greeter from './Greeter';
import ReactDOMServer from 'react-dom/server';
const  router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
	const html=ReactDOMServer.renderToStaticMarkup(<Greeter/>);

    res.render('index', { title1: html });
});

module.exports = router;
