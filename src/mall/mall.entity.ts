import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mall {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
