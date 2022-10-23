import { Injectable } from '@nestjs/common';

@Injectable()
export class MembersService {
  getHello(): string {
    return 'Hello World!';
  }
}
