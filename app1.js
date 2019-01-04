const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
		const url = req.url;
		const method = req.method;

		if (url === "/") {
			res.write("<html>");
			res.write("<head><title>Hello, welcome to Node.js</title></head>");
			res.write('<body>');
			res.write('<ul>');
			res.write('<li>user1</li>');
			res.write('<li>user2</li>');
			res.write('<li>user3</li>');
			res.write('</ul>');
			res.write('<form action ="/create-user" method="POST"><input type="text" name="username"><button type="submit">send</button></form>');
			res.write('</body>');
			res.write("	</html>");
			return res.end();
		}

		if (url === '/create-user' && method === 'POST') {
			const body = [];
			req.on('data', chunk => {
				console.log(chunk);
				body.push(chunk);
			});
			return req.on('end', () => {
				const parsedBody = Buffer.concat(body).toString();
				const newUser = parsedBody.split('=')[1]
				console.log(newUser);
				fs.writeFile('userList.txt', newUser, err => {
					res.statusCode = 302; //url redirection
					res.setHeader('Location', '/');
					return res.end();
				});
			});
		}
		res.setHeader("Content-Type", "text/html");
		res.write("<html>");
		res.write("<head><title>My First Page</title></head>");
		res.write("<body><h1>Hello from Node.js</h1></body>");
		res.write("</html>");
		res.end();
});

server.listen(3002);