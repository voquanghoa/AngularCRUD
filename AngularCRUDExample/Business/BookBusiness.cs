using System.Collections.Generic;
using System.IO;
using System.Linq;
using AngularCRUDExample.Contract;
using AngularCRUDExample.Model;
using AngularCRUDExample.ViewModel;
using Newtonsoft.Json;

namespace AngularCRUDExample.Business
{
    public class BookBusiness: IBookBusiness
    {
        private readonly List<Book> books = LoadBooks();
        private const string fileName = "books.json";

        public List<BookItem> GetAll()
        {
            return books.ConvertTo<List<BookItem>>();
        }

        public BookDetail GetById(int id)
        {
            return GetBookById(id).ConvertTo<BookDetail>();
        }

        public void Update(BookUpdate bookUpdate)
        {
            var book = GetBookById(bookUpdate.Id);
            bookUpdate.MapTo(book);
            Save();
        }

        public void Create(BookCreate bookCreate)
        {
            var book = bookCreate.ConvertTo<Book>();
            if (books.Any())
            {
                book.Id = books.Max(x => x.Id) + 1;
            }
            else
            {
                book.Id = 1;
            }

            books.Add(book);
            Save();
        }

        public void Delete(int id)
        {
            books.Remove(GetBookById(id));
            Save();
        }

        private Book GetBookById(int id)
        {
            return books.First(x => x.Id == id);
        }

        private static List<Book> LoadBooks()
        {
            try
            {
                var json = File.ReadAllText(fileName);
                return JsonConvert.DeserializeObject<List<Book>>(json);
            }
            catch
            {
                return new List<Book>();
            }
        }

        private void Save()
        {
            File.WriteAllText(fileName, JsonConvert.SerializeObject(books));
        }
    }
}