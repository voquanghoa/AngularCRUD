using System;

namespace AngularCRUDExample.ViewModel
{
    public class BookItem
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int? Year { get; set; }

        public string Author { get; set; }

        public DateTime? PublishDate { get; set; }
    }
}