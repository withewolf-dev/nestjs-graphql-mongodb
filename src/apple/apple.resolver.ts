import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AppleService } from './apple.service';
import { AppleType } from './dto/create-apple.dto';
import { AppleInput } from './inputs/apple.inputs';

@Resolver('Apple')
export class AppleResolver {

  constructor(private readonly appleService: AppleService) { }

  @Query(() => [AppleType])
  async items(): Promise<AppleInput[]> {
    return this.appleService.findAll();
  }

  @Mutation(() => AppleType)
  async createItem(@Args('input') input: AppleInput): Promise<AppleInput> {
    return this.appleService.create(input);
  }

  @Mutation(() => AppleType)
  async updateItem(
    @Args('id') id: string,
    @Args('input') input: AppleInput,
  ): Promise<AppleInput> {
    return this.appleService.update(id, input);
  }

  @Mutation(() => AppleType)
  async deleteItem(@Args('id') id: string): Promise<AppleInput> {
    return this.appleService.delete(id);
  }

  @Query(() => String)
  async hello() {
    return 'hello';
  }
}
