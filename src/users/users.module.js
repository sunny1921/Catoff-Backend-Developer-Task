const { Module } = require('@nestjs/common');
const { SequelizeModule } = require('@nestjs/sequelize');
const { UsersService } = require('./users.service');
const { UsersController } = require('./users.controller');
const { User } = require('./entities/user.entity');

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    {
      provide: 'UsersService',
      useClass: UsersService,
    },
  ],
  exports: ['UsersService'],
})
class UsersModule {}

module.exports = { UsersModule };
