import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Md Rashid',
    email: 'rashid@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Abdul Wasit',
    email: 'wasit@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
