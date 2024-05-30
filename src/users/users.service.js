import { InjectModel } from '@nestjs/sequelize';
const { Injectable, NotFoundException, ConflictException } = require('@nestjs/common');
const { InjectModel } = require('@nestjs/sequelize');
const User = require('./user.model');

@Injectable()
class UsersService {
  constructor(@InjectModel(User) userModel) {
    this.userModel = userModel;
  }

  async findAll() {
    return this.userModel.findAll({ include: ['walletAddresses'] });
  }

  async findOne(id) {
    const user = await this.userModel.findByPk(id, { include: ['walletAddresses'] });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async create(user) {
    try {
      return await this.userModel.create(user);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new ConflictException('Email already exists');
      }
      throw error;
    }
  }

  async update(id, user) {
    const [numberOfAffectedRows, [updatedUser]] = await this.userModel.update(user, {
      where: { id },
      returning: true,
    });
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException('User not found');
    }
    return updatedUser;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
  }
}

module.exports = UsersService;
