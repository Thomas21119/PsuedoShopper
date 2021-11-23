const express = require('express');
const sequelize = require('./config/connection');
const session = require('express-session');
const handlebars = require('express-handlebars');
const bcrypt = require('bcrypt');
