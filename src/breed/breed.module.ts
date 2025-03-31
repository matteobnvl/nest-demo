import { Module } from '@nestjs/common';
import { BreedController } from './breed.controller';
import { BreedService } from './breed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedEntity } from './breed.entity';
import { CatEntity } from 'src/cat/cat.entity';
import { CatService } from 'src/cat/cat.service';
@Module({
  imports: [TypeOrmModule.forFeature([BreedEntity, CatEntity])],
  controllers: [BreedController],
  providers: [BreedService, CatService],
})
export class BreedModule {}
