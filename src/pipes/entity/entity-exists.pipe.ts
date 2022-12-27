


import { ArgumentMetadata, PipeTransform, Injectable, Inject } from "@nestjs/common";
import { IS_EXISTS_ENTITY_PROVIDER_TOKEN } from "./consts";
import { IsEntityExistsProvider } from "./entity-provider.interface";

@Injectable()
export class EntityExistsPipe implements PipeTransform<string> { 
    constructor(@Inject(IS_EXISTS_ENTITY_PROVIDER_TOKEN) protected provider: IsEntityExistsProvider) { }
    async transform(id: string, _metadata: ArgumentMetadata) {
        const isExits = await this.provider.isExits(id);
        if(!isExits) {
            throw new Error();
        }
        return id;
    }
}

 