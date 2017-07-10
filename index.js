// Always take care that you put use strict on top of your files.
"use strict";

const app = require('./bootstrap/app');
const PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
	console.log('Listening on port ' + PORT);
})