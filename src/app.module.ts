import { Module } from '@nestjs/common';
import { TimetableModule } from './timetable/timetable.module';

@Module({
  imports: [TimetableModule],
})
export class AppModule {}
