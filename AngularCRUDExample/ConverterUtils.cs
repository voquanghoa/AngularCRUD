using System;
using AngularCRUDExample.Model;
using AngularCRUDExample.ViewModel;
using AutoMapper;

namespace AngularCRUDExample
{
    public static class ConverterUtils
    {
        private static readonly MapperConfiguration mapperConfiguration = new MapperConfiguration(x =>
        {
            x.CreateMap<Book, BookItem>();
            x.CreateMap<Book, BookDetail>();
            x.CreateMap<BookCreate, Book>();
            x.CreateMap<BookUpdate, Book>();
        });

        private static readonly IMapper mapper = mapperConfiguration.CreateMapper();

        public static T ConvertTo<T>(this object source)
        {
            if (source == null)
            {
                throw new Exception("Nullpoint exception occurs!");
            }

            return mapper.Map<T>(source);
        }

        public static T MapTo<T>(this object source, T destination)
        {
            if (source == null || destination == null)
            {
                throw new Exception("Nullpoint exception occurs!");
            }

            return mapper.Map(source, destination);
        }
    }
}