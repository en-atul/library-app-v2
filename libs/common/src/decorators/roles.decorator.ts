import { SetMetadata } from "@nestjs/common";
import { RoleTypes } from "../interfaces";

export const Roles = (...roles: RoleTypes[]) => SetMetadata("roles", roles);