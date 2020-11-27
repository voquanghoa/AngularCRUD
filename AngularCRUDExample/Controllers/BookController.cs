using System.Collections.Generic;
using AngularCRUDExample.Contract;
using AngularCRUDExample.ViewModel;
using Microsoft.AspNetCore.Mvc;

namespace AngularCRUDExample.Controllers
{
    [Route("api/books")]
    public class BookController: ControllerBase
    {
        private readonly IBookBusiness bookBusiness;

        public BookController(IBookBusiness bookBusiness)
        {
            this.bookBusiness = bookBusiness;
        }

        [HttpGet]
        public List<BookItem> GetAll() => bookBusiness.GetAll();

        [HttpPost]
        public void Create([FromBody] BookCreate bookCreate) => bookBusiness.Create(bookCreate);

        [HttpPut]
        public void Update([FromBody] BookUpdate bookUpdate) => bookBusiness.Update(bookUpdate);

        [HttpGet("{id}")]
        public BookDetail GetById(int id) => bookBusiness.GetById(id);

        [HttpDelete("{id}")]
        public void Delete(int id) => bookBusiness.Delete(id);
    }
}