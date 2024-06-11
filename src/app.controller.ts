import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import * as path from 'node:path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/functions/:functionName')
  async executeFunction(
    @Req() request: Request,
    @Param() param: { functionName: string },
    @Query() query: { args: string },
  ) {
    const { functionName } = param;
    const { args } = query;
    const filePath = `functions/${functionName}/index.js`;

    const actualPath = path.join(__dirname, '..', '..', filePath);
    console.log(actualPath);
    console.log(path.join(__dirname, filePath));

    // if (!fs.existsSync(actualPath)) {
    //   return 'Function not found';
    // }

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const caller = require(actualPath);

    console.log(caller, 'caller');
    try {
      if (typeof caller == 'function') {
        const returnedValue = caller(args);
        return returnedValue;
      } else if (typeof caller.default == 'function') {
        const returnedValue = caller.default(args);
        return returnedValue;
      }
    } catch (err) {
      return err;
    }
  }
}
