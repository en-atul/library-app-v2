import { Test, TestingModule } from '@nestjs/testing';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';

describe('MembersController', () => {
  let membersController: MembersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MembersController],
      providers: [MembersService],
    }).compile();

    membersController = app.get<MembersController>(MembersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(membersController.getHello()).toBe('Hello World!');
    });
  });
});
