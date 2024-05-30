const { ExceptionFilter, Catch, ArgumentsHost, HttpException } = require('@nestjs/common');
const { HttpAdapterHost } = require('@nestjs/core');

@Catch(HttpException)
class HttpExceptionFilter {
  constructor(httpAdapterHost) {
    this.httpAdapterHost = httpAdapterHost;
  }

  catch(exception, host) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const responseBody = {
      statusCode: exception.getStatus(),
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, exception.getStatus());
  }
}

module.exports = { HttpExceptionFilter };
