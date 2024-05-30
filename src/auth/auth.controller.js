const { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } = require('@nestjs/common');
const { UsersService } = require('./users.service');
const { CreateUserDto } = require('./dto/create-user.dto');
const { UpdateUserDto } = require('./dto/update-user.dto');
const { JwtAuthGuard } = require('../auth/jwt-auth.guard');

@Controller('users')
class UsersController {
  constructor(usersService) {
    this.usersService = usersService;
  }

  async create(req, res) {
    const createUserDto = req.body;
    const result = await this.usersService.create(createUserDto);
    res.json(result);
  }

  async findAll(req, res) {
    const result = await this.usersService.findAll();
    res.json(result);
  }

  async findOne(req, res) {
    const result = await this.usersService.findOne(req.params.id);
    res.json(result);
  }

  async update(req, res) {
    const updateUserDto = req.body;
    const result = await this.usersService.update(req.params.id, updateUserDto);
    res.json(result);
  }

  async remove(req, res) {
    const result = await this.usersService.remove(req.params.id);
    res.json(result);
  }
}

const usersControllerInstance = new UsersController(new UsersService());

// Handlers
const createHandler = (req, res) => {
  usersControllerInstance.create(req, res);
};

const findAllHandler = (req, res) => {
  usersControllerInstance.findAll(req, res);
};

const findOneHandler = (req, res) => {
  usersControllerInstance.findOne(req, res);
};

const updateHandler = (req, res) => {
  usersControllerInstance.update(req, res);
};

const removeHandler = (req, res) => {
  usersControllerInstance.remove(req, res);
};

module.exports = { createHandler, findAllHandler, findOneHandler, updateHandler, removeHandler };
