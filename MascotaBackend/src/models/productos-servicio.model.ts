import {Entity, model, property} from '@loopback/repository';

@model()
export class ProductosServicio extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  precio: string;


  constructor(data?: Partial<ProductosServicio>) {
    super(data);
  }
}

export interface ProductosServicioRelations {
  // describe navigational properties here
}

export type ProductosServicioWithRelations = ProductosServicio & ProductosServicioRelations;
