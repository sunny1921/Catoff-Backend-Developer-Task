const { IsNotEmpty, IsEmail, IsString } = require('class-validator');

class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name;

  @IsNotEmpty()
  @IsEmail()
  email;

  @IsNotEmpty()
  @IsString()
  password;
}

module.exports = { CreateUserDto };
