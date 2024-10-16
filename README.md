# Smart Skool

**Smart Skool** is a web application designed to help schools manage interactions between parents and the school. The platform provides a user-friendly interface for parents to log in and make payments, view student progress, and more.

## Features

- **Login**: Secure login system for parents to access their dashboard.
- **Parent Dashboard**: A simple dashboard where parents can manage payments and other interactions with the school.
- **Payment System**: Options for parents to make payments related to school fees or other services.

## Getting Started

Follow the steps below to run Smart Skool locally on your machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lipila-tech/smart-skool.git
   cd smart-skool
   ```
   
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start dev server**:
   ```bash
   npm start
   ```

### Buiding for production
    ```bash
    npm run build
    ```

### Folder Structure

    /src
        ├── components
        │   ├── Login.js        # Login screen for parents
        │   ├── Dashboard.js    # Parent dashboard after login
        │   └── Payment.js      # Payment screen for parents
            └── History.js      # History screen for parents
        ├── App.js              # Main app with routing setup
        ├── index.js            # Entry point for React app
        └── index.css           # Basic styling for the app


## Contributing
 
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
 
The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.