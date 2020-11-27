using System.Collections.Generic;
using AngularCRUDExample.ViewModel;

namespace AngularCRUDExample.Contract
{
    public interface IBookBusiness
    {
        List<BookItem> GetAll();

        BookDetail GetById(int id);

        void Update(BookUpdate bookUpdate);

        void Create(BookCreate bookCreate);

        void Delete(int id);
    }
}