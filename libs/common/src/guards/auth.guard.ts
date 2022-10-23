import { CanActivate, ExecutionContext, Inject, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, timeout } from 'rxjs';

export class AuthGuard implements CanActivate {
  constructor(
    @Inject('SERVICE_AUTH')
    private readonly client: ClientProxy,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    try {
      const source$ = await this.client
        .send(
          { role: 'auth', cmd: 'check' },
          { jwt: req.headers['authorization']?.split(' ')[1] },
        )
        .pipe(timeout(5000));
      const res$ = await lastValueFrom(source$);
      req.user = res$;
      return res$;
    } catch (err) {
      Logger.error(err);
      return false;
    }
  }
}
