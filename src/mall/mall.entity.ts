import { Store } from 'src/store/store.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mall {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Store, (store) => store.mall, { onDelete: 'CASCADE' })
  stores: Array<Store>;
}
