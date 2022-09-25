import { GenderType } from 'src/common/enum/products.enum';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    unique: true,
    length: 255,
  })
  title: string;

  @Column('float', {
    precision: 10,
  })
  price: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  //Slung
  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  slug: string;

  //stock
  @Column('int', {
    default: 0,
  })
  stock: number;

  //sizes
  @Column('text', {
    array: true,
  })
  sizes: string[];

  //gender
  @Column('enum', {
    enum: GenderType,
  })
  gender: string;

  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
