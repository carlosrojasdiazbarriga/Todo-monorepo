import {
  IsBoolean,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({
    description: 'Título del todo',
    example: 'Comprar leche',
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  @MaxLength(30)
  title: string;

  @ApiProperty({
    description: 'Descripción detallada del todo',
    example: 'Comprar 2 litros de leche descremada',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(30)
  description?: string;

  @ApiProperty({
    description: 'Estado de completado del todo',
    example: false,
    required: false,
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
