import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TimetableDto } from './dto/timetable.dto';
import { Timetable } from './interfaces/timetable.interface';
import { TimetableService } from './timetable.sevice';

@Controller('timetable')
export class TimetableController {
  constructor(private readonly timetableService: TimetableService) {}

  @Get()
  findAll(): Timetable[] {
    return this.timetableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Timetable {
    return this.timetableService.findById(id);
  }

  @Post()
  create(@Body() timetableDto: TimetableDto): void {
    return this.timetableService.create(timetableDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    return this.timetableService.delete(id);
  }

  @Put()
  update(
    @Body() timetableDto: TimetableDto,
  ): void{
    return this.timetableService.update(timetableDto);
  }
}
