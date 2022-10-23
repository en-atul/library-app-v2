import { Controller, Get } from '@nestjs/common';
import { MembersService } from './members.service';

@Controller()
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Get()
  getHello(): string {
    return this.membersService.getHello();
  }
}
