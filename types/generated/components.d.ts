import type { Schema, Struct } from '@strapi/strapi';

export interface CardsCard1 extends Struct.ComponentSchema {
  collectionName: 'components_cards_card1s';
  info: {
    description: '';
    displayName: 'Card1';
    icon: 'star';
  };
  attributes: {
    Autor: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }> &
      Schema.Attribute.DefaultTo<'Cruz del Sur'>;
    AutorImagen: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Camas: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Categoria: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }> &
      Schema.Attribute.DefaultTo<'Oportunidad'>;
    Descripcion: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
    imagen: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Lavabo: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Metros: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 5;
        },
        number
      >;
    Monto: Schema.Attribute.BigInteger &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: '01';
        },
        string
      >;
    Titulo: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
    Whatsapp: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }> &
      Schema.Attribute.DefaultTo<'https://wa.me/+59897078211?text=Hola...'>;
  };
}

export interface CardsCard2 extends Struct.ComponentSchema {
  collectionName: 'components_cards_card2s';
  info: {
    description: '';
    displayName: 'Card2';
    icon: 'question';
  };
  attributes: {
    Descripcion: Schema.Attribute.Text & Schema.Attribute.Required;
    Dormitorios: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    imagen: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    Lavabos: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Metros: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Monto: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    Tipo: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 4;
      }>;
    Titulo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CardsNewsCards extends Struct.ComponentSchema {
  collectionName: 'components_cards_news_cards';
  info: {
    description: '';
    displayName: 'NewsCards';
  };
  attributes: {
    Categoria: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    Descripcion: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
    Fecha: Schema.Attribute.Date &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'2024-11-28'>;
    Imagen: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    ImagenAutor: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    NombreAutor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
    Titulo: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.card1': CardsCard1;
      'cards.card2': CardsCard2;
      'cards.news-cards': CardsNewsCards;
    }
  }
}
