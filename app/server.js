module.exports = function(config) {

	"use strict";

	global.logger = require("./logger")(config.logger);

	const
		path = require("path"),
		http = require("http"),
		express = require("express"),
		bodyParser = require("body-parser"),
		cors = require("cors");

	let
		widgetRouter = express.Router(),
		webApp = express(),
		restApp = express(),
		lastWidgetId = 3,
		widgets = [
			{ id: 1, name: "Widget 1", description: "The first widget.", color: "blue", size: "large", quantity: 3 },
			{ id: 2, name: "Widget 2", description: "The second widget.", color: "red", size: "medium", quantity: 1 },
			{ id: 3, name: "Widget 3", description: "The third widget.", color: "orange", size: "small", quantity: 2 }
		];

	config.webServer.staticFolders.forEach(function(staticFolder) {
		webApp.use(staticFolder.url, express.static(
			path.join(config.webServer.wwwFolder, staticFolder.folder), {
				setHeaders: function(res, filePath) {
					if (/.gz./.test(filePath)) {
						res.setHeader("Content-Encoding", "gzip");
					}
				}
			}));
	});

	webApp.use("/", function(req, res) {

		res.sendFile(config.webServer.defaultFile, function(err) {
			if (err) res.status(err.status).end();
		});

	});

	var
		webServer = http.createServer(webApp),
		WebSocketServer = require('ws').Server,
		wss = new WebSocketServer({ server: webServer });

	wss.on('connection', function(ws) {

	  ws.on('message', function(message) {
	    global.logger.info(message);
	  });

	  //ws.send('something');

	});

	webServer.listen(config.webServer.port, function() {
		logger.info("web server started on port " + config.webServer.port);
	});

	restApp.use(bodyParser.json());
	restApp.use(cors());

	widgetRouter.route("/widgets")
		.get(function(req, res) {
			res.jsonp(widgets);
		})
		.post(function(req, res) {
			req.body.id = ++lastWidgetId;
			widgets.push(req.body);
			res.json({ widgetId: lastWidgetId });
		});

	widgetRouter.route("/widgets/:widgetId")
		.get(function(req, res) {

			var results = widgets.filter(function(widget) {
				return widget.id === parseInt(req.params.widgetId, 10);
			});

			if (results.length === 0) {
				res.status(404).end();
			} else {
				res.jsonp(results[0]);
			}
		})
		.put(function(req, res) {

			var results = widgets.filter(function(widget) {
				return widget.id === parseInt(req.params.widgetId, 10);
			});

			if (results.length === 0) {
				res.status(404).end();
			} else {
				Object.assign(results[0], req.body);
				res.status(200).end();
			}
		})
		.delete(function(req, res) {

			var results = widgets.filter(function(widget) {
				return widget.id === parseInt(req.params.widgetId, 10);
			});

			if (results.length === 0) {
				res.status(404).end();
			} else {
				var widgetIndex = widgets.indexOf(results[0]);
				widgets.splice(widgetIndex, 1);
				res.json(results[0]);
			}
		});

	restApp.use("/api", widgetRouter);


	http.createServer(restApp).listen(config.restServer.port, function() {
		logger.info("rest server started on port " + config.restServer.port);
	});

}
