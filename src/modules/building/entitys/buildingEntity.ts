import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Building {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column('float', { default: 0 })
  squareMeters: number;

  @Column()
  location: string;

  @Column({
    type: 'enum',
    enum: ['En construccion', 'Terminado'],
  })
  state: 'En construccion' | 'Terminado';

  @Column('float')
  price: number;

  @Column({ nullable: true })
  urlImg: string; // URL completa de la imagen subida a Cloudinary

  @Column({
    type: 'enum',
    enum: ['alquilar', 'comprar'],
  })
  typeOfBusiness: 'alquilar' | 'comprar';

  @Column({ type: 'int', nullable: true })
  numberOfBedrooms: number;

  @Column({ type: 'int', nullable: true })
  numberOfBathroomsNumber: number;

  @Column({ type: 'int', nullable: true })
  numberOfDepartaments: number;

  @Column({
    type: 'enum',
    enum: ['casa', 'edificio'],
  })
  propertyType: 'casa' | 'edificio';
}
