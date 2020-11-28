using System;

namespace AngularCRUDExample.ViewModel
{
    public class BookCreate
    {
        public string Name { get; set; }

        public int? Year { get; set; }

        public string Author { get; set; }

        public string Description { get; set; }

        public DateTime? PublishDate { get; set; }
    }
}