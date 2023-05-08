const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',

      user: 'root',
    //   ADD MYSQL PASSWORD HERE
      password: '',
      database: 'employees_db',
    },
    console.log(`Connected to the employees_db database.`)
  );

  // Read all departments
app.get('/api/departments', (req, res) => {
    const sql = `SELECT id, name AS title FROM department`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });

//   // Read list of all employees and associated roles using LEFT JOIN
// app.get('/api/employee', (req, res) => {
//     const sql = `SELECT employee.id AS employee, role.title FROM role LEFT JOIN employee ON employee.role = employee.id ORDER BY employee.last_name;`;
//     db.query(sql, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: rows
//       });
//     });
//   });

  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  