import { Mall } from 'src/mall/mall.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @ManyToOne(() => Mall, (mall) => mall.stores, { onDelete: 'CASCADE' })
  mall: Mall;
}
