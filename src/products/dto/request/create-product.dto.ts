import {
  IsString,
  MinLength,
  IsNumber,
  IsPositive,
  IsOptional,
  Matches,
  IsInt,
  IsArray,
  IsIn,
  IsEnum,
} from 'class-validator';
import { GenderType } from 'src/common/enum/products.enum';

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  // Exprecion regular para validar que el slug tenga el formato correcto
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'Slug is not valid',
  })
  slug?: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @IsString({ each: true })
  @IsArray()
  sizes: string[];

  @IsEnum(GenderType, {
    message: 'Type is not valid',
  })
  gender?: string;
}
