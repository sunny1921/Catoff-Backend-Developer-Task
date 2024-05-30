const { Injectable } = require('@nestjs/common');
const { PassportStrategy } = require('@nestjs/passport');
const { ExtractJwt, Strategy } = require('passport-jwt');
const { ConfigService } = require('@nestjs/config');
const { UsersService } = require('../users/users.service');

@Injectable()
class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService, usersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('jwtSecret'),
    });
    this.usersService = usersService;
  }

  async validate(payload) {
    const user = await this.usersService.findOne(payload.sub);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

module.exports = { JwtStrategy };
