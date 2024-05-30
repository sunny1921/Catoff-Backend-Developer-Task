const { Module } = require('@nestjs/common');
const { JwtModule } = require('@nestjs/jwt');
const { PassportModule } = require('@nestjs/passport');
const { AuthService } = require('./auth.service');
const { AuthController } = require('./auth.controller');
const { JwtStrategy } = require('./jwt.strategy');
const { UsersModule } = require('../users/users.module');
const { ConfigModule, ConfigService } = require('@nestjs/config');

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService) => ({
        secret: configService.get('jwtSecret'),
        signOptions: { expiresIn: '60m' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
class AuthModule {}

module.exports = { AuthModule };
