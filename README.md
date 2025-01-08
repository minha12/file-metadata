# File Metadata Microservice

A microservice that analyzes uploaded files and returns metadata information.

## API Documentation

### POST /api/fileanalyse

Analyzes an uploaded file and returns its metadata.

#### Request
- Content-Type: `multipart/form-data`
- Form field name: `upfile`

#### Response
```json
{
  "name": "example.txt",
  "type": "text/plain",
  "size": 1234
}
```

#### Error Response
```json
{
  "error": "Please upload a file"
}
```

## Technology Stack
- Node.js
- Express
- Multer (for file upload handling)

## Local Development
1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Visit `http://localhost:3000` in your browser

## Dependencies
- express: ^4.x.x
- multer: ^1.x.x
- cors: ^2.x.x

## License
[MIT](https://opensource.org/licenses/MIT)
