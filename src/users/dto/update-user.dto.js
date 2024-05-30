const { PartialType } = require('@nestjs/swagger');
const { CreateUserDto } = require('./create-user.dto');

class UpdateUserDto extends PartialType(CreateUserDto) {}

module.exports = { UpdateUserDto };
