import { UnauthorizedException, NotFoundException, BadRequestException, BadGatewayException } from "@nestjs/common";

export const Exceptions = {
    INVALID_TOKEN: new UnauthorizedException("Invalid token!", "INVALID_TOKEN"),
    USER_NOT_FOUND: new UnauthorizedException("User not found!", "USER_NOT_FOUND"),
    AUTHORIZATION_TOKEN_MUST_BE_PROVIDED: new UnauthorizedException("Authorization token must be provided!", "AUTHORIZATION_TOKEN_MUST_BE_PROVIDED"),
    USER_CANT_ACCESS_RESOURCE: new UnauthorizedException("User cant acces this resource!", "USER_CANT_ACCESS_RESOURCE"),
    BOT_NOT_FOUND: new NotFoundException("Bot not found", "BOT_NOT_FOUND"),
    ENTITY_IN_USE: new BadRequestException(`Entity is used in some interaction or attribute`, 'ENTITY_IN_USE'),
    WELCOME_INTERACTION_NOT_FOUND: new NotFoundException("Welcome interaction not found", "WELCOME_INTERACTION_NOT_FOUND"),
    FALLBACK_INTERACTION_NOT_FOUND: new NotFoundException("Fallback interaction not found", "FALLBACK_INTERACTION_NOT_FOUND"),
    NOT_UNIQUE_CONTEXT_INTERACTION: new BadRequestException("Interaction must be unique in this context", "NOT_UNIQUE_CONTEXT_INTERACTION"),
    CANNOT_CREATE_ON_PARENT_REFERENCE: new BadRequestException("Cannot create interaction when parent is a reference", "CANNOT_CREATE_ON_PARENT_REFERENCE"),
    CANNOT_DELETE_WELCOME_AND_FALLBACK: new BadRequestException("Interactions welcome or fallback cannot be deleted", "CANNOT_DELETE_WELCOME_AND_FALLBACK"),
    WORKSPACE_ID_DONT_MATCH: new BadRequestException("WorkspaceId don't match", "WORKSPACE_ID_DONT_MATCH"),
    ORGANIZATION_NOT_FOUND: new BadRequestException("Organization not found", "ORGANIZATION_NOT_FOUND"),
    BAD_REQUEST: new BadRequestException(),
    BAD_GATEWAY: new BadGatewayException(),    
}